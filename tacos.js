var applyButton = function(){
  alert("In game /w Makkura \"ayy gurl\" to join");
}

var tacoClick = function(){
  var img = document.getElementById('content');
  var picData = [
    ['/resources/8bittaco.jpg'],
    ['/resources/creeptaco.jpg'],
    ['/resources/defaulttaco.png'],
    ['/resources/floatingtaco.jpg']
  ];
  
  var picNum = Math.floor(Math.random() * picData.length);
  if(picNum == prevNum){
    picNum = Math.floor(Math.random() * picData.length);
  }
  
  for(i=0; i <= picData.length; i++){
    if(i == picNum){
      img.src = picData[i];
    }
  }
  var prevNum = picNum;
}

var exitClick = function(){
  var x = document.getElementById("post");
  x.style.display = "none";
  var bb = document.getElementById("secret");
  bb.style.display = "block";
}

var questionClick = function(){
  var sounds = [
    ['/resources/NeedYou.wav'],
    ['/resources/Yousuck.wav'],
    ['/resources/Sucka.wav']
  ];
  var soundNum = Math.floor(Math.random() * sounds.length);
  if(soundNum == prevNum){
    soundNum = Math.floor(Math.random() * sounds.length);
  }
  
  for(i=0; i <= sounds.length; i++){
    if(i == soundNum){
      var audio = new Audio(sounds[i]);
      audio.play();
    }
  }
  var prevNum = soundNum;
}

var bigBoiClick = function(){
  var x = document.getElementById("post");
  x.style.display = "block";
  var bb = document.getElementById("secret");
  bb.style.display = "none";
}