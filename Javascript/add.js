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
var myPosts=[{text:"",time:""}]
function createpost(){
    var postContent=document.getElementById("myPost");
    var postContainer=document.getElementById("postContainer");
    postContainer.innerHTML="";
    myPosts.push({
        text: postContent.value,
        time: new Date()
    });
    for(var i=myPosts.length-1;i>=0;i--){
    var myCard=`<div class="card">
                    <div class="card-body">
                        ${myPosts[i].text}${myPosts[i].time}
                    </div>
                </div>`;
    postContainer.innerHTML+=myCard;
    }
    postContent.value="";
}
