const button = document.getElementById('greenButton');
const canvas = document.getElementById("lienzo"); 
const ctx = canvas.getContext("2d");

canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;

const w = canvas.width;
const h = canvas.height;

ctx.fillStyle = "#000";
ctx.fillRect(0,0,w,h);

const cols = Math.floor(w/20) + 1;
const posicion_y = Array(cols).fill(0);

function matrix() {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#0f0";
    ctx.font = "15pt 'Courier New', monospace";

    posicion_y.forEach((y, ind) => {
        const text = Math.floor(Math.random() * 9) + 1;
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
            posicion_y[ind] = 0;
        } else {
            posicion_y[ind] = y + 20;
        }
    });
}


function Click() {
  // Cambiar el contenido del elemento con id "Linkmatrix"
  document.getElementById("Linkmatrix").innerHTML = "Matrix se refiere a una simulación de realidad virtual creada por máquinas para controlar a la humanidad, mientras que en un sentido más amplio, el término puede utilizarse para referirse a cualquier sistema que simule la realidad";
  
  // Agregar la clase para la animación fadeOut
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
}

function Click1() {
  // Saca la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  
  // Agregar la clase para la animación fadeOut después de un pequeño retraso
  setTimeout(function() {
    document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  }, 1); // Cambia el valor del retraso si es necesario
  
  // Cambia el contenido del elemento con id "Linkmatrix"
  document.getElementById("Linkmatrix").innerHTML = "Descripcion";
}

function Click2() {
  document.getElementById("Linkmatrix").innerHTML = "VIDEO*";
  // Agregar la clase para la animación fadeOut
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  }

function Click3() {
  document.getElementById("Linkmatrix").innerHTML = "login";
  // Agregar la clase para la animación fadeOut
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  }



setTimeout(() => {
  button.classList.add('visible');
  button.innerHTML = 'Searching...';
}, 3000);

setTimeout(() => {
  button.innerHTML = 'Just go';
}, 5000);

setTimeout(function() {
  canvas.style.display = "none";
  canvas.remove();

  button.remove();
}, 10000);

setTimeout(function() {
  var elemento = document.getElementById("navision");
  navision.classList.add("visible");
}, 9900);



setInterval(matrix,50);
