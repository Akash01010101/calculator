let ans = '';
let str = '';
let str2 = '';
let str3 = '';

let operation = "";
for (let i=0; i < 10; i++) {
let create = document.createElement("div");
let grid = document.getElementById("grid");
grid.appendChild(create);
create.id = i;
create.className="item";
let num= document.getElementById(i);
num.innerHTML =i;
num.addEventListener("click", function(){
str += i;
document.getElementById("disp").innerHTML = str;
})
}
for(let i=1;i < 5; i++){
let id = `op${i}`;
document.getElementById(id).addEventListener("click", function(){
 str2 = str;
 str ='';
 if(id == "op1"){
   operation = 'plus';
 }else if(id == "op2"){
   operation = "sub"
 } else if(id == "op3"){
   operation = "div"
 } else if(id == "op4"){
   operation = "mul";
 }
})
}

document.getElementById("op5").addEventListener("click", function(){
let display = document.getElementById("disp");
str3 = str;
str='';
let str4 = Number(str3);
let str5 = Number(str2);
if(operation == 'plus'){
 document.getElementById("disp").innerHTML = str5 + str4;
} else if(operation == 'sub'){
 document.getElementById("disp").innerHTML = str5 - str4;
} else if(operation == 'div'){
 document.getElementById("disp").innerHTML = str5 / str4;
}else if(operation == 'mul'){
 document.getElementById("disp").innerHTML = str5 * str4;
}
})