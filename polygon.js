class Polygon {
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
            isStatic : true 
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("polygon.png") 
        this.body = Bodies.circle(this.x,this.y, this.r,options);
       
        World.add(world,this.body);
    }
  
    
    display()
    {
        var pos = this.body.position
        

        push()
        translate(pos.x,pos.y)
        strokeWeight(3)
        fill("255,0,255")
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y, this.r,this.r);
        pop()



    }






}