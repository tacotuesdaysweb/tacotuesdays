var applyButton = function(){
  alert("Send an in game mail to Bri containing the text \"ayy gurl\" and 4 silver to join");
  // var modal = document.getElementById("applyModal");
  // modal.style.display = "block";
  // var x = document.getElementById("post");
  // x.style.display = "none";

  // window.onclick = function(event){
  //   if(event.target == modal){
  //     modal.style.display = "none";
  //   }
  // }
}
// var appExitClick = function(){
//   var x = document.getElementById("applyModal");
//   x.style.display= "none";
//   var z = document.getElementById("post");
//   z.style.display= "block";
// }

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
  // var x = document.getElementById("post");
  // x.style.display = "none";
  // var bb = document.getElementById("secret");
  // bb.style.display = "block";
  window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

var questionClick = function(){
  var sounds = [
    ['/resources/NeedYou.wav'],
    ['/resources/Yousuck.wav'],
    ['/resources/Sucka.wav'],
    ['/resources/Bloodlust_1.ogg']
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
  // var x = document.getElementById("post");
  // x.style.display = "block";
  // var bb = document.getElementById("secret");
  // bb.style.display = "none";
}