'use strict';

// let bootsrap = require('./bootstrap/js/carousel')
// import $ from "jquery";
import bootstrap  from 'bootstrap';

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
      if(pos > .5){
        console.log(pos)

      } else if(pos > .8){
        // posy = 11
        // posx = -posy\
        console.log(pos)
      }
      else if (pos >= 1){
       console.log(pos)
      }

      else if (pos < 1){
        console.log(pos)
      }

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
