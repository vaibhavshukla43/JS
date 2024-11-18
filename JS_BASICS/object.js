
const mysym= Symbol("keys")
const jsuser={
    name : "vaibhav",
    [mysym]: "keys1",
    age:22,
    email: "vaibhav@tcs.com",
    location : "Rampur",
}

console.log(jsuser)
console.log(jsuser[mysym]);

