var obj = {name:"kumar"}
var student = {name:"utkarsh"}
var greeting = function(a,b,c){
    return "welcome" + this.name+ "to"+a+ " " +b+" in "+c;
}
greeting.call(obj,"test1","test2", "test3")
greeting.call(student,"test1","test2", "test3")
greeting.apply(obj,["kumar","utkarsh","test"])
let x = greeting.bind(obj,["kumar","utkarsh","test"])
console.log(x())