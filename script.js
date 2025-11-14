document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    const downloadBtns = document.querySelectorAll('#downloadBtn, #downloadBtnMain');
    const downloadModal = document.getElementById('downloadModal');
    
    if (downloadModal) {
        const closeModal = document.querySelector('.close-modal');
        const confirmDownload = document.getElementById('confirmDownload');

        downloadBtns.forEach(btn => {
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    downloadModal.style.display = 'flex';
                });
            }
        });

        if (closeModal) {
            closeModal.addEventListener('click', function() {
                downloadModal.style.display = 'none';
            });
        }

        if (confirmDownload) {
            confirmDownload.addEventListener('click', function(e) {
                e.preventDefault();
                open("https://work.ink/27rb/f1edfffe-7b75-4c3d-83d8-75e4a51181c4");
                downloadModal.style.display = 'none';
            });
        }

        window.addEventListener('click', function(e) {
            if (e.target === downloadModal) {
                downloadModal.style.display = 'none';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    document.querySelectorAll('.staff-card').forEach(card => {
        card.addEventListener('click', () => {
            const details = card.querySelector('.staff-details');
            const isShown = details.classList.contains('show');

           
            document.querySelectorAll('.staff-details').forEach(d => {
                d.classList.remove('show');
            });

            if (!isShown) {
                details.classList.add('show');
            }
        });
    });
});




