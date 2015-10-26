document.onmousemove = function(evt){
    makeACircle(evt);   
}
/**
  *this method generates a red circle div
  *where the user clicks
  *
  *@param evt the info about the click
  */
function makeACircle(evt){ 
    //generate a div
    var circle = document.createElement("div");
    //add styles so it resembles a circle
    circle.style.width= "10px";
    circle.style.height = "10px";
    circle.style.opacity = "1";
    circle.style.border = "#99f solid 10px";
    circle.style.position = "absolute";
    circle.style.borderRadius = "200px"
    //give it the ability to animate its width if the width value changes:
    circle.style.transition = "width .5s 0s ease-out,height .5s 0s ease-out,opacity 15s 0s ease-out";
    //set its horizontal position to that of the cursor:
    circle.style.left = evt.clientX+'px';
    //set its horizontal position to that of the cursor:
    circle.style.top = evt.clientY+'px';
    //adds it to the HTML as child of <body>
    document.body.appendChild(circle);
    //make the circle change after a almost-nonexistant delay
    setTimeout(function(){  
        //change the circle, making it bigger and invisible
        circle.style.width="200px";
        circle.style.height = "200px";
        circle.style.opacity = "0";
    },0);
}