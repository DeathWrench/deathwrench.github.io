// Function to create bubble
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Set random position and size
  const left = randomInt(0, window.innerWidth) + 'px';
  const top = randomInt(0, window.innerHeight) + 'px';
  const size = randomInt(5, 20) + 'px';
  bubble.style.left = left;
  bubble.style.top = top;
  bubble.style.width = size;
  bubble.style.height = size;
  
  // Apply color animation
  bubble.style.animationName = 'animateBubbleColor';
  
  // Set random animation duration and delay
  bubble.style.animationDuration = randomInt(5, 15) + 's';
  bubble.style.animationDelay = randomInt(0, 10) + 's';
  
  // Set random animation timing function (ease-in, ease-out, etc.)
  const timingFunctions = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'];
  bubble.style.animationTimingFunction = timingFunctions[randomInt(0, timingFunctions.length - 1)];

  // Set random animation direction (normal, reverse, alternate, alternate-reverse)
  const animationDirections = ['normal', 'reverse', 'alternate', 'alternate-reverse'];
  bubble.style.animationDirection = animationDirections[randomInt(0, animationDirections.length - 1)];

  // Set random animation fill mode (forwards, backwards, both, none)
  const fillModes = ['forwards', 'backwards', 'both', 'none'];
  bubble.style.animationFillMode = fillModes[randomInt(0, fillModes.length - 1)];

  // Set random animation play state (running, paused)
  const playStates = ['running', 'paused'];
  bubble.style.animationPlayState = playStates[randomInt(0, playStates.length - 1)];
  
  document.getElementById('bubble-container').appendChild(bubble);
}

// Create bubbles
for (let i = 0; i < 200; i++) { // Create 200 bubbles
  createBubble();
}
