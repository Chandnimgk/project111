Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quilte:90
});
camer=document.getElementById("camera");
Webcam.attach('#camra');

function take_snapshot(){
    Webcam.sanp(function(data_url)
    {document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'">';
})
}  
console.log('ml5version;',ml5.version);
classfier=ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/dBCYdwF_T/model.json',modelloaded);
function modelloaded()
{
    console.log("model loded");
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="and the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
      synth.speak(utterThis);
}