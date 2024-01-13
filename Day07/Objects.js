//creating an object in js
const person = {
    firstName: "Noah",
    lastName: "Dave",
    age: 23,
    greet: () => {
      console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
    }
  };

// Accessing its properties
console.log(person.firstName); 
console.log(person["lastName"]); 
console.log(`I am ${person.firstName} and of age ${person.age}`);
   
// Calling a method
person.greet(); 
  

// Looping through object properties with for...in loop
for (let key in person) {
    console.log(`${person[key]}`);
  }
  
// Creating an object with nested objects
const person2 = {
    firstName: "Noah",
    lastName: "Dave",
    age: 23,
    address: {
      street: "Muhoho Avenue",
      city: "Nairobi",
      country: "Kenya"
    },
    contacts: {
      email: "noahdave@gmail.com",
      phone: "0729239023"
    },
    calculateage : function (){
         console.log(`i am ${person.age} years of age`) 
    }
  };
//   accessing the properties
  console.log(person2.firstName); 
  console.log(person2.address.city); 
  console.log(person2.contacts.email); 
  person2.calculateage();
  

//   nested 
  let SpaceShip2 ={
    crew :{
      captain: {
        name: 'Joy',
        age: '30'
      },
  
      firstAider: {
        name: 'Fiona',
        age: 19
      },
  
      pilot: {
        name: 'Jack',
        age: 26
      }
    }
  }
  
  for (let crewMember in SpaceShip2.crew){
    console.log('I am ' + SpaceShip2.crew[crewMember].name + ',I am ' + crewMember + ' and I am ' + SpaceShip2.crew[crewMember].age + 'years old')
  }
  

  