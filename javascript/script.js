// JavaScript code to handle dropdown selection
document.getElementById("components").addEventListener("change", function () {
  var selectedComponent = this.value;
  if (selectedComponent === "ssd") {
    // Action for SSD selected
    alert("You selected SSD");
  } else if (selectedComponent === "ram") {
    // Action for RAM selected
    alert("You selected RAM");
  }
});

// Get a reference to the audio player
var audio = document.getElementById("audio");

// audio.js

document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the audio element
  var audioElement = document.querySelector('.audio');

  // Default volume begins
  if (audioElement) {
      audioElement.volume = 0;
  }
});
// default volume ends
