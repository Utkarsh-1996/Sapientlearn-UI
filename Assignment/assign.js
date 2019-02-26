(function(){
    "use strict"
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var age = document.getElementById("age");
    var toc = document.getElementById("toc");
    var register = document.getElementById("register");
    var msg = document.getElementById("alarmmsg");
    toc.onchange = function(){
        register.disabled = !this.checked;
    }
    var testName = function(e){
        var regex = /^[a-zA-Z ]+$/;
        validateName(e,this.value,regex) 
    }
    function validateName(e,value,regex){
        if(regex.test(e.key)){

        }
        else{
            e.preventDefault();
            window.alert("Please enter alphabets, spaces or periods only ")
        }
    }
      function customAlert(msg, duration) {
        var styler = document.createElement("div");
        styler.className="container alert alert-danger"
        //styler.setAttribute("style", "width:auto; height:auto; top:90%; left:40%; background-color:#ff0000; color:Silver");
        styler.innerHTML = "<h6>" + msg + "</h6>";
        setTimeout(function () {
            styler.parentNode.removeChild(styler);
        }, duration);
        document.body.appendChild(styler);
    }
    
    firstname.addEventListener("keypress", testName);
    lastname.addEventListener("keypress", testName);

    function checkLength(){
        if(firstname.value.length>20){
            customAlert("First name shoulde not exceed 20 characters",5000)
        }
        if(lastname.value.length>20){
            customAlert("Last name shoulde not exceed 20 characters",5000)
        }
        if(isNaN(age.value)){
            customAlert("Age can only be a number!!",5000)
        }
        if(age.value<18 || age.value>99){
            customAlert("Age should be in the range of 18 to 99!!",5000);
        }
    }
    register.addEventListener("click", checkLength);

  

})();