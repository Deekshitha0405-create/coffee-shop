// Typed Text Animation
const phrases = [
  "Brewed with Passion.",
  "Sipped with Love.",
  "Crafted for You.",
  "Experience the Aroma.",
  "Where Coffee Meets Soul."
];

let index = 0, charIndex = 0, isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
  const currentPhrase = phrases[index];
  if (isDeleting) {
    charIndex--;
    typedText.textContent = currentPhrase.substring(0, charIndex);
  } else {
    charIndex++;
    typedText.textContent = currentPhrase.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Testimonial slider
let testiIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
function cycleTestimonials() {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[testiIndex].classList.add('active');
  testiIndex = (testiIndex + 1) % testimonials.length;
}
setInterval(cycleTestimonials, 4000);

// Lightbox gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
