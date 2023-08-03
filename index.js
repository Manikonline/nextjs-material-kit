var button=document.getElementById("button");
var div=document.getElementById("div");
div.style.display="block";

button.onclick=function (){
if(div.style.display=="block"){
div.style.display="none";
}
else{
div.style.display="block";
}
}