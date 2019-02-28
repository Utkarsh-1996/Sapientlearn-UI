// function * generatorFunction(){
//     console.log("this will be executed first")
//     yield "hello"
//     console.log("i will be printed after a pause")
//     yield "world"
//     yield "rocking!!"
// }
// const generatorObject = generatorFunction();
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
(function(){
    "use strict"
    function * powerSeries(number,power){
        let base = number;
        while(true){
            yield Math.pow(base,power)
            base++
        }
    }
    const pow1 = powerSeries(2,4)
    console.log(pow1.next().value)
    console.log(pow1.next().value)
    console.log(pow1.next().value)

})();