var gradientColor = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var directionButton = document.querySelector("button");
var click=1;

function setGradient(){
    var bg = "linear-gradient(" + setDirection() + color1.value + ", " + color2.value + ")";
    body.style.background = bg;
    gradientColor.textContent = body.style.background;
}

function countDirection(){
    click++;
    setGradient();
}

function setDirection(){
    var arrow = document.querySelector("img");
    var direction;
    if (click === 2){
    arrow.style.animation = "anim 0.3s linear forwards";
    return direction = "to bottom,";
    }       
    else if(click === 3){
        arrow.style.animation = "anim2 0.3s linear forwards";
      return direction = "to left,";       
    }
    else if(click === 4){
    click =0; 
    arrow.style.animation = "anim3 0.3s linear forwards";
    return direction = "to top,";
    }
    else{
    arrow.style.animation = "anim4 0.3s linear forwards";
          return direction = "to right,";
    }
}

color1.addEventListener("input",setGradient);
    
color2.addEventListener("input",setGradient);

directionButton.addEventListener("click",countDirection);
