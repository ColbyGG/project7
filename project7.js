var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

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
  square.setAttribute("x",x);
  square.setAttribute("y",y);
  square.setAttribute("width",size);
  square.setAttribute("height",size);
  square.setAttribute("fill", color);
}
function drawCircle(x,y,size,color){
  var circle = document.createElementNS(namspace,"circle");
  circle.setAttribute("cx",x);
  circle.setAttribute("cy",y);
  circle.setAttribute("r", size);
  circle.setAttribute("fill",color);
}
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
