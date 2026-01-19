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
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 'auto', 
      }
    }
  });
});
// section (3) -swiper
document.addEventListener('DOMContentLoaded', function() {
  const sec3Swiper = new Swiper('.sec3-swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 2, 
    
    spaceBetween: 0, 

    speed: 1000,
    loop: false,

    pagination: {
      el: '.sec3-swiper-pagination',
      clickable: true,
    },

    observer: true,
    observeParents: true,

    breakpoints: {
      976: {
        slidesPerGroup: 2, 
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
            // active 클래스를 토글 (넣었다 뺐다)
            familyList.classList.toggle('active');
            
            // 화살표 회전 효과
            if (familyList.classList.contains('active')) {
                familyArrow.style.transform = 'rotateX(0deg)';
            } else {
                familyArrow.style.transform = 'rotateX(180deg)';
            }
        });
    }

    // 바깥 영역 클릭하면 닫히게 (디테일!)
    document.addEventListener('click', function(e) {
        if (!familyBtn.contains(e.target) && !familyList.contains(e.target)) {
            familyList.classList.remove('active');
            familyArrow.style.transform = 'rotateX(180deg)';
        }
    });
});
