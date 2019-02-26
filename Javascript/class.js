class student{
    constructor(a=10,b=20){
        this.firstname = a;
        this.lastname = b;
        this.age;
    }
    getFullName(){ 
        return this.firstname+this.lastname;
    }
}
// let stu = new student();
// stu.firstname = "Kumar"
// stu.lastname = "Utkarsh"
// stu.age = 21
// console.log(stu.getFullName())

class department extends student{
    constructor(a,b){
        super(a,b);
        this.deptname;

    }
}
let dept1 = new department();
dept1.firstname = "Kumar"
dept1.lastname = "Utkarsh"
dept1.age = 21
dept1.deptname = "cse"
console.log(dept1.getFullName())


let m = new Map();
m.set("Kumar", "Utkarsh")
m.set("Department", "CSE")
//console.log(m)
m.forEach((v,k)=>{
    console.log(k)
    console.log(v)
})
console.log(m.size)
m.delete("Kumar");
m.forEach((v,k)=>{
    console.log(k)
    console.log(v)
})
var myArray=["a","b","c"]
let n = new Set();
n.add("werwe");
n.add("asdasdasd")
myArray.forEach(ele =>{
    n.add(ele)
})
console.log(n)


//destructuring
var user = {name:"Utkarsh",age:21,gender:"Male"}
var {name,age}={...user} //destructuring of an object
console.log(name)
console.log(age)

var[a,b]=[1,2]
console.log(a)
console.log(b)

