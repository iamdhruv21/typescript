// class user{
//     email: string
//     constructor(em: string){
//         this.email = em
//     }
// }
//another way of declaring a class
class user{
    private readonly email1: string = "@gmail"
    constructor(
        public email: string,
        public city: string
    ){

    }

    get getmail():string {
        return ""
    }

    set setcity(na: string){
        this.city = na
    }
}

class newuser extends user{

}

const obj = new newuser("@gmail", "name")


// abstract class abc{}

// abstract class cannot have an Object 