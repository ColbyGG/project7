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
function drawSquare(canvas,color,size,x,y) {
  var square = document.createElementNS(namespace,"rect");
  var canvas1=canvas;
  square.setAttribute("x",x);
  square.setAttribute("y",y);
  square.setAttribute("width",size);
  square.setAttribute("height",size);
  square.setAttribute("fill", color);
  canvas.appendChild(square);
}
function drawCircle(canvas,color,size,x,y){
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
draw=true;
  var colorSelect = (document.getElementById("colorSelect").value)
    var shapeSelect = (document.getElementById("shapeSelect").value)
        var sizeSelect = (document.getElementById("sizeSelect").value)

   var pt = transformPoint(e, screen)
if(draw==true){
  if(shapeSelect == "circle"){
    drawCircle(screen,colorSelect,sizeSelect,pt.x,pt.y);
  }else if(shapeSelect == "square"){
    drawSquare(screen,colorSelect,sizeSelect,pt.x,pt.y);
      }
}
})
document.addEventListener("mousemove", function(e) {
  var colorSelect = (document.getElementById("colorSelect").value)
    var shapeSelect = (document.getElementById("shapeSelect").value)
        var sizeSelect = (document.getElementById("sizeSelect").value)

   var pt = transformPoint(e, screen)
if(draw==true){
  if(shapeSelect == "circle"){
    drawCircle(screen,colorSelect,sizeSelect,pt.x,pt.y);
  }else if(shapeSelect == "square"){
    drawSquare(screen,colorSelect,sizeSelect,pt.x,pt.y);
      }
}
})
document.addEventListener("mouseup", function(e) {
 draw=false
})
