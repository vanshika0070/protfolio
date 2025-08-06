


 // navbar scroll
 {
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
 }



///////////////////////////////////////////////////////////////////////////////////



// scanner

	const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("greetingModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



///////////////////////////////////////////////////////////////////////////////////


{
  // skills
	gsap.registerPlugin(ScrollTrigger);
   
	// Animate each category card on scroll
	gsap.from(".category", {
	  scrollTrigger: {
	    trigger: ".skills-section",
	    start: "top 80%",
	  },
	  opacity: 0,
	  duration: 0.6,
	  stagger: 0.2,
	  ease: "power2.out"
	});
   
	// Progress bar fill animation
	gsap.utils.toArray(".progress").forEach((bar) => {
	  let width = bar.style.width;
	  bar.style.width = 0;
   
	  gsap.to(bar, {
	    scrollTrigger: {
		 trigger: bar,
		 start: "top 90%",
	    },
	    width: width,
	    duration: 1.2,
	    ease: "power1.out"
	  });
	});
   
	// Animate design tool icons
	gsap.from(".icon-skill", {
	  scrollTrigger: {
	    trigger: ".skills-section",
	    start: "top 90%",
	  },
	  opacity: 0,
	  y: 30,
	  duration: 0.5,
	  stagger: 0.15,
	  ease: "back.out(1.7)"
	});
}



///////////////////////////////////////////////////////////////////////////////////


{
  // form
  const form = document.getElementById('onboardingForm');

    form.addEventListener('submit', async function (e) {
      e.preventDefault(); // prevent default submit

      if (!form.checkValidity()) return; // skip if invalid

      const formData = new FormData(form);

      try {
        // Send form data via fetch to FormSubmit
        const response = await fetch("https://formsubmit.co/ajax/vanshikawork.0070@gmail.com", {
          method: "POST",
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        if (response.ok) {
          sparkleEffect(); // ✨ Trigger sparkles
          document.getElementById("message").innerHTML = "Form submitted! Redirecting...";

          setTimeout(() => {
            window.location.href = "https://thankyou-page.com"; // Optional: replace with your thank you page
          }, 1200);
        } else {
          document.getElementById("message").innerText = "Oops! Something went wrong.";
        }
      } catch (err) {
        document.getElementById("message").innerText = "Submission failed.";
        console.error(err);
      }
    });

    function sparkleEffect() {
      const button = document.querySelector('.sparkle-button');
      const rect = button.getBoundingClientRect();

      for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        sparkle.style.left = `${rect.left + rect.width / 2}px`;
        sparkle.style.top = `${rect.top + rect.height / 2}px`;

        const x = (Math.random() - 0.5) * 300 + 'px';
        const y = (Math.random() - 0.5) * 300 + 'px';
        sparkle.style.setProperty('--x', x);
        sparkle.style.setProperty('--y', y);

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
      }
    }
}


//////////////////

{
  if (response.ok) {
    sparkleEffect(); // ✨ sparkle!
    document.getElementById("message").innerHTML = "Form submitted! Redirecting...";
    setTimeout(() => {
      window.location.href = "https://thankyou-page.com";
    }, 1200);
  }
  
}


///////////////////////////////////////////////////////////////////////////////////