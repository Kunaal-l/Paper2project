class Paper {
constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution:0.5,
        friction:1,
        density:1.2
    }
   
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("paper.png");
    
 this.body = Bodies.circle(this.x,this.y,this.r/2,options)
 World.add(world,this.body);


}

 display(){
    
 var paperposition = this.body.position;

 
 push()
 translate(paperposition.x,paperposition.y);
 rectMode(CENTER)
 strokeWeight(3);
 fill(255,0,255);
 //ellipse(this.x,this.y,this.r,this.r);
 
 image(this.image, 0, 0);
 
 pop()
 }

 
     
 





}