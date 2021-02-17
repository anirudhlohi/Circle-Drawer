var canvas = document.getElementById("myCanvas");
 ctx =  canvas.getContext("2d");

var mouseEvent = "";
var color = "red";
var radius = 10;
var width = 5;

canvas.addEventListener("mousedown" , myMousedown);
function myMousedown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radii").value;
    mouseEvent = "mousedown";
	console.log(mouseEvent)
}

canvas.addEventListener("mousemove" ,  myMousemove);
function myMousemove(e){
//mouseEvent = "mousemove";

current_position_x = e.clientX - canvas.offsetLeft;
current_position_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_x , current_position_y , radius , 0 , 2*Math.PI);
    ctx.stroke();
	console.log(current_position_x+","+current_position_y)
}
}

canvas.addEventListener("mouseup" , myMouseup);
function myMouseup(e){
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave" , myMouseleave);
function myMouseleave(e){
    mouseEvent = "mouseleave";
}
function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}