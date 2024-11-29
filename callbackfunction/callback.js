function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function callbackFunction() {
    console.log("This is the callback function being executed!");
}

// Example usage:
greetUser("John", callbackFunction);
