Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log("mlv:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KrZpQkNFt/model.json',modelLoaded);
function modelLoaded()
{
    console.log("modelLoaded");
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, Results)
{
    if (error)
    {
        console.error(error);
    }

    else 
    {
        console.log(Results);
        document.getElementById("result_object_name").innerHTML = Results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = Results[0].confidence.toFixed(3);

    }
}