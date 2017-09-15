/*********************************************************************************************/
/* NOTE:                                                                                     */
/* Minify this file after editing, as all pages will be using minified version of this file  */
/* for better performance                                                                    */
/*********************************************************************************************/

/* VARIABLES */
var _countdown =  true;
// 2018[year] - 12[month] - 01[day] - countdown date
var _countdown_date = [2017, 09, 20];
// true, false - enable / disable utc time
var _countdown_utc = true;



var _hmParticles = {};
$(function(){
  $('.particles-holder').each(function(){
    var id  = $(this).attr('id');
    if (id.indexOf('Blurred')>-1) hm_loadParticle(id,50,5,2);
    else hm_loadParticle(id,50);
  });
  hm_countdown();
});
function hm_loadParticle(id,num,size,line){
    if (!num) num = 100;
    if (!size) size = 12;
    if (!line) line = 4.5;
    _hmParticles[id] = particlesJS(id,
    {
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
          'day':      _countdown_date[2],
          'month':    _countdown_date[1],
          'year':     _countdown_date[0],
          'hour':     0,
          'min':      0,
          'sec':      0,
          'utc':      _countdown_utc // time set as UTC
        },
        omitWeeks: true // 3-digit days
      });
    }
  } else {
    $('body').addClass('is-countdown-off');
  }
}