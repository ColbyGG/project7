var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var draw = false;
// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var square = document.createElementNS(namespace,"rect");
  var canvas1=canvas;
  square.setAttribute("x",x);
  square.setAttribute("y",y);
  square.setAttribute("width",size);
  square.setAttribute("height",size);
  square.setAttribute("fill", color);
  canvas.appendChild(square);
}
function drawCircle(canvas, x , y, size,  color){
  var circle = document.createElementNS(namespace,"circle");
  var canvas1=canvas;
  circle.setAttribute("cx",x);
  circle.setAttribute("cy",y);
  circle.setAttribute("r", size);
  circle.setAttribute("fill",color);
  canvas.appendChild(circle);
}
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
   var pt = transformPoint(e, screen)
drawCircle(screen,pt.x,pt.y,15,"red");
draw=true;
})
document.addEventListener("mousemove", function(e) {
   var pt = transformPoint(e, screen)
   if(draw==true){
drawCircle(screen,pt.x,pt.y,15,"red");
}
if(draw==false){

}
})
document.addEventListener("mouseup", function(e) {
 draw=false
})
