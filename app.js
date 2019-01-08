

var person = { 
               firstName: 'Onlong', 
               lastName: 'Begone',
               address: {
                street: '122 Main',
                City: 'New York',
                State: 'NY'
            }
            };

console.log(person);

console.log(person.address);

function greet(person) {
    console.log('Hi '  + person.firstName);    
}

greet(person);

