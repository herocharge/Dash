var objects= new Array();
var objectCount=0;
var frameRate;

function coord(x,y){
    this.x=x+screen.x/2;
    this.y=y+screen.y/2;
}

function vector(x,y){
    this.x=x;
    this.y=y;
}

function setScreenDimensions(x,y){
    screen.x=x;
    screen.y=y;
}


function createObject(name,h,w,m,c,p){//for creating an object model(template)
    this.name=name;
    this.height=  h;
    this.width = w;
    this.mass=m;
    this.charge=c;
    this.poleStrength=p;
    this.velocity=new vector(0,0);
    this.position=new vector(0,0);
}

function frameControl(obj, cord){//To spawn the object into the environment
    var node = document.createElement("div");
    node.setAttribute("class",obj.name);
    // console.log(obj.name);
    node.setAttribute("style","position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.x)+"px;left:"+(cord.y)+"px;");//Setting style
    obj.position.x=cord.x;
    obj.position.y=cord.y;
    // console.log(node.attributes);
   
    //node.setAttribute("elem",{"class":obj.name,"style":"position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.x-obj.width)+"px;left:"+(cord.y-obj.height)+"px;"});//Setting style
    document.body.appendChild(node);
    
    //checking statements for devs
        // console.log( obj.name+"created");
        // console.log(document.getElementsByClassName("box"));   
        // console.log(document.getElementsByClassName("box2"));   

}

function spawn(obj, cord){//To spawn the object into the environment
    var node = document.createElement("div");
    node.setAttribute("class",obj.name);
    // console.log(obj.name);
    node.setAttribute("style","position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.x)+"px;left:"+(cord.y)+"px;");//Setting style
    obj.position.x=cord.x;
    obj.position.y=cord.y;
    // console.log(node.attributes);
   
    //node.setAttribute("elem",{"class":obj.name,"style":"position:absolute;background-color:black;height:"+obj.height+"px;width:"+obj.width+"px;top:"+(cord.x-obj.width)+"px;left:"+(cord.y-obj.height)+"px;"});//Setting style
    document.body.appendChild(node);
    objects[objectCount]=obj;
    objectCount++;
    //checking statements for devs
        // console.log( obj.name+"created");
        // console.log(document.getElementsByClassName("box"));   
        // console.log(document.getElementsByClassName("box2"));   

}

function time(){
    document.body.textContent='';
for(let i=0;i<objectCount;i++){
        objects[i].position.x+=objects[i].velocity.x;
        objects[i].position.y+=objects[i].velocity.y;
        var temp = new coord(objects[i].velocity.x+objects[i].position.x,objects[i].velocity.y+objects[i].position.y);
        
    //    console.log(document.getElementsByClassName(objects[i].name).style);
        frameControl(objects[i],objects[i].position);
        console.log(objects[i].name);
}

}


var screen = {x:500,y:500};
frameRate=100;

// setScreenDimensions(1000,1000);

var box = new createObject("box",100,100,0,0,0);

spawn(box, new coord(0,100));



var box2 = new createObject("box2",200,100,10,0,0);

spawn(box2, new coord(0,250));

window.setInterval(time,frameRate);
// window.setInterval(console.log("yeet"),10);



// box.clr="red";
// box.width=3;
// spawn(box);