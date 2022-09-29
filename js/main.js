// slide left tab
const newsTab = document.querySelector('.slide__news h3');
const citizenTab = document.querySelector('.slide__citizen h3');
const newsPauseBtn = document.querySelector('.slide__news .swiper-pause');
const newsPauseBtnIcon = newsPauseBtn.querySelectorAll('button');
const citizenPauseBtn = document.querySelector('.slide__citizen .swiper-pause');
const citizenPauseBtnIcon = citizenPauseBtn.querySelectorAll('button');
const adPauseBtn = document.querySelector('.ad-swiper .swiper-pause');
const adPauseBtnIcon = adPauseBtn.querySelectorAll('button');

citizenTab.addEventListener('click', function() {
  if(newsTab.parentNode.classList.contains('on')) {
    newsTab.parentNode.classList.remove('on');
    this.parentNode.classList.add('on');
  }
  
});

newsTab.addEventListener('click', function() {
  if(citizenTab.parentNode.classList.contains('on')) {
    citizenTab.parentNode.classList.remove('on');
    this.parentNode.classList.add('on');
  }
});


// slide swiper
const slideNews = new Swiper('.slide__news .swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.slide__news .swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.slide__news .swiper-next',
    prevEl: '.slide__news .swiper-prev',
  },
  // observer: true,
  // observeParents: true,
});

const slideCitizen = new Swiper('.slide__citizen .swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.slide__citizen .swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.slide__citizen .swiper-next',
    prevEl: '.slide__citizen .swiper-prev',
  },
  // observer: true,
  // observeParents: true,
});

const slideAd = new Swiper('.ad-swiper .swiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.ad-swiper .swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.ad-swiper .swiper-next',
    prevEl: '.ad-swiper .swiper-prev',
  },
  // observer: true,
  // observeParents: true,
});


// slide navigation button
newsPauseBtn.addEventListener('click', function() {
  autoPlaystate = this.getAttribute('aria-pressed');
  if (autoPlaystate === 'false') {
    newsPauseBtn.setAttribute('aria-pressed', 'true');
    slideNews.autoplay.stop();
    newsPauseBtnIcon[0].style.display = "none";
    newsPauseBtnIcon[1].style.display = "block";
  } else {
    newsPauseBtn.setAttribute('aria-pressed', 'false');
    slideNews.autoplay.start();
    newsPauseBtnIcon[0].style.display = "block";
    newsPauseBtnIcon[1].style.display = "none";
  }
})

citizenPauseBtn.addEventListener('click', function() {
  autoPlaystate = this.getAttribute('aria-pressed');
  if (autoPlaystate === 'false') {
    citizenPauseBtn.setAttribute('aria-pressed', 'true');
    slideCitizen.autoplay.stop();
    citizenPauseBtnIcon[0].style.display = "none";
    citizenPauseBtnIcon[1].style.display = "block";
  } else {
    citizenPauseBtn.setAttribute('aria-pressed', 'false');
    slideCitizen.autoplay.start();
    citizenPauseBtnIcon[0].style.display = "block";
    citizenPauseBtnIcon[1].style.display = "none";
  }
})

adPauseBtn.addEventListener('click', function() {
  autoPlaystate = this.getAttribute('aria-pressed');
  if (autoPlaystate === 'false') {
    adPauseBtn.setAttribute('aria-pressed', 'true');
    slideAd.autoplay.stop();
    adPauseBtnIcon[0].style.display = "none";
    adPauseBtnIcon[1].style.display = "block";
  } else {
    adPauseBtn.setAttribute('aria-pressed', 'false');
    slideAd.autoplay.start();
    adPauseBtnIcon[0].style.display = "block";
    adPauseBtnIcon[1].style.display = "none";
  }
  console.log('hi')
})

// site-area