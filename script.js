// Function to generate random integer within a range
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random color
function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Function to create bubble
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = randomInt(0, window.innerWidth) + 'px';
  bubble.style.backgroundColor = randomColor();
  bubble.style.animationDuration = randomInt(5, 15) + 's'; // Randomize animation duration
  bubble.style.animationDelay = randomInt(0, 10) + 's'; // Randomize animation delay
  document.getElementById('bubble-container').appendChild(bubble);
}

// Create bubbles
for (let i = 0; i < 20000; i++) { // Create 200 bubbles
  createBubble();
}
