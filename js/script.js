/**
 * Portfolio Website JavaScript Enhancement
 * 
 * This script adds interactivity to the portfolio website including:
 * - Smooth scrolling navigation
 * - Resume download simulation
 * - Project card interactions
 * - Active section highlighting
 * - Skills hover effects
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio website loaded - JavaScript active');

    // ====================
    // 1. SMOOTH SCROLLING NAVIGATION
    // ====================
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Smooth scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });

                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });

    // Function to update active navigation link
    function updateActiveNavLink(activeId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeId) {
                link.classList.add('active');
            }
        });
    }

    // ====================
    // 2. RESUME BUTTON FUNCTIONALITY
    // ====================
    const resumeButton = document.getElementById('resume-button');

    if (resumeButton) {
        resumeButton.addEventListener('click', function () {
            // Simulate download with visual feedback
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.2s';

            // Show download message
            const originalText = this.querySelector('.text-wrapper-7').textContent;
            this.querySelector('.text-wrapper-7').textContent = 'Downloading...';

            // Simulate download delay
            setTimeout(() => {
                this.querySelector('.text-wrapper-7').textContent = 'Downloaded!';
                this.style.transform = 'scale(1)';

                // Reset after 1.5 seconds
                setTimeout(() => {
                    this.querySelector('.text-wrapper-7').textContent = originalText;
                }, 1500);

                // Download file PDF
                const link = document.createElement('a');
                link.href = 'assets/document/CV.pdf'; // Path ke file PDF
                link.download = 'Zaky_Resume.pdf'; // Nama file saat didownload
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                console.log('Resume download simulated - In production, link to actual PDF');
            }, 800);
        });
    }

    // ====================
    // 3. PROJECT CARD INTERACTIONS
    // ====================
    const projectCards = document.querySelectorAll('.frame-13, .frame-18');
    const seeMoreButtons = document.querySelectorAll('.frame-17, .frame-19');

    // Add hover effects to project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(8, 131, 149, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // "See more" button functionality
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const projectCard = this.closest('.frame-13, .frame-18');
            const projectTitle = projectCard.querySelector('.text-wrapper-12').textContent;

            // Create a modal or alert with project details
            alert(`Viewing details for: ${projectTitle}\n\nIn a real implementation, this would open a detailed project view or modal.`);

            // Visual feedback
            this.style.color = '#09637e';
            this.style.fontWeight = 'bold';

            setTimeout(() => {
                this.style.color = '';
                this.style.fontWeight = '';
            }, 1000);
        });
    });

    // ====================
    // 4. SKILLS SECTION HOVER EFFECTS
    // ====================
    const skillCards = document.querySelectorAll('.frame-9');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const skillName = this.querySelector('.text-wrapper-11').textContent;
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';

            // Add a subtle pulse animation
            this.style.animation = 'skillPulse 2s infinite';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.animation = '';
        });
    });

    // ====================
    // 4. SKILLS SECTION HOVER EFFECTS
    // ====================
    const toolsCards = document.querySelectorAll('.frame-21');

    toolsCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const toolsName = this.querySelector('.text-wrapper-15').textContent;
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';

            // Add a subtle pulse animation
            this.style.animation = 'skillPulse 2s infinite';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.animation = '';
        });
    });

    // ====================
    // 5. ACTIVE SECTION HIGHLIGHTING
    // ====================
    const sections = document.querySelectorAll('.about-section, .skiils-section, .projects-section, .tools-section, .contact-section');

    function highlightActiveSection() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = '#' + section.id;
            }
        });

        if (currentSectionId) {
            updateActiveNavLink(currentSectionId);
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', highlightActiveSection);

    // Initial check
    highlightActiveSection();

    // ====================
    // 6. SOCIAL MEDIA LINK FUNCTIONALITY
    // ====================
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            console.log(`Opening: ${this.getAttribute('href')}`);
        });
    });

    // ====================
    // 7. ADDITIONAL ENHANCEMENTS
    // ====================

    // Current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.span');

    if (yearElement && yearElement.textContent.includes('2026')) {
        // Update to current year if it's still 2026
        yearElement.textContent = yearElement.textContent.replace('2026', currentYear.toString());
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function (e) {
        // Tab key navigation - add focus styles
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Remove keyboard navigation class on mouse click
    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-navigation');
    });
});

