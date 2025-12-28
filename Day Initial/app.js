// Get references to DOM elements
const light = document.getElementById('light');
const toggleBtn = document.getElementById('toggleBtn');
const status = document.getElementById('status');
const bulbGlass = document.querySelector('.bulb-glass');

// Track light state
let isOn = false;

// Function to toggle the light
function toggleLight() {
    isOn = !isOn;
    
    if (isOn) {
        // Turn light on
        light.classList.remove('off');
        light.classList.add('on');
        bulbGlass.setAttribute('fill', 'url(#bulbOnGradient)');
        toggleBtn.textContent = 'Turn Off';
        status.textContent = 'Light is ON';
    } else {
        // Turn light off
        light.classList.remove('on');
        light.classList.add('off');
        bulbGlass.setAttribute('fill', 'url(#bulbOffGradient)');
        toggleBtn.textContent = 'Turn On';
        status.textContent = 'Light is OFF';
    }
}

// Add click event listener to button
toggleBtn.addEventListener('click', toggleLight);

