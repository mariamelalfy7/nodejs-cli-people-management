const fs = require('fs');

function data(id , fname, lname , age , city ) {
    const data = jsTOob();

    data.push({
        id : id,
        lname: lname,
        fname: fname,
        age : age,
        city : city,
    })

    obTOjs(data);

}
 

function jsTOob() {
    try {
        const allData = fs.readFileSync('data.json');
        return JSON.parse(allData);
    } catch {
        return [];
    }
}

function obTOjs(data) {
    fs.writeFileSync('data.json', JSON.stringify(data));
} 

function search(id){
    const data = jsTOob();
    const person = data.find((person) => person.id === id);
    if(person){
        console.log('here is your data');
        console.log(person);
    }else{
        console.log('id NOT FOUND');
    }
}

function deletePerson(id) {
    const data = jsTOob();
    const newData = data.filter((person) => person.id !== id);
    if(newData.length !== data.length){
        console.log('you deleted a person');
    }else{
        console.log('id NOT FOUND');
    }
    obTOjs(newData);
}

function viewSp(){
    const data = jsTOob();
    data.forEach((person) => console.log(person.fname + ' ' + person.lname + ' ' + person.city));
}

module.exports = {
    data : data,
    jsTOob : jsTOob,
    search : search,
    deletePerson : deletePerson,
    viewSp : viewSp,
}