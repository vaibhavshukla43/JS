const num =[1,2,3,4,5,6,7,8,9,10] 

const mynums=num.filter((item)=> item>4)
console.log(mynums)
// filter return call back ;
const mynum=num.filter((item)=> {
    return item>4
})
// map is also call back function 
const mynum1= num.map((item)=> item*2)
console.log(mynum1);

//  chaining in the maps

const newNum= num
.map((item)=> item*2)
.map((item)=> item+10)
.filter((item)=> num+1)

console.log(newNum)
