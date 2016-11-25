'use strict';
import index from './templates/index.jade';

import './styles/main';
require('./styles/main');
if (typeof document !== 'undefined') {
  document.body.innerHTML = index();
}

let randomNumber = Math.random();
let div = document.createElement('div');
let img = document.createElement('img');
div.className = "alert alert-success";
// alert(1)
div.innerHTML = `<strong>${randomNumber} Ура!</strong></br><h2>Вы Достигли успеха.</h2>`;

document.body.appendChild(div)