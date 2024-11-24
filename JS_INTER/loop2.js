const players= ["Rohit Sharma","Virat Kohli","Jasprit Bumrah","Yuvraj Singh","Shikhar Dhawan"]

// players.forEach(function(val){
//     console.log(val);
    
// })

// by Arrow Function

// players.forEach((val)=>{
//     console.log(val)
// })


//[{},{},{}] // object inside array :::::

const cricketers =[ 

    {
      csk: "MSD",
      role: "WK",
      title:"5"
    },
    {
     mi : "RG Sharma",
     role: "Opener",
     tittle: "5"
    },
    {
      rcb:"Virat kohli",
      role : "top order",
      title: "5",
    }
]

cricketers.forEach((items)=>{
    console.log(items.role);
})