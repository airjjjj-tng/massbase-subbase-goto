document.addEventListener('DOMContentLoaded', () => {
    
    // --- Header Scroll Effect ---
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Open clicked if it wasn't open
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // --- Simulator Logic ---
    const simRadios = document.querySelectorAll('input[name="sim-prop"]');
    const simSlider = document.getElementById('sim-days');
    const simDaysDisplay = document.getElementById('sim-days-display');
    const simTotal = document.getElementById('sim-total');
    const quickBtns = document.querySelectorAll('.sim-quick-btns button');

    const rates = {
        massbase: { base30: 69990, dailyOver30: 2333 },
        subbase: { base30: 79980, dailyOver30: 2666 }
    };

    function calculateTotal() {
        if(!simSlider) return;
        let selectedProp = 'massbase';
        simRadios.forEach(r => { if(r.checked) selectedProp = r.value; });
        
        let days = parseInt(simSlider.value);
        simDaysDisplay.textContent = days;

        const rate = rates[selectedProp];
        let total = 0;

        if (days <= 30) {
            total = rate.base30;
        } else {
            total = rate.base30 + (rate.dailyOver30 * (days - 30));
        }

        simTotal.textContent = '¥' + total.toLocaleString();
    }

    if(simRadios.length > 0) {
        simRadios.forEach(r => r.addEventListener('change', calculateTotal));
        simSlider.addEventListener('input', calculateTotal);
        
        quickBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                simSlider.value = e.target.getAttribute('data-days');
                calculateTotal();
            });
        });
        calculateTotal();
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if(targetEl) {
                const headerOffset = 80;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            header.classList.add('scrolled'); // Force solid bg when menu opens
        });
    }
});
