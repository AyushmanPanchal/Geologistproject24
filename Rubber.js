class Rubber{
    constructor(x, y, radius){
    var options = {
        'restitution' :0.3,
        'friction' :5,
        'density' :1

    }
    this.body = Bodies.circle(x, y, radius, options)
    this.x = x;
    this.y = y;
    this.radius = radius;

    World.add(world, this.body);
}
display(){
    var pos =this.body.position
      push();
      translate(pos.x, pos.y);
      fill("blue")
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius, this.radius);
      pop();

}
};