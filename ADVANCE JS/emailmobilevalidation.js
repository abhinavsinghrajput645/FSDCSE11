let email = "test@gmail.com";
let mobile = "9876543210";

let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i;
let mobileRegex = /^[6-9]\d{9}$/;

console.log("Email:", emailRegex.test(email) ? "Valid" : "Invalid");
console.log("Mobile:", mobileRegex.test(mobile) ? "Valid" : "Invalid");