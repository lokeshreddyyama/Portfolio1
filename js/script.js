
// Responsive Navbar toggling
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      navLinks.style.right = "0";
    } else {
      navLinks.style.right = "-100%";
    }
  });

  document.querySelectorAll('.edu-card, .project-card, .service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const y = e.clientY - rect.top;    
    const cy = rect.height / 2;
    const dy = (y - cy) / cy;         
    card.style.transform = `perspective(800px) rotateX(${dy * -0}deg) scale3d(1.05,1.05,1.08)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

  // Close menu after clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
      navLinks.style.right = "-100%";
    });
  });

  // Contact form handling with feedback
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      formStatus.textContent = "Please fill out the form correctly.";
      formStatus.style.color = "#cc0000"; // red error
      return;
    }

    // Fake submission delay
    formStatus.textContent = "Sending message...";
    formStatus.style.color = "#232946";

    setTimeout(() => {
      form.reset();
      formStatus.textContent = "Message sent successfully! Thank you.";
      formStatus.style.color = "#4CAF50"; // green success

      setTimeout(() => {
        formStatus.textContent = "";
      }, 4000);
    }, 1500);
  });
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent default anchor jump
    e.preventDefault();

    // Get target section id from href
    const targetId = this.getAttribute('href');
    if(targetId.startsWith("#")) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Close the hamburger menu if open
    const menuToggle = document.getElementById('menu-toggle');
    if(menuToggle.checked){
      menuToggle.checked = false;
      document.querySelector('.nav-links').style.right = '-100%';
    }
  });
});
// ===== Smooth Scroll Buttons =====
document.addEventListener("DOMContentLoaded", () => {
    // Create scroll buttons dynamically
    const scrollUp = document.createElement("div");
    scrollUp.innerHTML = "&#8593;";
    scrollUp.classList.add("scroll-btn", "up");
    document.body.appendChild(scrollUp);

    // Smooth scroll to top
    scrollUp.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show/Hide buttons on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollUp.style.opacity = "2";
        } else {
            scrollUp.style.opacity = "0";
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // Collect all project images into an array
  const projectImgs = Array.from(document.querySelectorAll('.project-card img'));
  let currentIndex = 0;

  // Open lightbox with clicked image
  projectImgs.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  // Show previous image
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projectImgs.length) % projectImgs.length;
    lightboxImg.src = projectImgs[currentIndex].src;
  });

  // Show next image
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projectImgs.length;
    lightboxImg.src = projectImgs[currentIndex].src;
  });

  // Close lightbox on clicking outside image
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });

  // Optional: Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('hidden')){
      if(e.key === 'ArrowRight') {
        nextBtn.click();
      } else if(e.key === 'ArrowLeft') {
        prevBtn.click();
      } else if(e.key === 'Escape') {
        closeBtn.click();
      }
    }
  });
});


