// 1. if else
// 2. swtich case 

// in the switch case we seen the fromat like
 
const n = 1 ; 

switch (n){
  case 1 :
    console.log(1);
    break;
  case 2 :
    console.log(2);
    break;
  default:
     console.log(" good morning ");
     
}
  

// falsy value 

// 0 , -0, false, " " , 0n(BIGINT) , null , undefined, NaN
// all other than this are truthy value 
//

// truthy value 

// "0 " , 'false ', [],{},funtion(){}  <---- these  are also truthy values

// then how we check empty array and oblects .. in the conditions

// like this ..

const userEmail= []

if(userEmail.length ==0){
    console.log("empty");
    
}

// similarly if we want to check objects we need to check their keys

const newObject ={
}
/*
here ,first we call object and then with object.keys()  
gives us a array / or return us a array 
after that length property give us kh=nowledge of the 
empty or not ..
*/
if(Object.keys(newObject).length == 0){
    console.log("object is empty");
    
}

// null coalescing operator (??) : null , undefined 

let val;
val =(5 ?? 10);
console.log(val);

let val1;
val1 = ( null ?? 10);
console.log(val1);

let va2;
val2 = ( null ?? undefined);
console.log(val2);

