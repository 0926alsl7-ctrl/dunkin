document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('dunkinToggle');

    if(toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            
            const isChecked = this.classList.contains('active');
            this.setAttribute('aria-checked', isChecked);
            this.setAttribute('data-state', isChecked ? 'checked' : 'unchecked');
        });
    }
});
// (1) section1 - swiper
document.addEventListener('DOMContentLoaded', function() {
  const mainSwiper = new Swiper('.main-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.main-swiper-pagination',
      clickable: true,
    },
  });

  const mainTopSwiper = new Swiper('.sec1-swiper-action-top', {
    loop: true,
    speed: 800,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-action-top-pagination',
      clickable: true,
    },
  });

  const mainBottomSwiper = new Swiper('.swiper-btm', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-btm-pagination',
      clickable: true,
    },
  });
});
// (2) section2 - swiper
document.addEventListener('DOMContentLoaded', function() {
  const sec2Swiper = new Swiper('.sec2-swiper', {
    loop: true,
    speed: 700,
    centeredSlides: true, 
    slidesPerView: 'auto',
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sec2-swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      }
    }
  });
});
// section (3) -swiper
document.addEventListener('DOMContentLoaded', function() {
  const sec3Swiper = new Swiper('.sec3-swiper', {
    loop: false,
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0, 
        autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.sec3-swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      976: {
        centeredSlides: false,
        slidesPerView: 'auto',
      },
       768: {
        centeredSlides: true,
        slidesPerView: 'auto',
      },
      0:{
        centeredSlides: true,
        slidesPerView: 'auto',
      }

    }
  });
});
// section (4) - swiper
document.addEventListener('DOMContentLoaded', function() {
  const sec4Swiper = new Swiper('.sec4-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: false,
    speed: 700,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sec4-swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        enabled: false, 
      },
      0: {
        enabled: true, 
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const familyBtn = document.querySelector('.familysite-btn');
    const familyList = document.querySelector('.familysite');
    const familyArrow = document.querySelector('.familysite-arrow');

    if (familyBtn) {
        familyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            familyList.classList.toggle('active');
            
            if (familyList.classList.contains('active')) {
                familyArrow.style.transform = 'rotateX(0deg)';
            } else {
                familyArrow.style.transform = 'rotateX(180deg)';
            }
        });
    }

    document.addEventListener('click', function(e) {
        if (!familyBtn.contains(e.target) && !familyList.contains(e.target)) {
            familyList.classList.remove('active');
            familyArrow.style.transform = 'rotateX(180deg)';
        }
    });
});

// mobile
const mobileMenuOpen = document.querySelector(".mob-menu-open")

if(mobileMenuOpen){
  mobileMenuOpen.addEventListener('click',function(e){
    e.preventDefault();
    mobileMenuOpen.classList.toggle('active');
  })
}

const mobMenuContents = document.querySelectorAll('.mob-menu-content');

mobMenuContents.forEach(content => {
  const menuTxt = content.querySelector('.mob-menu-txt');
  const submenu = content.querySelector('.mob-submenu');
  const arrow = content.querySelector('.mob-submenu-open');

  if (submenu && menuTxt) {
    menuTxt.addEventListener('click', function(e) {
      e.preventDefault();

      const isOpen = content.classList.contains('active');
      mobMenuContents.forEach(item => {
        item.classList.remove('active');
        const sub = item.querySelector('.mob-submenu');
        if(sub) sub.style.maxHeight = null;
      });
      

      if (!isOpen) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }
});
