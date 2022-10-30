x = 0;
y = 0;
i = 1;

screen_width = 0;
screen_height = 0;
speak_data = "";
cat = "";

draw_cat = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  cat = loadImage("NyanCat.jpg");
}

function number()

function start()
{
  document.getElementById("status").innerHTML = "System is listening, please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);
 if(Number.isInteger(to_number)){
  speak_data = "started drawing cat"
  draw_cat = "set";
 }
 else{

  speak_data = "speech has not reconized a number";

 };

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  createCanvas(screen_width, screen_height-150);
canvas.position(x=1,y=20);
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
}


function draw() {
  if(draw_cat == "set") 
    for (var i =1; i <=  to_number; i++) {
      x = math.floor(math.random()*700);
      y = math.floor(math.random()*400);
      image(apple, x, y, 50, 50 );
   }
    document.getElementById("status").innerHTML = to_number + " Cats drawn";
    draw_cat = "";
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

