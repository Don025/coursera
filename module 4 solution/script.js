function processNames() {
  var name = document.getElementById("nameInput").value;
  var firstLetter = name.charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}



