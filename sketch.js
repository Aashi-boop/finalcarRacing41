var mypc=0;
var mygs=0;
var mygame;
var myplayer;
var myform;
var mydb;
var allplayers=[]
var car1,car2;
var cars=[];

function preload(){
    car1Image=loadImage("images/car1.png");
    car2Image=loadImage("images/car2.png");
    trackimage=loadImage("images/track.jpg");
}


function setup(){
canvas= createCanvas(displayWidth-50,displayHeight+40)
mydb=firebase.database()

mygame = new Game()
mygame.readgs()
mygame.start()

}

function draw(){

if(mypc===2){
     mygame.updategs(1)
}


if(mygs===1){
    clear()
    mygame.play()
}
if(mygs === 2){
    mygame.end();
  }
}