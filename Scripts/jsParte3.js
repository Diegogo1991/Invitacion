//IMPORTACION FUNCIONES GENERALES

import { funcGene } from "../Scripts/functions.js";

setTimeout(funcGene.musicAleatorie, 1);

//IMPORTACION FUNCIONES BUCLES

import { funcBucles } from "../Scripts/functions.js";

setTimeout(funcBucles.ponerEvi, 1);
setTimeout(funcBucles.fondoAleatorie, 500);

//CAMBIAR COLORES OPCIONES
function cambiarColores(query) {
   let maximo = 236;
   let boton1 = document.querySelector(`#${query} .boton1`);
   let boton2 = document.querySelector(`#${query} .boton2`);

   boton1.style.backgroundColor = `rgba(${Math.floor(Math.random() * maximo)}, ${Math.floor(Math.random() * maximo)}, ${Math.floor(Math.random() * maximo)}, 0.507)`;
   boton2.style.backgroundColor = `rgba(${Math.floor(Math.random() * maximo)}, ${Math.floor(Math.random() * maximo)}, ${Math.floor(Math.random() * maximo)}, 0.507)`;
}

let b1h1 = document.getElementById('b1h1');
b1h1.addEventListener('click', mostrarHero2);

let b2h1 = document.getElementById('b2h1');
b2h1.addEventListener('click', mostrarHero3);

let b1h2 = document.getElementById('b1h2');
b1h2.addEventListener('click', mostrarHero6);

let b2h2 = document.getElementById('b2h2');
b2h2.addEventListener('click', mostrarHero8);

let b1h3 = document.getElementById('b1h3');
b1h3.addEventListener('click', mostrarHero5);

let b2h3 = document.getElementById('b2h3');
b2h3.addEventListener('click', mostrarHero4);

let b1h4 = document.getElementById('b1h4');
b1h4.addEventListener('click', mostrarHero6);

let b2h4 = document.getElementById('b2h4');
b2h4.addEventListener('click', mostrarHero);

let b1h5 = document.getElementById('b1h5');
b1h5.addEventListener('click', mostrarHero6);

let b2h5 = document.getElementById('b2h5');
b2h5.addEventListener('click', mostrarHero7);

let b1h6 = document.getElementById('b1h6');
b1h6.addEventListener('click', mostrarHero7);

let b2h6 = document.getElementById('b2h6');
b2h6.addEventListener('click', mostrarHero2);

let b1h7 = document.getElementById('b1h7');
b1h7.addEventListener('click', mostrarHero9);

let b2h7 = document.getElementById('b2h7');
b2h7.addEventListener('click', mostrarHero6);

let b1h8 = document.getElementById('b1h8');
b1h8.addEventListener('click', mostrarHero9);

let b2h8 = document.getElementById('b2h8');
b2h8.addEventListener('click', mostrarHero6);

let b1h9 = document.getElementById('b1h9');
b1h9.addEventListener('click', ()=>{
   window.location.replace('../psique.html');
});

let b2h9 = document.getElementById('b2h9');
b2h9.addEventListener('click', ()=>{
   window.location.replace('../index.html');
});

//ADMIN DIVS
function ocultarHeros(hero) {
   document.getElementById(hero).style.display = 'none';
}

function mostrarHero() {
   cambiarColores('Hero');

   document.getElementById('Hero').style.display = 'flex';
   ocultarHeros('Hero2');
   ocultarHeros('Hero3');
   ocultarHeros('Hero4');
   ocultarHeros('Hero5');
   ocultarHeros('Hero6');
   ocultarHeros('Hero7');
   ocultarHeros('Hero8');

   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero2() {
   cambiarColores('Hero2');

   document.getElementById('Hero2').style.display = 'flex';
   ocultarHeros('Hero');
   ocultarHeros('Hero6');

   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero3() {
   cambiarColores('Hero3');

   document.getElementById('Hero3').style.display = 'flex';
   ocultarHeros('Hero');
   
   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero4() {
   cambiarColores('Hero4');

   document.getElementById('Hero4').style.display = 'flex';
   ocultarHeros('Hero3'); 
   
   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero5() {
   cambiarColores('Hero5');

   document.getElementById('Hero5').style.display = 'flex';
   ocultarHeros('Hero3'); 
   
   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero6() {
   cambiarColores('Hero6');

   document.getElementById('Hero6').style.display = 'flex';
   ocultarHeros('Hero2');
   //ocultarHeros('Hero3');
   ocultarHeros('Hero4');
   ocultarHeros('Hero5');
   ocultarHeros('Hero7');
   ocultarHeros('Hero8');

   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero7() {
   cambiarColores('Hero7');

   document.getElementById('Hero7').style.display = 'flex';
   ocultarHeros('Hero5');
   ocultarHeros('Hero6');
   
   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero8() {
   cambiarColores('Hero8');

   document.getElementById('Hero8').style.display = 'flex';
   ocultarHeros('Hero2');
   
   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function mostrarHero9() {
   cambiarColores('Hero9');

   document.getElementById('Hero9').style.display = 'flex';
   ocultarHeros('Hero8');
   ocultarHeros('Hero7'); 
   
   funcBucles.ponerEvi();
   funcBucles.fondoAleatorie();
}

function moverObjeto(objeto, velocidadX, velocidadY) {
   const limiteX = window.innerWidth - objeto.clientWidth;
   const limiteY = window.innerHeight - objeto.clientHeight;

   function mover() {
       let posX = parseInt(getComputedStyle(objeto).left);
       let posY = parseInt(getComputedStyle(objeto).top);

       let nuevaPosX = posX + velocidadX;
       let nuevaPosY = posY + velocidadY;

       // Verificar límites en el eje X
       if (nuevaPosX < 0 || nuevaPosX > limiteX) {
           velocidadX *= -1; // Cambiar dirección en el eje X
       }

       // Verificar límites en el eje Y
       if (nuevaPosY < 0 || nuevaPosY > limiteY) {
           velocidadY *= -1; // Cambiar dirección en el eje Y
       }

       objeto.style.left = nuevaPosX + 'px';
       objeto.style.top = nuevaPosY + 'px';
   }

   function cambiarDireccion() {
       velocidadX = Math.random() > 0.5 ? Math.abs(velocidadX) : -Math.abs(velocidadX); // Cambiar dirección en el eje X
       velocidadY = Math.random() > 0.5 ? Math.abs(velocidadY) : -Math.abs(velocidadY); // Cambiar dirección en el eje Y
   }

   // Mover el objeto cada 30 milisegundos (ajusta según tus preferencias)
   setInterval(mover, 15);

   // Cambiar dirección aleatoriamente cada 3000 milisegundos (3 segundos)
   setInterval(cambiarDireccion, 2500);
}

// Aplicar la lógica a diferentes objetos
const imagenMovil1 = document.getElementById('imagenMovil');
moverObjeto(imagenMovil1, 2, 2);

const imagenMovil2 = document.getElementById('ojo-pizarra');
moverObjeto(imagenMovil2, 2, 3);

imagenMovil2.addEventListener('click', funcGene.abrirLinkAleatorio);

const ojito = new Typed('.ojo-pizarra', {
   strings: ['Cada', 'vez', 'habrán', 'más', 'mensajes', 'este', 'es uno', 'de los', 'más', 'importantes', 'porque', 'al final', 'aparecerá', 'un aviso', 'indicando', 'quien', 'gana', 'solo', 'ganará', 'una', 'persona', 'apenas', 'alguien', 'gane', 'la página', 'avisará' ],
   typeSpeed: 50,
   cursorChar: '|',
   loop: true
});