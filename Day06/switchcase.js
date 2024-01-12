function greet(nationality) {
    let greeting;

    switch (nationality) {
        case "American":
            greeting = "Hello";
            break;
        case "French":
            greeting = "Bonjour";
            break;
        case "German":
            greeting = "Hallo";
            break;
        case "Spanish":
            greeting = "Hola";
            break;
        case "Italian":
            greeting = "Ciao";
            break;
        default:
            greeting = "Hello";
    }

    return greeting;
}

// 
let nationality = "French";
//  
console.log(greet(nationality));  