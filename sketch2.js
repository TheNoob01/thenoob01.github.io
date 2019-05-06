var mobilenetData;
var fileName;
var img;

function preload(){
    mobilenetData=ml5.imageClassifier("MobileNet",modelLoaded);
}

function modelLoaded(){
    console.log("#ModelLoaded");
    document.getElementById("predictButton").innerHTML="Predict";
    if(document.getElementById("fileName").value=="") document.getElementById("label").innerHTML="Paste Link and Press Predict"; 
}

function predict(){
    var tempName=document.getElementById("fileName").value;
    //console.log(tempName);
    img=loadImage(tempName,imgLoaded);
}

function imgLoaded(){
    createCanvas(img.height/3,img.width/3);
    image(img,0,0,img.height/3,img.width/3);
    mobilenetData.predict(img,gotResults);
}

function gotResults(error,results){
    if(error){
        document.getElementById('label').innerHTML="Error Occured :(";
        console.log(error);
    }
    else document.getElementById('label').innerHTML=results[0].className;
}

function setup(){

}

function draw(){
     

}