// similar as templates of c++

function identity<type>(val: type): type{
    return val;
}

// function identity<type>(val: type[]): type{ input has a array of some type 
//     return val;
// }

// Syntax by arrow Function
// const a = <type>(): => {}

// const a = <T,>(): => {} // some people also use this(<T,>) syntax because when it is used with html not to confuse it with a html tag

let a = identity<string>("abc");

// Narrowing --> read this concept in Official Documentation