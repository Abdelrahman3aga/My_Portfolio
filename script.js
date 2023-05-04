// Header Toogle

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('.auto-input',{
  strings: ['Freelancer', 'Content Creator', 'YouTuber'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
})
