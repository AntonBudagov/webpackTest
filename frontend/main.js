'use strict';

// let bootsrap = require('./bootstrap/js/carousel')
// import $ from "jquery";
import bootstrap  from 'bootstrap';
import anime from 'animejs';

import './styles/main.styl';
// require('./styles/main');
let randomNumber = Math.random();
let div = document.createElement('div');
let img = document.createElement('img');
div.className = "alert alert-success";
// alert(1)
div.innerHTML = `<strong>${randomNumber} Ура!</strong></br><h2>Вы Достигли успеха.</h2>`;

document.body.appendChild(div)

//let index = require("html!./index.html");
//let indexjade = require('jade!./index2.jade');

//let w = require("jade!./index2.jade");
//var html = require('./index3.pug');

// var link = require("file!pug!./file.pug");
//require("./loader!./dir/file.txt");
// require("jade!./index.jade");
// import template from './test.jade';

// innerHTML = template();

// let template = require("./template.pug");
// const compiledFunction = pug.compileFile('template.pug');
// console.log(compiledFunction({
//   name: 'Timothy'
// }));
// let html = template('./frontend/index.html');
console.log(randomNumber)
$('.carousel').carousel();
import indexjade from './templates/index.jade';
//require('./css/index.css');
if (typeof document !== 'undefined') {
  document.body.innerHTML = indexjade();
}


// -----------------------------------------------Canvas------------------------

let canvas = document.getElementById("snow"),
    ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(200, 250, 0)"; // sets the color to fill in the rectangle with
ctx.fillRect(10, 10, 55, 50);   // draws the rectangle at

// size canvas
let W = canvas.width =  window.innerWidth,
    H = canvas.height =  window.innerHeight;

canvas.style.width = W;
canvas.style.height = H;

// background
let bgColor1 = 'rgba(2, 51, 47, .8)',
    bgColor2 = 'rgba(52, 9, 80, 1)';

// count snow dot
let snowCount = 500;
let snows = [];
for(let i = 0; i < snowCount; i++){
  snows.push(new snow());
}
// function create snow
function snow (){
  this.x =  Math.random() * W;
  this.y =  Math.random() * H;

  // console.log(this.x);
  // console.log(this.y);
  // Random Radius
  this.r = Math.floor(Math.random() * (5 - 1)) + 1;
  // Random opacity color
  // this.color = "red"
  // this.boxShadow = "box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);"
  this.color = `rgba(${Math.floor(Math.random() * (255 - 1)) + 1}, ${Math.floor(Math.random() * (255 - 1)) + 1}, ${Math.floor(Math.random() * (255 - 1)) + 1}, ${(Math.random()*(1 - .5) + .5).toFixed(1)})`;

  // Random Speed
  this.vx = Math.floor(Math.random() * (10 - 1)) + 1;
  this.vy = -this.vx;
}

// Function to draw the background with the dots
function draw (){
  let grd = ctx.createLinearGradient(0, 0, W, H);
  grd.addColorStop(0, bgColor1);
  grd.addColorStop(1, bgColor2);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, H);
  // fill dots
  for(let j = 0; j < snows.length; j++){
    let s = snows[j];
    // draw snow
    ctx.beginPath();
    // ctx.arc(d.x, d.y, d.r, Math.PI*2, false);
    ctx.arc(s.x, s.y, s.r, Math.PI*2, false);
    ctx.fillStyle = s.color;
    ctx.shadowColor = 'rgba(0,0,0,0.14)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = -0;
    ctx.shadowOffsetY = -10;
    ctx.fill();
    console.log(s)
    // speed snow
    s.x -= s.vx;
    s.y -= s.vy;
    // when the snow out of the canvase
    if(s.x < - 20) s.x = W + 20;


    if(s.y > H + 50) s.y = 0;

  }

};
// setInterval(draw, .3)
// draw();
// treeChristmas
$('.treeChristmas').mousemove(function(e){
  // console.log(`this is X ${e.offsetX}`)
  // console.log(`this is Y ${e.offsetY}`)

  var posx = 0, posy = 0, posxR = 0;
  var pos = e.offsetX/e.offsetY
  // console.log(e.pageX)
  // console.log(e.offsetX, e.offsetY)
    if (!e) var e = window.event;
    if (e.offsetX || e.offsetY)   {
      if(pos > 1){
        posy = pos
        posx = pos

      }
      // else if(pos > .8){
      //   // posy = 11
      //   // posx = -posy\
      //   console.log(pos)
      // }
      // else if (pos >= 1){
      //  console.log(pos)
      // }

      // else if (pos < 1){
      //   console.log(pos)
      // }

    }


    $(this).children()
      .css('transform', `translateX(0px) translateY(0px) translateZ(0px) rotateX(${posx}deg) rotateY(${posy}deg) rotateZ(0deg)`);
    // treeChristmas
})
 $('.treeChristmas').mouseleave(function(e){
      $(this).children()
      .css('transform', `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`);
  });



