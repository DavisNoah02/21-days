// Creating an array of fruits
const fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements of an array
console.log(fruits[0]); 
console.log(fruits[2]);

// modify 2nd element to Grapes
fruits[1]= "Grapes";
console.log(fruits);
//push - adding elements to the end
fruits.push("Guava", "Watermelon")
console.log(fruits);
//pop - removing elements from the end
const removedfruit = fruits.pop();
console.log(removedfruit);
console.log(fruits);//Watermelon removed


//Adding elements at the begining
fruits.unshift("Pineapple" ,"Macademia")
console.log(fruits)
// Removing elements at the begining
const removedfruit2 = fruits.shift()
console.log(removedfruit2);
console.log(fruits);  //Pineapple is removed


// Using forEach to iterate over each element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(numbers){
    console.log("These is no. " +numbers);
})
// Example with arrow function 
numbers.forEach( numbers=>console.log(numbers))


// Slicing an array - extracts from index 1 to 3(index 1 and 2)
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);


// findIndex method.
const num = [10, 20, 30, 40, 50];
// Find the index of the element greater than 30
const index = numbers.findIndex(function (num) {
   result = num = 30;
    return  result;
} );
console.log(index); // Output: 3 (index of the first element greater than 30)


// .map method - adds 2 to each array element
var arr= [2,4,8,10] 
var updatedArr = arr.map(val=> val+2) 
console.log(arr); 
console.log(updatedArr);

//filter method - return elemts that satisfy condition applied inside the callback function
// returns elements smaller than 5
var arr= [2,4,8,10] 
var updatedArr = arr.filter(val=> val<5) 
console.log(arr); 
console.log(updatedArr);

// reduce method - calculates sum of array 
var arr= [2,4,8,10] 
var updatedArr = arr.reduce((prev, curr)=> curr= prev+curr) 
console.log(arr); 
console.log(updatedArr);
