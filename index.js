var f= new vector(0,0.01); 
var box = new createObject("box",100,100,0,10,0,0);
spawn(box, new coord(0,100));
var box2 = new createObject("box2",10,10,0,10,0,0);
spawn(box2, new coord(0,100));
box.angularVelocity=10;
// [var box2 = new createObject("box2",10,10,0,10,0,0);
// spawn(box2, new coord(0,10));
// var box3 = new createObject("box3",10,10,0,10,0,0);
// spawn(box3, new coord(0,10));
// var box4 = new createObject("box4",10,10,0,10,0,0);
// spawn(box4, new coord(0,10));
// var box5 = new createObject("box5",10,10,0,10,0,0);
// spawn(box5, new coord(0,10));]
// cameraFollow(box);
function update(){ 
    // addForce(box,f);
    // addTorque(box,100);
    box2.position=new coord(box.vertex[0].x,box.vertex[0].y);
    showAxis();
}
