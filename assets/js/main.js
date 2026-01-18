/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

/* TOGGLE MENU + ICON */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')

    ///change icon
    if (navMenu.classList.contains('show-menu')) {
        navToggle.classList.remove('ri-menu-line')
        navToggle.classList.add('ri-close-line')
    } else {
        navToggle.classList.remove('ri-close-line')
        navToggle.classList.add('ri-menu-line')
    }
})

/* CLOSE MENU WHEN CLICK LINK */
navLinks.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('ri-close-line')
        navToggle.classList.add('ri-menu-line')
    })
)

/* CLOSE MENU WHEN CLICK OUTSIDE */
document.addEventListener('click', (e) => {
    if (
        navMenu.classList.contains('show-menu') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
    ) {
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('ri-close-line')
        navToggle.classList.add('ri-menu-line')
    }
})

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 70
        const sectionId = current.getAttribute('id')

        const navLink = document.querySelector(
            `.nav__menu a[href="#${sectionId}"]`
        )

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link')
        } else {
            navLink.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== HEADER SHADOW ON SCROLL ===============*/
const header = document.getElementById('header')

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 800,
    delay: 100,
    reset: false
})

/* HOME */
sr.reveal('.home__img')
sr.reveal('.home__data', { delay: 200 })

/* ABOUT */
sr.reveal('.about__data', { origin: 'left' })
sr.reveal('.about__visual', { origin: 'right', delay: 200 })

/* PROJECTS */
sr.reveal('.project__card', { interval: 120 })

/* CONTACT */
sr.reveal('.contact__info', { origin: 'left' })
sr.reveal('.contact__form', { origin: 'right', delay: 200 })

/* FOOTER */
sr.reveal('.footer', { origin: 'bottom' })


/*=============== TYPED JS (HOME SUBTITLE) ===============*/
const typed = new Typed('#typed-text', {
    strings: [
        'Full Stack Developer',
        'Problem Solver',
        'Software Developer'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: false
})


/*=============== EMAIL JS ===============*/
emailjs.init('emDm4eVYZE3zTJFxv')

const contactForm = document.getElementById('contact-form')
const btn = contactForm.querySelector('button')
const messageBox = document.getElementById('contact-message')

contactForm.addEventListener('submit', function (e) {
  e.preventDefault()

  btn.textContent = 'Sending...'
  btn.disabled = true

  messageBox.textContent = ''
  messageBox.className = 'contact__message'

  emailjs.sendForm(
    'service_6hdmcwi',
    'template_i0as3ux',
    this
  )
  .then(() => {
    messageBox.textContent = 'Message sent successfully ✅'
    messageBox.classList.add('success')
    contactForm.reset()
  })
  .catch(() => {
    messageBox.textContent = 'Failed to send message ❌'
    messageBox.classList.add('error')
  })
  .finally(() => {
    btn.textContent = 'Send Message'
    btn.disabled = false

    
    setTimeout(() => {
      messageBox.className = 'contact__message'
      messageBox.textContent = ''
    }, 4000)
  })
})




