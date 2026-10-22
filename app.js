const fs = require('fs');
const yargs = require('yargs');
const dataFile = require('./func.js');


yargs.command({
    command : 'add',
    describe : 'Add a new person',
    builder : {
        id : {
            describe : 'id',
            demandOption : true,
            type : 'number'

        },
        fname : {
            describe : 'First Name',
            demandOption : true,
            type : 'string'
        },
        lname : {
            describe : 'Last Name',
            demandOption : true,
            type : 'string'
        },
        age : {
            describe : 'Age',
            demandOption : true,
            type : 'number'
        },
        city : {
            describe : 'City',
            demandOption : true,
            type : 'string'
        }
    },
    
    handler : (x) => {
        dataFile.data(x.id, x.fname, x.lname, x.age, x.city);
    }
})


yargs.command({
    command : 'view',
    describe : 'to view all persons',
    handler : () => {
       console.log(dataFile.jsTOob());
    }
})

yargs.command({
    command : 'search',
    describe : 'to find a persons',
    builder : {
        id : {
            describe : 'id of the person',
            demandOption : true,
            type : 'number'
        }
    },
    handler : (x) => {
        dataFile.search(x.id);
    } 
})

yargs.command({
    command : 'delete',
    describe : 'to delete a persons',
    builder : {
        id : {
            describe : 'id of the person',
            demandOption : true,
            type : 'number'
        }
    },
    handler : (x) => {
        dataFile.deletePerson(x.id);
    } 
})

yargs.command({
    command : 'deleteAll',
    describe : 'to delete all persons',
    handler : () => {
        fs.writeFileSync('data.json', JSON.stringify([]));
        console.log('you deleted all persons');
    }
})

yargs.command({
    command : 'viewSP',
    describe : 'to view persons',
    handler : () => {
        dataFile.viewSp();
    }
})

const x = yargs.parse();

