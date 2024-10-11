console.log("Hello world!");







let someMessage = "Bananas!";

if (someMessage) {
    console.log("Conditional log");
}

if (someMessage == "oranges"){
    console.log("We have oranges!");
}

let (someNumberMessage = 10);

if (someNumberMessage === 10){
    console.log("We have 10 of the things!");
} 

if (someNumberMessage >= 5){
    console.log("Number is greater than 5");
}

let someCoolMessage = someMessage ? someMessage.substring(0, 2).toLocaleUpperCase() : "Default message.here";

console.log(someCoolMessage); 

if(someMessage == "oranges"){
    let someCoolMessage = someMessage.substring(0, 2).toLocaleUpperCase()
} else {
    let someCoolMessage = "Default message here";
    console.log(someCoolMessage, someCoolMessage, someCoolMessage);
}