function downDot(){
  // let earth = document.getElementById("earth"),
  var speed = 2000;
  var earth = $('#earth');
  // size window
  W = canvas.width =  window.innerWidth,
  H = canvas.height =  window.innerHeight;
  console.log(W)

  earth.each(function() {
   var elements = $(this).children();
      console.log(elements)
      elements.each(function() {
        var elementOffset = $(this).offset();
        var offset = elementOffset.left + elementOffset.top;
        var delay =  Math.random()//parseFloat(offset/speed).toFixed(2);
        var duration = Math.floor(Math.random() * (20 - 1)) + 1;
        var opacity = Math.random() * (1.0 - 0.1) + 0.1
        var zIndex = Math.floor(Math.random() * (1000 - 1)) + 1;
        var diameter = Math.floor(Math.random() * (100 - 1)) + 1;
        console.log(opacity)
        $(this)
            .css("animation-delay", delay+'s')
            .css("animation-duration", duration+'s')
            .css("opacity", opacity)
            .css("z-index", zIndex)
            .css("width", diameter)
            .css("height", diameter)


      });

  });
}
// downDot()
function changeColor(){

}
// setInterval(downDot, 10000)

let earth = document.getElementById("earth")
let earth2 = document.getElementById("earth2")
let earth3 = document.getElementById("earth3")
let earth4 = document.getElementById("earth4")
let earth5 = document.getElementById("earth5")
// setTimeout(function(){earth.classList.add('active')}, 1000)
// setInterval(function(){earth.classList.toggle('active')}, 1000)
// setInterval(function(){earth2.classList.toggle('active')}, 2000)
// setInterval(function(){earth3.classList.toggle('active')}, 3000)
// setInterval(function(){earth4.classList.toggle('active')}, 2000)
// setInterval(function(){earth5.classList.toggle('active')}, 1000)
// setInterval(earth.classList.remove('active'), 20000)
// setInterval(earth.className = "", 3)
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 AnimeJS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
let myAnimation = anime({
  targets: document.querySelector('.blue'),
  translateX: '50rem',
  rotate: 180,
  borderRadius: 7*16,
  duration: 5000,
  easing: 'easeOutElastic',
  elasticity: 400,
  loop: false,
  direction: 'alternate'
})

let myAnimation2 = anime({
  targets: document.querySelector('.green'),
  translateX: '40rem',
  rotate: {
    value: 180,
    duration: 1400,
    easing: 'easeInOutQuad'
  },
  scale: {
    value: 1.2,
    delay: 150,
    duration: 850,
    easing: 'easeInOutExpo'
  },
  // borderRadius: 8,
  // duration: 2200,
  direction: 'alternate',
  easing: 'easeOutElastic',
  elasticity: 400,
  loop: true
});

 var  social = anime({
    targets: '.social div',
    // translateY: function(el, index) {
    //   return anime.random(50, 100); // Will set a random value from 50 to 100 to each divs
    // },
    // scale: [.5, .9],
    translateX: function(el, index){
      return index * 6 + 'rem';
    },
    delay: function(el, index){
      return index * 80;
    },
    // direction: "alternate",
    duration: 2000,
    loop: false,
    autoplay: false
  })
 var  social2 = anime({
    targets: '.social div',
    translateY: 0,
    scale: [.9, .75],
    translateX: 0,
    delay: function(el, index){
      return index * 80;
    },
    // direction: "alternate",
    duration: 2000,
    loop: false,
    autoplay: false
  })

function show(){
  social = anime({
    targets: '.social div',
    translateY: {
    value: 60,
    duration: 1500,
    easing: 'easeInOutQuad'
    },
    // translateY: function(el, index) {
    //   return anime.random(50, 200); // Will set a random value from 50 to 100 to each divs
    // },
    // scale: [.5, .9],
    translateX: function(el, index){
      return index * 6 + 'rem';
    },
    delay: function(el, index){
      return index * 1000;
    },
    // direction: "alternate",
    duration: 2000,
    loop: false,
    autoplay: false
  }).play();
}

