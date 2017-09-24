/*********************************************************************************************/
/* NOTE:                                                                                     */
/* Minify this file after editing, as all pages will be using minified version of this file  */
/* for better performance                                                                    */
/* References :                                                                              */
/* https://github.com/VincentGarreau/particles.js/                                           */
/* http://www.littlewebthings.com/projects/countdown/                                        */
/* https://github.com/michalsnik/aos                                                         */
/*********************************************************************************************/

/* VARIABLES */
var _countdown = true;
// 2018[year] - 12[month] - 01[day] - countdown date
var _countdown_date = [2017, 09, 30];
// true, false - enable / disable utc time
var _countdown_utc = true;



var _hmParticles = {};
$(function () {
  $('.particles-holder').each(function () {
    var id = $(this).attr('id');
    if (id.indexOf('Blurred') > -1) hm_loadParticle(id, 50, 5, 2);
    else hm_loadParticle(id, 50);
  });
  hm_countdown();
  hm_prepareDialog();
  hm_initSmoothScroll();
  if (typeof AOS != 'undefined') AOS.init();
});

function hm_loadParticle(id, num, size, line) {
  if (!num) num = 100;
  if (!size) size = 12;
  if (!line) line = 4.5;
  _hmParticles[id] = particlesJS(id, {
    "particles": {
      "number": {
        "value": num,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": size,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 176.3753266952075,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": line
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 43.956043956043956,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 39.96003996003996,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

function hm_countdown() {
  var $countdown = $('#countdown_dashboard');

  if (_countdown) {
    if ($countdown.length) {
      $('body').addClass('is-countdown-on');

      $countdown.countDown({
        targetDate: {
          'day': _countdown_date[2],
          'month': _countdown_date[1],
          'year': _countdown_date[0],
          'hour': 0,
          'min': 0,
          'sec': 0,
          'utc': _countdown_utc // time set as UTC
        },
        omitWeeks: true // 3-digit days
      });
    }
  } else {
    $('body').addClass('is-countdown-off');
  }
}

function hm_prepareDialog() {
  var dlg = $('.hm-dialog-layer');
  if (dlg.length <= 0) {
    dlg = $('<div class="hm-dialog-layer"></div><div class="anim hm-dialog hm-block-item hm-big-box dialog-ok"><div class="hm-dialog-bg"></div><div class="hm-dialog-icon"></div><div class="hm-dialog-body"></div><div class="hm-dialog-footer"><div class="text-left"><a href="#" class="btn hm-btn-green pull-right" onclick="hm_closeDialog();return false;">OK</a></div></div></div>');
    $('body').append(dlg);
  }
}

function hm_openDialog(msg,type) {
  var dlg = $('.hm-dialog-layer');
  if (!type) type = 'ok';
  if (dlg.length <= 0) {
    dlg = $('<div class="hm-dialog-layer"></div><div class="anim hm-dialog hm-block-item hm-big-box dialog-'+type+'"><div class="hm-dialog-bg"></div><div class="hm-dialog-icon"></div><div class="hm-dialog-body">' + msg + '</div><div class="hm-dialog-footer"><div class="text-left"><a href="#" class="btn hm-btn-green pull-right" onclick="hm_closeDialog();return false;">OK</a></div></div></div>');
    $('body').append(dlg);
  } else {
    $('.hm-dialog').attr('class','anim hm-dialog hm-block-item hm-big-box dialog-'+type);
    $('.hm-dialog .hm-dialog-body').html(msg);
  }
  $('body').addClass('with-dialog');
}

function hm_closeDialog() {
  $('.hm-dialog .hm-dialog-body').html('');
  $('body').removeClass('with-dialog');
}

function hm_initSmoothScroll(){
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });  
  var ypos = 100;
  $(window).on('scroll',function(){
    if ($(this).scrollTop()>ypos) {
      $('body').addClass('with-toplink');
    } else $('body').removeClass('with-toplink');
  });
  if ($(this).scrollTop()>ypos) $('body').addClass('with-toplink');
}