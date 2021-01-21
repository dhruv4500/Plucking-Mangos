class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:40,
            stiffness:0.006
        }
    
        this.chain=Constraint.create(options);
        World.add(world, this.chain);

      //  this.img1=loadImage("images/stone.png");
        this.pointB=pointB;
    }

    display(){
    if(this.chain.bodyA){
     var pointA=this.chain.bodyA.position;
     var pointB=this.pointB;  
     push();
     strokeWeight(5);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
        }
    }

    fly(){
        this.chain.bodyA=null;
    }

    attach(body){
		this.chain.bodyA=body;
	}
}