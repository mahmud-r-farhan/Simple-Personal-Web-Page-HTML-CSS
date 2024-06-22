
var text = "I am a web developer in Bogura, Bangladesh. I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript. I'm also learning the MERN Stack. Besides web development, I enjoy filmmaking, football, cycling, and travelling. I believe in continuous learning, staying focused on goals, and embracing new experiences with impetus. Stay curious and keep learning.";
var i = 0;
var speed = 53;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
   
    setTimeout(function () {
      document.getElementById("text").innerHTML = ""; 
      i = 0;
      typeWriter(); 
    }, 14000);
  }
}

typeWriter();

 
  // ©Mahmud R.Farhan/ find for more ; https://www.facebook.com/SafeZone73/

//