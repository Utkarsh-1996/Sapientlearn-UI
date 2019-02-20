"use strict"
var initValue;
initValue=5;

function counter(count,callback){
    if(initValue>0){
        console.log(initValue);
        initValue--;
        callback(callback);
    }
}
function init(cb){
    cb(cb);
}
init (counter);