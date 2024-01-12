// There are 3 ways of writing javaScript Functions
// Method1 : Function Declartion 
 function sum(x,y){
    let add = x+y;
    return add;

 }
 console.log(sum(2,3));

//  Method2 : Function Expressions - defines function using variable
const add = function sum(x,y){
    return x+y;
}
console.log(add(6,2));


// Arrow function 
let Sum = (x,y) => {
    return x+y;

}
console.log(Sum(4,7))