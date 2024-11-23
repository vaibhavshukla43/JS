// higher order function ....
// const greetings= [1,2,3,4,5,6,7,8,9];
// for( const greet of greetings){
//      console.log(greet);
// }

// map 
const maps = new Map()
maps.set('IND',"INDIA")
maps.set('UK',"UNITED KINGDOM")
maps.set('US', "UNITED STATES OF AMERICA")

// console.log(maps);


// for (const t of maps) {
//      console.log(t)
     
// }
// for (const [t,u] of maps) {
//      console.log(t ,':', u )
     
// }

// objects :--

// const me = {
//      'love' :"money",
//      'money':"happiness"
// }

// for (const [element] of me) {
//      console.log(element)    
// }

/* 
 we can say that objects are not iterable by for-of loops
 we need to use :- for-in loops

*/

const myObject ={
     love : "money",
     money: "happiness",
     happiness: "peace",
} 

for(const key in myObject) {
     console.log(myObject[key]);
}

