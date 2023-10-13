// Wrap the entire contents of script.js inside of an IIFE
(function () {
  // Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name in the loop
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the 'firstLetter' to lower case 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Call byeSpeaker's 'speak' method
    } else {
      helloSpeaker.speak(names[i]); // Call helloSpeaker's 'speak' method
    }
  }
})();


