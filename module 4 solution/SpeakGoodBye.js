(function (window) {
  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  window.byeSpeaker = byeSpeaker;
  document
        .getElementById("content")
        .textContent = speak;
})(window);


