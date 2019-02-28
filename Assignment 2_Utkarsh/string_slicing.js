(function(){
    "use strict"
    var btn = document.getElementById("btn")
    function slicing(s){
        var s = document.getElementById("string").value
        var result_label = document.getElementById("result")

        var result = s.slice(1,-1);
        result_label.innerHTML=result
        console.log(result)
    }
    btn.addEventListener("click",slicing); 
})();