// destructure
let integers = [0,22,45,67,89,67]
let [a,b,c,d,e,f] = integers

console.log(a)    // 0
console.log(c)    // 45
console.log(f)    // 67

let information =  [
    {
        firstName:"virat",
        lastName:"kohli"
    },
    {
        firstName:"anushka",
        lastName:"sharma"
    }
]

let [{firstName:f1,lastName:l1},{firstName:f2,lastName:l2}] = information
console.log(f1)   // virat
console.log(f2)   // anushka



// spread operator 

let studentNames = ["aman","ankur","payal","pooja","sohan"]

function toppers (first,second,third){
console.log(first)   // aman
console.log(second)  // ankur 
console.log(third)   // payal
}

toppers(studentNames[0],studentNames[1],studentNames[1])   

toppers(...studentNames)   // by using spread operator     aman , ankur , payal


let names1 = ["akash","binny","dinesh"]
let names2 = ["zaheer","srinath","nehra"]
let names3 = [...names1,...names2]

console.log(names3)  // ["akash","binny","dinesh","zaheer","srinath","nehra"]

function addition (...oddNumbers){          // we paases array named odd numbers using spread operator in parameter
    console.log(oddNumbers)                     //  [1,3,5,7,9]
    return oddNumbers.reduce(function(acc,el){
        return acc+el                            //25
    },0)
}
let a1 =addition(1,3,5,7,9)
console.log(a1)



// hoisting 


// if we call function declaration first before defining
// it will work normal 

subtract()               // 8
function subtract(){
    console.log(10-2)
}


//console.log(x)    // error => Cannot access 'x' before initialization , we need to declare first in let
let x ;
console.log(x) // undefined    , only declared not defined any value
x = 10
console.log(x) // 10            , declared and defined both


// console.log(y)          // error - y is not defined 


// hoisting

console.log(z)       // undefined , we can declare after printing the var variable
var z;


console.log (z1)   // undefined
var z1 = 22


//console.log(t1)   // error=> Cannot access 't1' before initialization
// const t ;  syntax error 
const t1 = 30;


add1()         // we can call before define in function declaration
function add1(){
    console.log(1+1)  //2   
}

// we can't call before define in function expression

//a2()   error => Cannot access 'a2' before initialization
let a2 = function add2(){
    console.log(1+1)     
}
a2()  //2

// add3() add3 is not a function
var add3 = function(){
    console.log(2+2)   //4
}
add3()

console.log(y1)      // undefined
var y1
y1 = 5
console.log(y1)        //5