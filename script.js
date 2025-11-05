function copymenu() {

    let dptCategory = document.querySelector(".dpt-cat");
    let dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    let mainNav = document.querySelector(".header-nav nav");
    let navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    let topNav = document.querySelector('.header-top .wrapper');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;



}
    copymenu();

    const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addclass = document.querySelector('.site'),
        overlay = document.querySelector('.overlay');

        if (menuButton) {
            menuButton.addEventListener('click' , function(e) {
                e.preventDefault();
                addclass.classList.toggle('showmenu');
            });
        }
        if (closeButton) {
            closeButton.addEventListener('click' , function (e) {
                e.preventDefault();
                addclass.classList.remove('showmenu');
            });
        }
        if (overlay) {
            overlay.addEventListener('click', function(){
                addclass.classList.remove('showmenu');
                addclass.classList.remove('showsearch');
            });
        }



    
    
    const mobileMenuItems = document.querySelectorAll(".off-canvas .has-child");
    
    mobileMenuItems.forEach((item) => {
        const menuLink = item.querySelector('a');
        if (menuLink) {
            menuLink.addEventListener('click', toggleMobile);
        }
    });

    function toggleMobile(e) {
        e.preventDefault();
        const parent = this.closest('.has-child');
        
        
        mobileMenuItems.forEach((item) => {
            if (item !== parent && item.classList.contains('expand')) {
                item.classList.remove('expand');
            }
        });
        
      
        parent.classList.toggle('expand');
    }

    const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    });

    const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');

    if (searchButton) {
        searchButton.addEventListener('click' , function (e) {
            e.preventDefault();
            showClass.classList.toggle('showsearch');
        });
    }
    if (tClose) {
        tClose.addEventListener('click', function (e) {
            e.preventDefault();
            showClass.classList.remove('showsearch');
        });
    }

    
    document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') {
            showClass.classList.remove('showmenu');
            showClass.classList.remove('showsearch');
        }
    });

    
    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', function(e){
            e.preventDefault();
        });
    });

    
    document.querySelectorAll('a[href^="#"]:not([href="#"]):not([href="#0"])').forEach(link => {
        link.addEventListener('click', function(e){
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                addclass.classList.remove('showmenu');
                addclass.classList.remove('showsearch');
            }
        });
    });