class Ball{
    constructor(x,y,radius){
    var options={
    restitution:1,
    friction:0.8,
    density:1.0
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        circle(0,0,radius)
        pop()
        
          }
        }