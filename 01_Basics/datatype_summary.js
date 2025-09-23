//  Primitive  =  7 type

// 7 type = string, number, boolean , null, undefined , symbol, Bigint

const score = 100
const scorevalue = 1000.56
const isloggedin = false
const outsidetemp = null

let useremail;


// referance type or non primitives

// Arrays, Objects , Function

const heros = ["shakiman", "naagraaj"];
let myobj = {
    name : "anikesh" ,
    age : 20
}

const myfunction = function(){
    console.log("Hellow World");
}

console.log(typeof heros);


// *****************************************

//  stack(primitive)   heap (non primitive)

let myname = "anikesh"
let anothername = myname
  
anothername = "pritam"

console.log(myname);
console.log(anothername);

let userone = {
    email : "ani@gmail.com",
    upi : "ani@okicici"
}

let usertwo = userone

usertwo.email = "pritam@gmail.com"

console.log(userone.email);
console.log(usertwo.email);