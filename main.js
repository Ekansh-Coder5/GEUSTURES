predict1 = ""

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
    var utterThis = new SpeechSynthesisUtterance(speak1);
    synth.speak(utterThis);
}

function snap() {
    img = document.getElementById("cap_img")
    classifier.classify(img, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("emona").innerHTML = results[0].label;
        predict1 = results[0].label;
        speak();

        if(results[0].label == "Best") {
            document.getElementById("emo").innerHTML = "&#128512;"
        }
        else if(results[0].label == "Bad") {
            document.getElementById("emo").innerHTML = "&#128532;"
        }
        else if(results[0].label == "VICTORY ROYALE") {
            document.getElementById("emo").innerHTML = "&#128545;"
        }
        

}
}