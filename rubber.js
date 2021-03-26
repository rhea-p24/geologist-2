class Rubber {
    constructor(x,y,r){
    
     var options={
    
    'restitution':2,
    'friction':1,
    'density':1
     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(this.x, this.y, this.r, options)
    World.add(world,this.body);
    
  
    }
    display(){
    
    var pos=this.body.position;
    
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("blue");
    strokeWeight(4);
    stroke("black");
    //ellipseMode(RADIUS)
    circle(0,0,this.r);

    pop();
    }
    
    
    }
