noseX=0;
noseY=0;

 left_wristX=0;
right_wristX=0;
 
dif=0;

function setup(){

    canvas=createCanvas(550,500);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,600);
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_poses);

}
function model_loaded(){
    console.log("model loaded");
}
function got_poses(results){
if(results.length>0){

    console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y; 

left_wristX=results[0].pose.leftWrist.x;
right_wristX=results[0].pose.rightWrist.x;

dif=floor(left_wristX - right_wristX);
 
}
}

function draw(){
background('#969A97');
document.getElementById("sqaure_side").innerHTML="The width and height of the sqaure will be: "+dif+"px";
fill('#F90093');
stroke('red');
square(noseX, noseY, dif);
}