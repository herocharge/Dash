var f= new vector(0,0.01); 
var box = new createObject("box",100,100,0,10,0,0);
spawn(box, new vector(900,500));
var box2 = new createObject("box2",100,100,0,10,0,0);
spawn(box2, new vector(600,500));
box.radius=100;
box2.radius=100;
var box3 = new createObject("box",100,100,0,10,0,0);
spawn(box3, new vector(100,500));

// box.angularVelocity=10;

box.velocity.x=-1;
box2.velocity.x=10;
function update(){ 
        // addForce(box2,new vector(0.1,0));
        box.velocity=new vector(0,0);
        box.velocity=new vector(0,0);
        // addForce(box,new vector(0,0.01));
}
