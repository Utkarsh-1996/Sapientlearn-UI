// "use strict"
// var count=5;
// function counter(){
//     count--;
//     console.log(count);

// }
// counter();
// var obj={a:10};
// var obj2=obj;
// obj.a=30;obj2.a=20;

// console.log(obj.a);
// console.log(obj2.a);
// var x=
// (function(){
//     var a=10+10;
//     console.log(a);
//     return a;
// })();
// console.log(x);
(function(){
   "use strict"
    var student;
    function Person(){
        var x=10;
        this.firstname="utkarsh";
    }
    student=new Person();
    console.log(student.x);
    student.firstname="kumar"
    console.log(student.firstname);
})();


//self executing/immediate functions are anonymous
//create their own context of execution
//no one calls them
//wrap the codes inside a immediate function so that ll the variables will be in the local scope and not in the global scope.
