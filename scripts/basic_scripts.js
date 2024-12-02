
//TODO
// WILL BE CHANGING THE APPROACH OF THE FEATURES OF THE WEBSITE. THIS SCRIPT FILE WILL BE CHANGING SOON. 


const header = document.querySelector('.header');
const btnCallToAction = document.querySelector('.work-with-me .btn');

window.addEventListener('scroll', () => {
  screenW = window.screen.width
  // Calculate scroll position within the event handler
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 120) {
    header.classList.add('scrolled');
    btnCallToAction.classList.add('btn-warning');
  } else {
    header.classList.remove('scrolled');
    btnCallToAction.classList.remove('btn-warning');
  }
  console.log(scrollPosition)
});
  
function checkAnimationComplete(element) {
  return element.style.transform === 'scaleX(1.05)';
}


const portfolioItems = document.querySelectorAll('.portfolio-item');
function changeContent(tabId) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  
  const experience = document.querySelector('#tech-used .trigger-experience'); 
  const awards = document.querySelector('#tech-used .trigger-awards'); 
  // Show or hide the skills section based on the clicked tab
  if (tabId === 'tab1') {
    experience.style.display = 'flex';
    awards.style.display = 'none';
  } else if (tabId === 'tab2') {
    awards.style.display = 'flex';
    experience.style.display = 'none';
  }
}

// Duplicate content for seamless scrolling
// const logos = document.querySelector('.logos-top .logos-slide');

// // Clone and append copies to ensure enough content
// const topClone = logos.cloneNode(true);
// const bottomClone = logos.cloneNode(true);

// // Append clones to the DOM
// document.querySelector('.logos-top').appendChild(topClone);
// document.querySelector('.logos-bot').appendChild(bottomClone);

