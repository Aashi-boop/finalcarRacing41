class Form{

    constructor(){
        this.title=createElement("h2");
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h1");
        this.reset=createButton("reset");

    }
     
    allhide(){
          this.button.hide()
          this.input.hide()
          this.greeting.hide()
          this.title.hide()
    }


    display(){

    
    this.title.html("car racing game");
    this.title.position(displayWidth/2-50,0);

    
    this.input.position(displayWidth/2-40,displayHeight/2-80);

    
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.reset.position(displayWidth-100,20);
    this.reset.mousePressed(()=>{
        mygame.updategs(0);
        myplayer.updateplayercount(0);

        Player.updatecarsatend(0)

    })






    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()

        myplayer.name=this.input.value()
        mypc+=1;
        myplayer.index=mypc;

        myplayer.updateplayerinfo()
        myplayer.updateplayercount(mypc)



    
    this.greeting.html("hello " + myplayer.name);
    this.greeting.position(displayWidth/2-70,displayHeight/4);





    })

    

    }

}
