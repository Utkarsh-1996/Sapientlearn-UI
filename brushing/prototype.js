// var Animal = {
//     do : "live"
// }
// var Rabbit = {
//     do : "run"
// }
// Rabbit.__proto__ = Animal
// //Animal.__proto__ = Rabbit

// //console.log(Animal.__proto__.__proto__)
// //console.log(Rabbit.__proto__.__proto__.__proto__)
// Animal.__proto__ = null
// console.log(Animal)

let user = {
    name: "John",
    surname: "Smith",
    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },
    get fullName(){
        return (this.name)+(this.surname)
    }
}
let admin = {
    __proto__: user,
    isAdmin: true
}
alert(admin.fullName)



