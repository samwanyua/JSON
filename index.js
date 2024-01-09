/**
 * JSON -JavaScript Object Notation
 * Lightweight data-interchange format
 * Based on a subset of JS
 * Often used with AJAX - Asynchronous Javascript and XML -> sends data to and fro client to the server without having to refresh the page
 * 
 * Can be used with most programming language
 * 
 * //DATA TYPES
 * >> numbers
 * >> strings - wrapped in ""
 * >> boolean
 * >> arrays
 * >> objects
 * >> null
 * 
 * //SYNTAX
 * >> key/value pairs in - {"name": "Brad"}
 * >> file type .json
 * >> MIME type - application/json //Multipurpose Internet Mail Extensions type
 * 
 */

const person = {
    name: "Brad",
    age: 34,
    //email: () => "brad@gmail.com"
    address: {
        street: '5 main street',
        city: 'Boston'
    },
    children: ['Brian','Nicolas' ]
}

console.log(person.name);
// console.log(person.email());
console.log(person.address.street);
console.log(person.children[0]);

//changing object to JSON string
personString = JSON.stringify(person);
console.log(personString);

//JSON String to object
personObject = JSON.parse(personString);
console.log(personObject);

const people = [
    {
        name: 'Wanyua',
        age: 23
    },
    {
        name: 'Gitau',
        age: 25
    },
    {
        name: 'Kamau',
        age: 43
    }
];

console.log(people[1].age);

//looping the array
for(let i = 0; i < people.length; i++){
    console.log(people[i]);
}



//map

const list = people.map(individual => individual.name);
console.log(list);

//to append the queue on the html
let output ='';
//forEach
const queue = people.forEach(individual => output += `<li> ${individual.name}</li>`);
document.getElementById('people').innerHTML = output;
document.getElementById('people').style.listStyleType = 'none';

