


const nav =  document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//  When the hamburger is clicked
navToggle.addEventListener("click", ()=>{
    const visibility = nav.getAttribute("data-visible");
    
    // If the menu is closed, open it
    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute("aria-expanded", true);
    }
    // If the menu is opened, close it
    else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute("aria-expanded", false);
    }
})