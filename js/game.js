class Game{


    constructor(){


    }

    readgs(){

    mydb.ref("gamestate").on("value",function(data){
        mygs=data.val()
    })
    }
  
    updategs(state){
        mydb.ref("/").update({
            gamestate:state
        })
    }

async start(){

    if(mygs===0){

        myplayer=new Player()
    
        var pcref=await mydb.ref("playercount").once("value")

        if(pcref.exists()){

            mypc=pcref.val()

            myplayer.readpc()
 

        }
       

        myform=new Form()
        myform.display()
    }

    car1=createSprite(400,200);
    car1.addImage(car1Image);
    car2=createSprite(700,200);
    car2.addImage(car2Image);

    cars=[car1,car2];

}


play(){

    myform.allhide()
    //console.log(myplayer.index)
   // text("  GAME  START",300,200)
    
    Player.getallplayersinfo()

    myplayer.getcarsatend();
     if(allplayers !==undefined){
        // var textypos=200

        background("brown")
        image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
         var indexx=0;
         var xpos=200;
         var ypos;
         for(var plr in allplayers)
            {
                //textypos=textypos+20
                
            //    if(plr==="player"+myplayer.index){
            //       fill("red")
            //    }

            //     else{
                    
            //         fill("black")

            //     }
           indexx=indexx+1;

            xpos=xpos+200;
           
            ypos=displayHeight-allplayers[plr].distance;
            cars[indexx-1].x=xpos
            cars[indexx-1].y=ypos

               // text(allplayers[plr].name+"--"+allplayers[plr].distance,200,textypos);

            if(indexx===myplayer.index){
                fill("red")
                ellipse(xpos,ypos,60,60)
               // cars[indexx-1].shapeColor="red"
                camera.position.x=displayWidth/2;
                camera.position.y=cars[indexx-1].y;


            }

            }

     }

    
   if(keyIsDown(UP_ARROW)&& myplayer.index!==null)
   {
       myplayer.distance+=50
       myplayer.updateplayerinfo()
   }

   if(myplayer.distance>3750)
   {
       mygs=2;
       myplayer.rank+=1;
       Player.updatecarsatend(myplayer.rank)
   }

   drawSprites()
}

end()
{

    var title =  createElement("h1")
    title.html("GAME ENDED");
    title.position(displayWidth/2-50,displayHeight/4);
    var greeting= createElement("h2")

    greeting.html(myplayer.name + ":" + myplayer.rank )
    greeting.position(displayWidth/2-50,displayHeight/4+50)
}

}