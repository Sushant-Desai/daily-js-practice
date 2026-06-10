// Setup
const original = {
  name: "John",
  address: { city: "NYC" }
};

// SHALLOW COPY
const shallow = { ...original };
shallow.address.city = "LA";
console.log(original.address.city); // "LA"  Original changed!

// DEEP COPY  
const deep = structuredClone(original);
deep.address.city = "Chicago";
console.log(original.address.city); // "LA" Original unchanged


const original1 = {
  name: "John",
  address: {
    city: "NYC"
  }
};

const deep1 = {
  ...original1,
  address: {
    ...original1.address
  }
};

deep1.address.city = "Chicago";

console.log(original1.address.city); // NYC ✅ Original unchanged
console.log(deep1.address.city);     // Chicago