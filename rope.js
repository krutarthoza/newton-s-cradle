class Rope{
constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=offsetY;
    this.offsetY=offsetY;
    var options={
    bodyA:bodyB,
    bodyB=bodyB,
    pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope)
}
display(){
    var pointA = this.rope.bodyA.position;
    var pointB= this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X=pointA.x;
    var Anchor1Y=pointB.x;

    var Anchor2X=pointB.x+this.offsetX;
    var Anchor2Y=pointB.x+this.offsetY;

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}

