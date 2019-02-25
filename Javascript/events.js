(function(){
    "use strict";
    var btn=document.getElementById("btn")
    btn.addEventListener("click",function(e){
        console.log(e)
        console.log(this)
    })
    var text=document.getElementById("text")
    text.addEventListener("keypress",function(e){
        console.log(e)
        console.log(this)
        var patt=/^[A-Za-z]+$/
        console.log(e.key)
        validateInput(e,patt)    
        // if(patt.test(e.key)){
        //     //true
        // }
        // else{
        //     e.preventDefault();
        // }
    })
    function validateInput(e,regex){
        if(regex.test(e.key)){

        }
        else{
            e.preventDefault();
        }
    }
})()