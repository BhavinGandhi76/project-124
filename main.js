function setup(){
   canvas = createCanvas(500,500);
   canvas.position(1060,200);

   video = createCapture(VIDEO);
   video.size(600,500);
   video.position(400,200);

   poseNet = ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotPoses);
}

function modelloaded(){
   console.log("PoseNet is Initialised");
}

function gotPoses(error,result){
   if(error){
      console.error(error);
   }
   else{
      console.log(result);
   }
}