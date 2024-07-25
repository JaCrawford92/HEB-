// document.addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // ScrollSpy
//     const sections = document.querySelectorAll('section');
//     const navLi = document.querySelectorAll('nav .w3-bar-item');
    
//     window.addEventListener('scroll', () => {
//         let current = '';
        
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             if (scrollY >= sectionTop - 60) {
//                 current = section.getAttribute('id');
//             }
//         });
        
//         navLi.forEach(li => {
//             li.classList.remove('active');
//             if (li.classList.contains(current)) {
//                 li.classList.add('active');
//             }
//         });
//     });

//     // Dark Mode Toggle
//     const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
//     const currentTheme = localStorage.getItem('theme');

//     if (currentTheme) {
//         document.documentElement.setAttribute('data-theme', currentTheme);

//         if (currentTheme === 'dark') {
//             toggleSwitch.checked = true;
//         }
//     }

//     function switchTheme(e) {
//         if (e.target.checked) {
//             document.documentElement.setAttribute('data-theme', 'dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.documentElement.setAttribute('data-theme', 'light');
//             localStorage.setItem('theme', 'light');
//         }
//     }

//     toggleSwitch.addEventListener('change', switchTheme, false);
// });
