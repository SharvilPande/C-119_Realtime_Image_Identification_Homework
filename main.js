function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(620, 365);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WW-4o1vwH/model.json', modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

function modelLoaded() {
    console.log("Model has been initialised");
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2)*100+"%";
    }
}