//creating an object in js
const person = {
    firstName: "Noah",
    lastName: "Dave",
    age: 23,
    greet: function() {
      console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
    }
  };

// Accessing its properties
console.log(person.firstName); 
console.log(person["lastName"]); 
   

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
    }
  };
//   accessing the properties
  console.log(person2.firstName); 
  console.log(person2.address.city); 
  console.log(person2.contacts.email); 
  
  

  