//create two arrays name and age with five values each
//var name=Array("Utkarsh", "Abhishek", "Amitesh", "Sreeraksha", "Sammed");
//var age=Array(22,21,21,22,21);

var elements=[{name:"Utkarsh", age:"22"},{name:"Abhishek", age:"22"},{name:"Sreeraksha", age:"22"},{name:"Sammed", age:"21"},{name:"Amitesh", age:"22"}];
for (var i of elements){
    console.log(i.name+i.age)
}

for(var i in elements){
    console.log(i)
}
for(var i of elements){
    console.log(i)
}