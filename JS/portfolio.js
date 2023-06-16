const socialIcons = document.querySelectorAll('.social-icon');
const socialContents = document.querySelectorAll('.social-content');

socialIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    const content = document.getElementById(target + '-content');
    
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
