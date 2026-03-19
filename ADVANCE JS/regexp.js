// String
let text = "Hello hello HeLLo";

// Regular Expression with flags:
// g → global (find all matches)
// i → case-insensitive
let regex = /hello/gi;

// Using test() → checks if pattern exists
console.log("Using test():", regex.test(text));

// Using match() → returns all matches
let result = text.match(regex);
console.log("Using match():", result);