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

  // Set random position
  const left = randomInt(0, window.innerWidth) + 'px';
  const top = randomInt(0, window.innerHeight) + 'px';
  bubble.style.left = left;
  bubble.style.top = top;

  document.getElementById('bubble-container').appendChild(bubble);
}

// Create bubbles
for (let i = 0; i < 200; i++) { // Create 200 bubbles
  createBubble();
}
