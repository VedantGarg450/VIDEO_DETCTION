obj= []
var vid= ""
var status= ""
function preload(){
    vid= createVideo("video.mp4")
    vid.hide()
}
function setup(){
    canvas= createCanvas(850, 630)
    canvas.position(680, 320)
}
function draw(){
    image(vid, 0, 0, 850, 630)
    if (status!="") {
        objectDetector.detect(vid, gotResult)
        document.getElementById("Status").innerHTML= "Status: Detected Objects"
        for ( i=0; i<obj.length; i++) {
        document.getElementById("Number_of_Objects").innerHTML= "Number of Objects Detected: "+obj.length
        fill("gold")
        text(obj[i].label, obj[i].x, obj[i].y)
        noFill()
        stroke("goldenrod")
        rect(obj[i].x, obj[i].y, obj[i].width, obj[i].height)
        }
    }
}
function gotResult(error, result){
    if (error) {
        console.log(error)
    }
    else{
        console.log(result)
        obj= result;
    }
}
function Start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("Status").innerHTML= "Status: Detecting Objects"
}
function modelLoaded(){
    console.log("Model Loaded Succesfully")
    status= true
    vid.loop()
    vid.speed(1.2)
    vid.volume(0)
}