// Toggle mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('mobile');
});

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'sans-serif'],
      },
    },
  },
};


const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

// Toggle the overlay visibility on hamburger click
hamburger.addEventListener('click', () => {
overlay.classList.add('active'); // Add 'active' class to show overlay
});

// Close the overlay when the close button is clicked
closeBtn.addEventListener('click', () => {
overlay.classList.remove('active'); // Remove 'active' class to hide overlay
});

/*faq section- done by EEMAN*/

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      button.classList.toggle('active');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      button.querySelector('span').textContent = button.classList.contains('active') ? '-' : '+';
  });
});
