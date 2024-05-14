interface user {
    email: string,

    newfunction:() => string
    new2function(): string
}

const myname: user = {
    email: "",
    newfunction:() => {return ""},
    new2function(){return ""}
}

// interface newUser extends user//, another {
//     phone: number
// }

// const myname2: newUser = {
//     email: "",
//     newfunction:() => {return ""},
//     new2function(){return ""},
//     phone: 45
// }

//  tsc --init
//  In tsconfig.json file 
//         find "outdir" and make its value to the path where you want the compiled js File
//  tsc -w (to watch continously)

//  use live server or lite-server(npm i lite-server)