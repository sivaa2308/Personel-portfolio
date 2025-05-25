const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.to(".text" , {y:"0%" , duration: 1 , stagger:0.25 })
tl.to(".slider" , {y:"-100%" , duration:1.5 , delay:0.4})
tl.to(".intro" , {y:"-100%" , duration:1} , "-=1")


tl.fromTo('.name', 
  { opacity: 0 , y: 20}, 
  { opacity: 1, y:0 ,  duration: 1 }, 
  "-=0.5"
)

.fromTo('.full-1 p',   // BOTH animate at the same time
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.75, stagger: 0.25 }, 
  "-=0.75" 
)
.fromTo('.index-links li', 
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.75, stagger: 0.25 }, 
  "-=0.25"
)
.fromTo('.social-links li', 
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.75, stagger: 0.25 }, 
  "-=1"
)
.fromTo(
  '.full-2 p',   // BOTH animate at the same time
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.75, stagger: 0.25 }, 
  "-=2" 
)
.fromTo('.resume', 
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 1, stagger: 0.25 }, 
  "-=1.25"
);



// Spotlight Effect
const spotlight = document.getElementById('spotlight');
const spotlightSize = 900;

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.index-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});





