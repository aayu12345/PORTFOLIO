// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#6c63ff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6c63ff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }

  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  document.addEventListener("mousedown", () => {
    cursor.style.width = "8px"
    cursor.style.height = "8px"
    cursorFollower.style.width = "30px"
    cursorFollower.style.height = "30px"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.width = "10px"
    cursor.style.height = "10px"
    cursorFollower.style.width = "40px"
    cursorFollower.style.height = "40px"
  })

  // Add hover effect to links and buttons
  const links = document.querySelectorAll("a, button, .filter-btn, .social-icon")
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.width = "0px"
      cursor.style.height = "0px"
      cursorFollower.style.width = "50px"
      cursorFollower.style.height = "50px"
      cursorFollower.style.borderColor = "#6c63ff"
    })

    link.addEventListener("mouseleave", () => {
      cursor.style.width = "10px"
      cursor.style.height = "10px"
      cursorFollower.style.width = "40px"
      cursorFollower.style.height = "40px"
      cursorFollower.style.borderColor = "#6c63ff"
    })
  })

  // Typewriter effect
  const typewriterElement = document.getElementById("typewriter")
  const phrases = ["ML Developer", "AI Specialist", "Data Scientist", "Problem Solver"]
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 100
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true
      typingSpeed = 1000 // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      typingSpeed = 500 // Pause before typing next phrase
    }

    setTimeout(typeWriter, typingSpeed)
  }

  typeWriter()

  // Mobile navigation
  const hamburger = document.querySelector(".hamburger")
  const mobileNav = document.querySelector(".mobile-nav")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobileNav.classList.toggle("active")

    if (hamburger.classList.contains("active")) {
      document.body.style.overflow = "hidden"

      // Animate hamburger
      hamburger.querySelectorAll(".line")[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      hamburger.querySelectorAll(".line")[1].style.opacity = "0"
      hamburger.querySelectorAll(".line")[2].style.transform = "rotate(-45deg) translate(7px, -6px)"

      // Animate mobile nav links
      mobileNavLinks.forEach((link, index) => {
        setTimeout(() => {
          link.style.transitionDelay = `${index * 0.1}s`
          link.style.opacity = "1"
          link.style.transform = "translateY(0)"
        }, 300)
      })
    } else {
      document.body.style.overflow = "auto"

      // Reset hamburger
      hamburger.querySelectorAll(".line")[0].style.transform = "none"
      hamburger.querySelectorAll(".line")[1].style.opacity = "1"
      hamburger.querySelectorAll(".line")[2].style.transform = "none"

      // Reset mobile nav links
      mobileNavLinks.forEach((link) => {
        link.style.opacity = "0"
        link.style.transform = "translateY(50px)"
        link.style.transitionDelay = "0s"
      })
    }
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      mobileNav.classList.remove("active")
      document.body.style.overflow = "auto"

      // Reset hamburger
      hamburger.querySelectorAll(".line")[0].style.transform = "none"
      hamburger.querySelectorAll(".line")[1].style.opacity = "1"
      hamburger.querySelectorAll(".line")[2].style.transform = "none"
    })
  })

  // Sticky header
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Scroll reveal animations
  const revealElements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up")

  function checkReveal() {
    const windowHeight = window.innerHeight
    const revealPoint = 150

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - revealPoint) {
        const delay = element.getAttribute("data-delay") || 0
        setTimeout(() => {
          element.classList.add("active")
        }, delay)
      }
    })
  }

  window.addEventListener("scroll", checkReveal)
  window.addEventListener("load", checkReveal)

  // Counter animation
  const counters = document.querySelectorAll(".counter")

  function startCounters() {
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-target"))
      const count = 0
      const increment = target / 30 // Adjust speed

      function updateCount() {
        const currentCount = Number.parseInt(counter.textContent)
        if (currentCount < target) {
          counter.textContent = Math.ceil(currentCount + increment)
          setTimeout(updateCount, 50)
        } else {
          counter.textContent = target
        }
      }

      updateCount()
    })
  }

  // Start counters when about section is in view
  const aboutSection = document.querySelector(".about")

  function checkAboutSection() {
    const aboutTop = aboutSection.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (aboutTop < windowHeight - 200) {
      startCounters()
      window.removeEventListener("scroll", checkAboutSection)
    }
  }

  window.addEventListener("scroll", checkAboutSection)

  // Skill bars animation
  const skillBars = document.querySelectorAll(".skill-progress")

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width")
      bar.style.width = width + "%"
    })
  }

  // Start skill bars animation when skills section is in view
  const skillsSection = document.querySelector(".skills")

  function checkSkillsSection() {
    const skillsTop = skillsSection.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (skillsTop < windowHeight - 200) {
      animateSkillBars()
      window.removeEventListener("scroll", checkSkillsSection)
    }
  }

  window.addEventListener("scroll", checkSkillsSection)

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "scale(1)"
          }, 100)
        } else {
          if (card.getAttribute("data-category").includes(filter)) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "scale(1)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "scale(0.8)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        }
      })
    })
  })

  // Testimonial slider
  const testimonialTrack = document.querySelector(".testimonial-track")
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const testimonialDots = document.querySelectorAll(".testimonial-dot")
  const prevButton = document.querySelector(".testimonial-prev")
  const nextButton = document.querySelector(".testimonial-next")
  let currentSlide = 0

  function goToSlide(index) {
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`

    // Update dots
    testimonialDots.forEach((dot) => dot.classList.remove("active"))
    testimonialDots[index].classList.add("active")

    currentSlide = index
  }

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
    goToSlide(currentSlide)
  })

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    goToSlide(currentSlide)
  })

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index)
    })
  })

  // Auto slide testimonials
  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    goToSlide(currentSlide)
  }, 5000)

  // Form validation and animation
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple validation
      let valid = true
      const inputs = contactForm.querySelectorAll("input, textarea")

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          valid = false
          input.classList.add("error")
        } else {
          input.classList.remove("error")
        }
      })

      if (valid) {
        const submitBtn = contactForm.querySelector(".submit-btn")
        const originalText = submitBtn.innerHTML
    
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
        submitBtn.disabled = true
    
        const formData = new FormData(contactForm)
        const action = contactForm.getAttribute('action')
    
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
                contactForm.reset()
    
                setTimeout(() => {
                    submitBtn.innerHTML = originalText
                    submitBtn.disabled = false
                }, 3000)
            } else {
                submitBtn.innerHTML = 'Failed to Send!'
                setTimeout(() => {
                    submitBtn.innerHTML = originalText
                    submitBtn.disabled = false
                }, 3000)
            }
        }).catch(error => {
            submitBtn.innerHTML = 'Failed to Send!'
            setTimeout(() => {
                submitBtn.innerHTML = originalText
                submitBtn.disabled = false
            }, 3000)
        })
    }
    
    })
  }

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("active")
    } else {
      backToTopButton.classList.remove("active")
    }
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("header a, .mobile-nav a, .hero-buttons a, .footer-links a")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href.startsWith("#") && href !== "#") {
        e.preventDefault()

        const targetSection = document.querySelector(href)

        if (targetSection) {
          const offsetTop = targetSection.offsetTop

          window.scrollTo({
            top: offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Active navigation link on scroll
  const sections = document.querySelectorAll("section")
  const navItems = document.querySelectorAll(".nav-links a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active")
      }
    })
  })

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle")

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    // Update icons visibility based on current theme
    const moonIcon = themeToggle.querySelector(".fa-moon")
    const sunIcon = themeToggle.querySelector(".fa-sun")

    if (document.body.classList.contains("dark-mode")) {
      moonIcon.style.display = "none"
      sunIcon.style.display = "block"
      localStorage.setItem("theme", "dark")
    } else {
      moonIcon.style.display = "block"
      sunIcon.style.display = "none"
      localStorage.setItem("theme", "light")
    }
  })

  // Check for saved theme preference on page load
  const moonIcon = document.querySelector(".theme-toggle .fa-moon")
  const sunIcon = document.querySelector(".theme-toggle .fa-sun")

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode")
    moonIcon.style.display = "none"
    sunIcon.style.display = "block"
  } else {
    moonIcon.style.display = "block"
    sunIcon.style.display = "none"
  }

  // Function to ensure all profile images maintain circular shape
  function setupCircularImages() {
    // Get all images with class 'profile-img' or 'circular-img'
    const circularImages = document.querySelectorAll(".profile-img, .circular-img, .testimonial-author img")

    circularImages.forEach((img) => {
      // Add load event to ensure proper sizing after image loads
      img.addEventListener("load", function () {
        // If width and height are not equal, set height equal to width
        if (this.offsetWidth !== this.offsetHeight) {
          this.style.height = this.offsetWidth + "px"
        }
      })

      // If image is already loaded, apply the sizing
      if (img.complete) {
        if (img.offsetWidth !== img.offsetHeight) {
          this.style.height = img.offsetWidth + "px"
        }
      }
    })
  }

  // Call the function on page load
  setupCircularImages()

  // Call the function again if window is resized
  window.addEventListener("resize", setupCircularImages)
})



  
  