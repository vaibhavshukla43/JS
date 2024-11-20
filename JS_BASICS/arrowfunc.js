// const red = function(){
//     console.log(this)
// }
// console.log(this);
// red();

function chai(){
   username : " vaihbav" 
   email: "vaibhav@micosoft.com"
   console.log(this)
}

// chai();

// Arrow function 
// rmovoe funtion keyword from above and add  "=> " after the parenthesys


// const chai1 = function( ){
//      console.log( "vaibhav")
// }

const chai2 =() => {
    console.log( "vaibhav")
    console.log(this)
}

// chai2()

// arrow function

const addnum=(num1,num2)=>{
   return num1+num2;
}

console.log(addnum(3,5));

// implicit  function

// if there is only one return statement we ned not to use parenthesys 
// we would return like 

/*
type 1 

const addnum=(num1,num2) => return num1+num2;

also we need not to use return  statement  .... like 

const addnum=(num1,num2)=> num1+num2;

*/

const addnum1=(num1,num2)=> num1+num2;

console.log(addnum1(3,4));

// imp .. if there curly braces in use , there must be return statement 
// for object to be return wwew need to wrap them in the parentheses 
// like ..

const name =()=>({username: "vaibhav"});
console.log(name());