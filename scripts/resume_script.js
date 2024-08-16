function resumeChangeContent(tabId) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked tab
    document.getElementById(tabId).classList.add('active');
    
    // Change content based on clicked tab
    const skills = document.querySelector('.resume-section .trigger-resumeSkills');  
    const technologies = document.querySelector('.resume-section .trigger-resumeTechnologies'); 
    const awards = document.querySelector('.resume-section .trigger-resumeSoftware'); 
    // Show or hide the skills section based on the clicked tab
    if (tabId === 'tab1') {
      skills.style.display = 'flex';
      technologies.style.display = 'none';
      awards.style.display = 'none';
    } else if (tabId === 'tab2') {
      technologies.style.display = 'flex';
      skills.style.display = 'none';
      awards.style.display = 'none';
    } else if (tabId === 'tab3') {
      awards.style.display = 'flex';
      skills.style.display = 'none';
      technologies.style.display = 'none';
    }
  }