const words = ["Web Developer", "Frontend Developer" , "Web Designer"];
        let wordIndex = 0;
        let charIndex = 0;
        const typingElement = document.querySelector(".typing-effect");
        

        function typeWord() {
            if (charIndex < words[wordIndex].length) {
                typingElement.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(typeWord, 150);
            } else {
                setTimeout(eraseWord, 1000);
            }
        }

        function eraseWord() {
            if (charIndex > 0) {
                typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseWord, 100);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWord, 500);
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            typeWord();
        });

        // Close navbar on link click (for mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }

                // Smooth scroll with offset for fixed navbar
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetPosition = targetElement.offsetTop - 56;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            });
        });