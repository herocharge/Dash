var objects= new Array();
var objectCount=0;
var frameRate;
var camFollow=false;
var cameraFollowObject;
var root2a= Math.sqrt(2)*100;
var Xaxis = new createObject("X",1,1000,0,0,0,0);
var Yaxis = new createObject("X",1000,1,0,0,0,0);

//objects
var update =function(){};

function coord(x,y){
    this.x=x+screen.x/2;
    this.y=y+screen.y/2;
}


function vector(x,y){
    this.x=x;
    this.y=y;
}

function createObject(name,h,w,r,m,c,p){//for creating an object model(template)
    this.name=name;
    this.height=  h;
    this.width = w;
    this.mass=m;
    this.charge=c;
    this.poleStrength=p;
    this.velocity=new vector(0,0);
    this.angularVelocity=0;
    this.position=new vector(0,0);
    this.rotation=r;
    this.center=new vector(this.position.x+this.width/2,this.position.y+this.height/2);
    this.vertex=[
        new vector(0,0),
        new vector(0,0),
        new vector(0,0),
        new vector(0,0)
    ];
    
        
    
}


//functions
function distanceBetweenPoints(point1,point2){
    return Math.sqrt((point1.x-point2.x)**2+(point1.y-point2.y)**2);
}

function toRadians(x){
    return x*Math.PI/180;
}


function setScreenDimensions(x,y){
    screen.x=x;
    screen.y=y;
}

function cameraFollow(obj){
    camFollow=true;
    cameraFollowObject=obj;
    window.scrollTo(new coord(obj.position.x-window.innerWidth/2,obj.position.y-window.innerHeight/2).x,new coord(obj.position.x-window.innerWidth/2,obj.position.y-window.innerHeight/2).y);
   
}

function addForce(obj, force){
        obj.velocity.x+=force.x/obj.mass;
        obj.velocity.y+=force.y/obj.mass;
}

function addTorque(obj, tau){
    let momentOfInertia = obj.mass*(obj.height**2+obj.width**2)/12;
    obj.angularVelocity+=tau/momentOfInertia;
}

function showAxis(){
    spawn(Xaxis,new coord(-500,0));
    spawn(Yaxis,new coord(0,-500));
}

function frameControl(obj, cord, rot){//To spawn the object into the environment
    var node = document.createElement("div");
    node.setAttribute("class",obj.name);
    // console.log(obj.name);
    node.setAttribute("style","position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.y)+"px;left:"+(cord.x)+"px;transform:rotate("+rot+"deg);");//Setting style
    obj.position.x=cord.x;
    obj.position.y=cord.y;
    // console.log(node.attributes);
   
    //node.setAttribute("elem",{"class":obj.name,"style":"position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.x-obj.width)+"px;left:"+(cord.y-obj.height)+"px;"});//Setting style
    document.getElementById("world").appendChild(node);
    
    //checking statements for devs
        // console.log( obj.name+"created");
        // console.log(document.getElementsByClassName("box"));   
        // console.log(document.getElementsByClassName("box2"));   

}

function spawn(obj, cord){//To spawn the object into the environment
    var node = document.createElement("div");
    node.setAttribute("class",obj.name);
    // console.log(obj.name);
    node.setAttribute("style","position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.y)+"px;left:"+(cord.x)+"px;transform:rotate("+obj.rotation+"deg);");//Setting style
    obj.position.x=cord.x;
    obj.position.y=cord.y;
    // console.log(node.attributes);
   
    //node.setAttribute("elem",{"class":obj.name,"style":"position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.x-obj.width)+"px;left:"+(cord.y-obj.height)+"px;"});//Setting style
    document.getElementById("world").appendChild(node);
    objects[objectCount]=obj;
    objectCount++;
    //checking statements for devs
        // console.log( obj.name+"created");
        // console.log(document.getElementsByClassName("box"));   
        // console.log(document.getElementsByClassName("box2"));   

}

function time(){
    update();
    document.getElementById("world").textContent='';
for(let i=0;i<objectCount;i++){
        objects[i].position.x+=objects[i].velocity.x;
        objects[i].position.y+=objects[i].velocity.y;
        objects[i].center.x+=objects[i].velocity.x;
        objects[i].center.y+=objects[i].velocity.y;
        objects[i].rotation+=objects[i].angularVelocity;
        // var temp = new coord(objects[i].velocity.x+objects[i].position.x,objects[i].velocity.y+objects[i].position.y);
        var r=Math.acos((objects[i].vertex[0].x-objects[i].center.x)/root2a);
        
        r+=toRadians(objects[i].angularVelocity);
        objects[i].vertex=[
        //     new vector(objects[i].center.x+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.cos(toRadians(180-r)),objects[i].center.y+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.sin(toRadians(180-r))),
        //     new vector(objects[i].center.x+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.cos(toRadians(180+90-r)),objects[i].center.y+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.sin(toRadians(180+90-r))),
        //     new vector(objects[i].center.x+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.cos(toRadians(180+180-r)),objects[i].center.y+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.sin(toRadians(180+180-r))),
        //     new vector(objects[i].center.x+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.cos(toRadians(180+270-r)),objects[i].center.y+distanceBetweenPoints(objects[i].position,objects[i].center)*Math.sin(toRadians(180+270-r)))
        // 
        new vector(objects[i].center.x+root2a*Math.cos(toRadians((objects[i].rotation))),objects[i].center.y+root2a*Math.sin(toRadians((objects[i].rotation)))),
        new vector(0,0),
        new vector(0,0),
        new vector(0,0),
    ];
            // console.log(r);
       
        // console.log(objects[i].center);
       
        //    console.log(document.getElementsByClassName(objects[i].name).style);
        frameControl(objects[i],objects[i].position,objects[i].rotation);
        if(camFollow){
            cameraFollow(cameraFollowObject);
        }       // console.log(objects[i].name);
}
console.log(box.vertex[0]);
}


var screen = {x:500,y:500};
frameRate=1;



// setScreenDimensions(1000,1000


// cameraFollow(box);

// var box2 = new createObject("box2",200,100,10,0,0);

// spawn(box2, new coord(0,250));

window.setInterval(time,1000/frameRate);
// window.setInterval(console.log("yeet"),10);



// box.clr="red";
// box.width=3;
// spawn(box);
