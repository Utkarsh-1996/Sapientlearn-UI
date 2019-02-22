"use strict"
var x=document.getElementById("a");
//x.disabled=true;
//x.type="checkbox";
//x.readonly=true;
// var label=document.createElement("label");
// label.id="lblFirstName";
// label.innerHTML="Welcome";
// var y=document.getElementById("container");
// y.appendChild(label);
// function createElement(type,id){

// }
function createpost(){
    var postContent=document.getElementById("mypost");
    var myCard=`<div class="card">
                    <div class="card-body">
                        ${postContent.value}
                    </div>
                </div>`;
    postContainer.innerHTML=myCard;
    postContent.value="";
}

