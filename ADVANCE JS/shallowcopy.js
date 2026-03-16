let original = {
  name: "Abhinav",
  address: {
    city: "Ghaziabad"
  }
};

let copy = { ...original };   // shallow copy

copy.name = "Rahul";
copy.address.city = "Delhi";

console.log(original.name);        // Abhinav (unchanged)
console.log(original.address.city); // Delhi (changed!)