// // var

// var a =1; // global scope

// function name(params) {
  
//     var b = 2 // function scope

// }

// {
//     var c = 3 // global scope
// }

// function name2(params) {
  
//     let d = 2 // block scope

// }

// {
//     let e = 3 // block scope
//     console.log(e)

// }

// console.log(a)
// // console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)



// shadowing --------------------------------

// var a = 2
// let b = 2

// function name(params) {
//     var a =3
//     let b = 3

//     console.log(a)
//     console.log(b)
// }


// console.log(a)
// console.log(b)


// ilegal shadowing --------------------------------

// var a = 2
// let b = 2


// // var a = 2
// // var b = 2

// console.log(a)
// console.log(b)


// hoisting

// console.log(a)
// console.log(b)
// var a=5
// let b =5

console.log(x);
var x = 5;
let y = 10;
const z = 15;

function test() {
    console.log(y);
    console.log(z);
    var x = 20;
    console.log(x);
}

test();
console.log(x);

String.prototype

Boolean.prototype


function outer() {
    const x = 10
    function inner() {
        console.log(x+10)
    }
    return inner
    
}

