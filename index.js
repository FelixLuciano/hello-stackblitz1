"use strict";

import './style.css';

const app = document.getElementById('app');


const helloWorld = document.createElement('div');

helloWorld.classList.add('helloWorld-container')
helloWorld.innerText = "Hello StackBlitz!";


app.appendChild(helloWorld);