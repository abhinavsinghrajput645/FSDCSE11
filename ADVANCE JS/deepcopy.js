let original = {
  name: "Abhinav",
  address: {
    city: "Ghaziabad"
  }
};

let copy = JSON.parse(JSON.stringify(original)); // deep copy

copy.address.city = "Delhi";

console.log(original.address.city); // Ghaziabad
console.log(copy.address.city);     // Delhi