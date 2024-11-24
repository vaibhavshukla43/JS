// reduce

const mynum= [1,3,5,7,8,9]

const newone =mynum.reduce((arr,curr)=> arr+curr,0);
console.log(newone)

// shoppinig cart 
const shoppingCart =[
        {
            item1:"refined-0il",
            price: 320
        },
        {
            item1:"tomato",
            price: 120
        },
        {
            item1:"mortine",
            price: 46 
        }
]

const price=shoppingCart.reduce((arr,curr)=>arr+curr.price,0)
console.log(price);
