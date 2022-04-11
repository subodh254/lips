noseX = 0;
noseY = 0;

function preloaded(){
moustage = loadImage('https://i.postimg.cc/yYQnFVsn/stock-vector-purple-lips-vector-drawing-funny-colored-mouth-vector-illustration-1606276036.jpg'); 
}



function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose',gotposes)

}

function gotposes(results)
{
    if(results.length > 0 ) {
        console.log(results);
    noseY = results[0].pose.nose.x;
    noseX = results[0].pose.nose.y;
    console.log("lips x = "+noseX);
    console.log("lips y ="+noseY);

    }
}
function modelLoaded()
{
    console.log('posenet is encelised');
}

function draw(){
    image(video,0,0,400,400);

    image(moustage,noseX,noseY,30,30)
}

function take_snapShot(){
    save('my_selfie')
}