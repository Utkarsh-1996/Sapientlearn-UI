var M = {}, V = {}, C = {};

M.data = "hello world";

V.render = function (M) { 
console.log(M.data); 
}

C.handleOnload = function () { 
V.render(M); 
}

window.onload = C.handleOnLoad;