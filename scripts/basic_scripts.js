
//TODO
// WILL BE CHANGING THE APPROACH OF THE FEATURES OF THE WEBSITE. THIS SCRIPT FILE WILL BE CHANGING SOON. 



// WILL CHANGE THE APPROACH ON THIS HOVER EFFECT! TODO
// var screenW = window.screen.width
// document.addEventListener("DOMContentLoaded", function() {
//  if (screenW > 1100) {

//   const portfolioItems = document.querySelectorAll(".portfolio-item");

//   portfolioItems.forEach((item) => {
//     item.addEventListener("mouseout", () => {
//       // Restore the original width of all items
//       portfolioItems.forEach((item) => {
//         item.style.width = ""; // Remove custom width
//         item.style.zIndex = "0";
//       });
//     });

//     item.addEventListener("mouseover", () => {

//     // Reset the width of all items
//     portfolioItems.forEach((item) => {
//       item.style.width = ""; // Remove custom width
//       item.style.zIndex = "0";
//     });

//     // Enlarge the hovered item
//     item.style.zIndex = "1";

//       // Find the corresponding items and apply custom animations
//     const itemOne = document.querySelector(".item_one");
//     const itemFour = document.querySelector(".item_four");
//     const itemThree = document.querySelector(".item_three");
//     const itemTwo = document.querySelector(".item_two");

//     const originalWidth = item.offsetWidth; // Get original width
//     const enlargedWidth = originalWidth * 2; // Calculate enlarged width (adjust factor as needed)

//     portfolioItems.forEach(item => {
//       item.addEventListener('mouseenter', () => {
//         // Start checking for animation completion
//         if (item.style.transform.scaleX != 1.05) {
//           if (item.classList.contains("item_one")) {
//             itemOne.style.width = enlargedWidth + "px";    
//           } else if (item.classList.contains("item_two")) {
//             itemTwo.style.width = enlargedWidth + "px";   
//           } else if (item.classList.contains("item_three")) {
//             itemThree.style.width = enlargedWidth + "px";
//           } else if (item.classList.contains("item_four")) {
//             itemFour.style.width = enlargedWidth + "px"; 
//           }  
//         }
//       });
//     });
//     });    
//   });
// }
// });


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
  
  const skills = document.querySelector('#tech-used .trigger-skills');  
  const experience = document.querySelector('#tech-used .trigger-experience'); 
  const awards = document.querySelector('#tech-used .trigger-awards'); 
  // Show or hide the skills section based on the clicked tab
  if (tabId === 'tab1') {
    skills.style.display = 'flex';
    experience.style.display = 'none';
    awards.style.display = 'none';
  } else if (tabId === 'tab2') {
    experience.style.display = 'flex';
    skills.style.display = 'none';
    awards.style.display = 'none';
  } else if (tabId === 'tab3') {
    awards.style.display = 'flex';
    skills.style.display = 'none';
    experience.style.display = 'none';
  }
}

function openNewTab(docID, url) {
  document.getElementById(docID).addEventListener('click', function() {
    window.open(url, '_blank');
  });
}

