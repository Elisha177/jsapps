function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage:
const original = "Hello, World!";
const reversed = reverseString(original);
console.log("Original String:", original);
console.log("Reversed String:", reversed);