function hide(){

  social = anime({
    targets: '.social div',
    translateY: "-60px",
    // scale: [.75, .9],
    translateX: function(el, index){
      return index * 0 + 'rem';
    },
    delay: function(el, index){
      return index * 80;
    },
    // direction: "alternate",
    duration: 2000,
    loop: false,
    autoplay: false}
    ).play()
}
var el = document.getElementById("outside");
// el.addEventListener("click", show(), false);
$('#outside').on('click', function(){
  show();
});

$('#hide').on('click', function(){
  hide();
});

let smile = anime({
  targets: '#smile path',
  strokeDashoffset: function(el){
    let pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return [-pathLength, 0]
  },
  stroke: {
    value: function(el, i) {
      return 'rgb(200,'+ i * 8 +',150)';
    },
    easing: 'linear',
    duration: 2000,
    direction: "alternate",
  },
}).play()




/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 AnimeJS CARD
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

  'use strict';

  // Helper vars and functions.
  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // from http://www.quirksmode.org/js/events_properties.html#position
  function getMousePos(e) {
    var posx = 0, posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY)   {
      posx = e.pageX;
      posy = e.pageY;
    }
    else if (e.clientX || e.clientY)  {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x : posx, y : posy }
  }

  /**
   * TiltFx obj.
   */
  function TiltFx(el, options) {
    this.DOM = {};
    this.DOM.el = el;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  TiltFx.prototype.options = {
    movement: {
      imgWrapper : {
        translation : {x: 0, y: 0, z: 0},
        rotation : {x: -5, y: 5, z: 0},
        reverseAnimation : {
          duration : 1200,
          easing : 'easeOutElastic',
          elasticity : 600
        }
      },
      lines : {
        translation : {x: 10, y: 10, z: [0,10]},
        reverseAnimation : {
          duration : 1000,
          easing : 'easeOutExpo',
          elasticity : 600
        }
      },
      caption : {
        translation : {x: 20, y: 20, z: 0},
        rotation : {x: 0, y: 0, z: 0},
        reverseAnimation : {
          duration : 1500,
          easing : 'easeOutElastic',
          elasticity : 600
        }
      },
      /*
      overlay : {
        translation : {x: 10, y: 10, z: [0,50]},
        reverseAnimation : {
          duration : 500,
          easing : 'easeOutExpo'
        }
      },
      */
      shine : {
        translation : {x: 50, y: 50, z: 0},
        reverseAnimation : {
          duration : 1200,
          easing : 'easeOutElastic',
          elasticity: 600
        }
      }
    }
  };

  /**
   * Init.
   */
  TiltFx.prototype._init = function() {
    this.DOM.animatable = {};
    this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
    this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
    this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
    this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
    this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
    this._initEvents();
  };

  /**
   * Init/Bind events.
   */
  TiltFx.prototype._initEvents = function() {
    var self = this;

    this.mouseenterFn = function() {
      for(var key in self.DOM.animatable) {
        anime.remove(self.DOM.animatable[key]);
      }
    };

    this.mousemoveFn = function(ev) {
      requestAnimationFrame(function() { self._layout(ev); });
    };

    this.mouseleaveFn = function(ev) {
      requestAnimationFrame(function() {
        for(var key in self.DOM.animatable) {
          if( self.options.movement[key] == undefined ) {continue;}
          anime({
            targets: self.DOM.animatable[key],
            duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0 : 1,
            easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
            elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity || null : null,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
          });
        }
      });
    };

    this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
  };

  TiltFx.prototype._layout = function(ev) {
    // Mouse position relative to the document.
    var mousepos = getMousePos(ev),
      // Document scrolls.
      docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop},
      bounds = this.DOM.el.getBoundingClientRect(),
      // Mouse position relative to the main element (this.DOM.el).
      relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };

    // Movement settings for the animatable elements.
    for(var key in this.DOM.animatable) {
      if( this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined ) {
        continue;
      }
      var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
        r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
        setRange = function (obj) {
          for(var k in obj) {
            if( obj[k] == undefined ) {
              obj[k] = [0,0];
            }
            else if( typeof obj[k] === 'number' ) {
              obj[k] = [-1*obj[k],obj[k]];
            }
          }
        };

      setRange(t);
      setRange(r);

      var transforms = {
        translation : {
          x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
          y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
          z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
        },
        rotation : {
          x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
          y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
          z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
        }
      };

      this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
    }
  };

  window.TiltFx = TiltFx;

})(window);

