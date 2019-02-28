function * generatorFunction(){
    console.log("this will be executed first")
    yield "hello"
    console.log("i will be printed after a pause")
    yield "world"
    yield "rocking!!"
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
