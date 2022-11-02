var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=100;
mars_images=[];
var rover_x=10;
var rover_y=10;
var background_image="mars.jpg";
var rover_image="rover.png";

function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
 
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(img,0,0,canvas.Width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);
function my_keydown(){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='40'){
        down();
    }
}