predict1 = ""
predict2 = ""

Webcam.set ({
    height : 300,
    width : 350,
    image_format : "png",
    png_quality : 100
})
    camera = document.getElementById("camera");
    Webcam.attach("#camera");

function cap() {

    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML = '<img id="cap_img" src='+data_uri+'>'
    });

}
console.log("ml5 loaded", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zitzD2jnR/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model.loded.sucessfull");
}


function speak() {
    var synth = window.speechSynthesis;
    speak1 = "The first prediction is " + predict1
    speak2 = "And the second prediction is " + predict2
    var utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);
}