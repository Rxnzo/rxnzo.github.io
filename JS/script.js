// Get all the social buttons
const socialButtons = document.querySelectorAll('.socials a');

// Loop through each social button
socialButtons.forEach(button => {
  // Add event listener for mouseover (hover) event
  button.addEventListener('mouseover', () => {
    // Apply the hover effect using CSS class
    button.classList.add('hover-effect');
    button.style.opacity = '0.7';
  });

  // Add event listener for mouseout (hover out) event
  button.addEventListener('mouseout', () => {
    // Remove the hover effect using CSS class
    button.classList.remove('hover-effect');
    button.style.opacity = '1';
  });
});