// -----------------------
 (function() {
      var tiltSettings = [
      {},
      {
        movement: {
          imgWrapper : {
            translation : {x: 10, y: 10, z: 30},
            rotation : {x: 0, y: -10, z: 0},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          },
          lines : {
            translation : {x: 10, y: 10, z: [0,70]},
            rotation : {x: 0, y: 0, z: -2},
            reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
          },
          caption : {
            rotation : {x: 0, y: 0, z: 2},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          },
          overlay : {
            translation : {x: 10, y: -10, z: 0},
            rotation : {x: 0, y: 0, z: 2},
            reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
          },
          shine : {
            translation : {x: 100, y: 100, z: 0},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          }
        }
      },
      {
        movement: {
          imgWrapper : {
            rotation : {x: -5, y: 10, z: 0},
            reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
          },
          caption : {
            translation : {x: 30, y: 30, z: [0,40]},
            rotation : {x: [0,15], y: 0, z: 0},
            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
          },
          overlay : {
            translation : {x: 10, y: 10, z: [0,20]},
            reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
          },
          shine : {
            translation : {x: 100, y: 100, z: 0},
            reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
          }
        }
      },
      {
        movement: {
          imgWrapper : {
            rotation : {x: -5, y: 10, z: 0},
            reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
          },
          caption : {
            translation : {x: 20, y: 20, z: 0},
            reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
          },
          overlay : {
            translation : {x: 5, y: -5, z: 0},
            rotation : {x: 0, y: 0, z: 6},
            reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
          },
          shine : {
            translation : {x: 50, y: 50, z: 0},
            reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
          }
        }
      },
      {
        movement: {
          imgWrapper : {
            translation : {x: 0, y: -8, z: 0},
            rotation : {x: 3, y: 3, z: 0},
            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
          },
          lines : {
            translation : {x: 15, y: 15, z: [0,15]},
            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
          },
          overlay : {
            translation : {x: 0, y: 8, z: 0},
            reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
          },
          caption : {
            translation : {x: 10, y: -15, z: 0},
            reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
          },
          shine : {
            translation : {x: 50, y: 50, z: 0},
            reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
          }
        }
      },
      {
        movement: {
          lines : {
            translation : {x: -5, y: 5, z: 0},
            reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
          },
          caption : {
            translation : {x: 15, y: 15, z: 0},
            rotation : {x: 0, y: 0, z: 3},
            reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
          },
          overlay : {
            translation : {x: 15, y: -15, z: 0},
            reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
          },
          shine : {
            translation : {x: 50, y: 50, z: 0},
            reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
          }
        }
      },
      {
        movement: {
          imgWrapper : {
            translation : {x: 5, y: 5, z: 0},
            reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
          },
          caption : {
            translation : {x: 10, y: 10, z: [0,50]},
            reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
          },
          shine : {
            translation : {x: 50, y: 50, z: 0},
            reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
          }
        }
      },
      {
        movement: {
          lines : {
            translation : {x: 40, y: 40, z: 0},
            reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
          },
          caption : {
            translation : {x: 20, y: 20, z: 0},
            rotation : {x: 0, y: 0, z: -5},
            reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
          },
          overlay : {
            translation : {x: -30, y: -30, z: 0},
            rotation : {x: 0, y: 0, z: 3},
            reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
          },
          shine : {
            translation : {x: 100, y: 100, z: 0},
            reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
          }
        }
      }];

      function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
          idx = pos%2 === 0 ? idx+1 : idx;
          new TiltFx(el, tiltSettings[idx-1]);
        });
      }

      // Preload all images.
      // imagesLoaded(document.querySelector('main'), function() {
      //   document.body.classList.remove('loading');

      // });
init();
      // REMOVE THIS!
      // For Demo purposes only. Prevent the click event.
      [].slice.call(document.querySelectorAll('a[href="#"]')).forEach(function(el) {
        el.addEventListener('click', function(ev) { ev.preventDefault(); });
      });

      var pater = document.querySelector('.pater'),
        paterSVG = pater.querySelector('.pater__svg'),
        pathEl = paterSVG.querySelector('path'),
        paths = {default: pathEl.getAttribute('d'), active: paterSVG.getAttribute('data-path-hover')};

      // pater.addEventListener('mouseenter', function() {
      //   anime.remove(pathEl);
      //   anime({
      //     targets: pathEl,
      //     d: paths.active,
      //     duration: 400,
      //     easing: 'easeOutQuad'
      //   });
      // });

      pater.addEventListener('mouseleave', function() {
        anime.remove(pathEl);
        anime({
          targets: pathEl,
          d: paths.default,
          duration: 400,
          easing: 'easeOutExpo'
        });
      });
    })();