const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())

// 
const myCreatedDate = new Date( 2024 , 10, 18)
// console.log(myCreatedDate.toDateString());
const myNewDate = new Date("11-18-2024");
console.log(myNewDate.toLocaleString());
// time stamp 
let mytime = Date.now();
console.log(Math.floor(mytime/1000)) // return time in milisecond
