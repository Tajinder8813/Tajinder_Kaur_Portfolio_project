
// Select your actual HTML elements
let navToggler = document.querySelector('.nav-toggler');
let aside = document.querySelector('.aside');

// Toggle the sidebar when the hamburger is clicked
navToggler.onclick = () => {
    aside.classList.toggle('open');      // Use 'open' to match your CSS media query
    navToggler.classList.toggle('active'); // Use 'active' to animate the hamburger to an 'X'
}



// Close the sidebar automatically when the user scrolls
window.onscroll = () => {
    aside.classList.remove('open');
    navToggler.classList.remove('active');
}
function toggleNumber(event) {
    event.preventDefault(); // Prevent default link behavior
    const phoneElement = document.getElementById('phone');          //span
    if (phoneElement.style.display === 'none' || phoneElement.style.display === '') 
        {
        phoneElement.style.display = 'inline'; // Show the phone number //123-456-7890
        event.target.textContent = 'Hide Number'; // Change link text
        } 
    else 
        {
        phoneElement.style.display = 'none'; // Hide the phone number
        event.target.textContent = 'Show Number'; // Reset link text
        }
}

const navItems = document.querySelectorAll(".nav li a");

navItems.forEach(item => {
    item.addEventListener("click", function() {
        // 1. Remove 'active' class from all links
        navItems.forEach(link => link.classList.remove("active"));
        
        // 2. Add 'active' class to the clicked link
        this.classList.add("active");
        
        // 3. If on mobile, close the sidebar (using your existing function)
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
});
const sections = document.querySelectorAll("section"); // Make sure your sections have <section> tags or a specific class

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if the scroll position is within the section (with a small offset)
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});