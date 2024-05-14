let a: string | null = null; // it means value of can be a string or number

type point = {
    x: number;
    y: number;
    readonly _id: string; // you can assign it value only one time
}

let user : point = {
    x: 5,
    y: 12,
    _id: "dh"
}

user.x = 9;
// user._id = "dh"; this gives error because _id is readonly


type cardNum = {
    cardnum: string;
}
type cardDate = {
    carddate: string;
}

type cardDetail = cardNum & cardDate &{
    about?: string; // this ? here means that {about} is an optional
}

function newCard (a: cardDetail){

}

// newCard({cardnum:"", carddate:"", about:""});
newCard({cardnum:"", carddate:""});

// const data: number[] | string[] = [1,2,3]; this means the data can be a array of number or string.
const data2: (number | string)[] = [1,2,"3"]; // this means the data2 array can be a array of number and string mix.

const arr: Array<number> = [2,5,6,9] // this is an another Way of Declaring an array

// Tuples

let aname: [string, number, boolean]
// aname = [true, "21", 21] this is not right because in tuple order is important
aname = ["dk", 21, true]

// enums

enum Seatchoice {
    one, // its value is 0
    two, // its value is 1 
    three = 5, // its value is 5
    four // its value is 6
}
