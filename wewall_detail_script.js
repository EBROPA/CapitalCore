$(document).ready(function () {
  if ($(window).width() > 768) {
    var force = function () {
      mousewheel: {
        forceToAxis: true
      }
    }
  }

  const sliderScheme = $('.scheme__slider')
  sliderScheme.each(function () {
    const sliderMain = this.querySelector('.scheme__slider-main')
    const sliderTrumbs = this.querySelector('.scheme__slider-trumbs .swiper')
    const schemeSliderTrumbs = new Swiper(sliderTrumbs, {
      slidesPerView: 6,
      spaceBetween: 16,
      freeMode: true,
      force,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 16,
          freeMode: false,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
          freeMode: true,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 16,
          freeMode: true,
        },
      },
    })
    new Swiper(sliderMain, {
      slidesPerView: 1,
      spaceBetween: 24,
      freeMode: true,
      navigation: {
        nextEl: this.querySelector('.scheme__slider-trumbs .swiper-btn-next'),
        prevEl: this.querySelector('.scheme__slider-trumbs .swiper-btn-prev'),
      },
      force,
      thumbs: {
        swiper: schemeSliderTrumbs,
      },
      breakpoints: {
        0: {
          freeMode: false,
        },
        768: {
          freeMode: true,
        },
        1280: {
          freeMode: true,
        },
      },
    })
  })

  $(document).on('click', '.scheme__tab', function () {
    $('.scheme__tab').removeClass('active')
    $(this).addClass('active')
    $('.scheme__grid').hide()
    $('*[data-scheme-item="' + $(this).data('scheme') + '"]').show()
  })

  $(document).on('click', '.pr-home__map-link', function (e) {
    e.preventDefault()

    var scrollTop = $('.pr-expert__location').offset().top - 20
    $(document).scrollTop(scrollTop)

    return false
  })

  setTimeout(function () {
    $('.pr-form__persona').fadeIn(500)
  }, 15000)

  $('.pr-form__persona-close').on('click', function () {
    $('.pr-form__persona').addClass('hide')
  })

  $('.pr-form__mob-popup-close').on('click', function () {
    var key = 'mob-popup-close'
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, '1')
      $('.pr-form__mob-popup').hide()
    }
  })

  if (localStorage.getItem('mob-popup-close') === null) {
    $('.pr-form__mob-popup').show()
  }

  function mobPrForm() {
    $('.pr-form__persona-photo').on('click', function () {
      const parent = $(this).parent('.pr-form__persona')
      if ($(window).width() > 767) {
        if ($(parent).hasClass('hide')) {
          $(parent).removeClass('hide')
        }
      } else {
        $(parent).toggleClass('overlay')
        $(this).toggleClass('not-animate')
        var key = 'mob-popup-close'
        if (localStorage.getItem(key) === null) {
          localStorage.setItem(key, '1')
          $('.pr-form__mob-popup').hide()
        }
      }
    })
  }

  mobPrForm()
  $(document).on('resize', function () {
    mobPrForm()
  })
})
