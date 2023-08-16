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
"Matrix se refiere a una simulación de realidad virtual creada por máquinas para controlar a la humanidad, mientras que en un sentido más amplio, el término puede utilizarse para referirse a cualquier sistema que simule la realidad";
  
function Click(setTimeout) {
  // Cambiar el contenido del elemento con id "Linkmatrix"
  document.getElementById("Linkmatrix").innerHTML = "Matrix se refiere a una simulación de realidad virtual creada por máquinas para controlar a la humanidad, mientras que en un sentido más amplio, el término puede utilizarse para referirse a cualquier sistema que simule la realidad";
  
  // Agregar la clase para la animación fadeOut
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  setTimeout(function() {
    document.getElementById("Linkmatrix").innerHTML = "Matrix se refiere a una simulación de realidad virtual creada por máquinas para controlar a la humanidad, mientras que en un sentido más amplio, el término puede utilizarse para referirse a cualquier sistema que simule la realidad";
    
    // Quitar la clase fadeOut para prepararse para la animación fadeIn
    document.getElementById("Linkmatrix").classList.remove("fadeOutAnimationClass");
    
    // Agregar la clase fadeIn para mostrar el contenido con una animación
    document.getElementById("Linkmatrix").classList.add("fadeInAnimationClass");
  }, 900); // Ajusta el valor del retraso según sea necesario
}

function Click1() {
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  document.getElementById("Linkmatrix").innerHTML = "Se refiere a un espacio digital, un entorno virtual creado dentro de la simulación de la Matrix. En otras palabras, es un lugar ficticio dentro de la realidad simulada donde los personajes pueden interactuar y manipular elementos de su entorno utilizando sus mentes y habilidades.";
  
  // Agregar la clase para la animación fadeOut después de un pequeño retraso
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Cambiar el contenido del elemento con id "Linkmatrix" después de un retraso
  setTimeout(function() {
    document.getElementById("Linkmatrix").innerHTML = "Se refiere a un espacio digital, un entorno virtual creado dentro de la simulación de la Matrix. En otras palabras, es un lugar ficticio dentro de la realidad simulada donde los personajes pueden interactuar y manipular elementos de su entorno utilizando sus mentes y habilidades.";
    
    // Quitar la clase fadeOut para prepararse para la animación fadeIn
    document.getElementById("Linkmatrix").classList.remove("fadeOutAnimationClass");
    
    // Agregar la clase fadeIn para mostrar el contenido con una animación
    document.getElementById("Linkmatrix").classList.add("fadeInAnimationClass");
  }, 900); // Ajusta el valor del retraso según sea necesario
}


function Click2() {
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  document.getElementById("Linkmatrix").innerHTML = "sadasds";
  
  // Agregar la clase para la animación fadeOut después de un pequeño retraso
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Cambiar el contenido del elemento con id "Linkmatrix" después de un retraso
  setTimeout(function() {
    document.getElementById("Linkmatrix").innerHTML = "sadasds";
    
    // Quitar la clase fadeOut para prepararse para la animación fadeIn
    document.getElementById("Linkmatrix").classList.remove("fadeOutAnimationClass");
    
    // Agregar la clase fadeIn para mostrar el contenido con una animación
    document.getElementById("Linkmatrix").classList.add("fadeInAnimationClass");
  }, 900); // Ajusta el valor del retraso según sea necesario
}

function Click3() {
  // Quitar la clase fadeIn si está presente
  document.getElementById("Linkmatrix").classList.remove("fadeInAnimationClass");
  document.getElementById("Linkmatrix").innerHTML = "Descripcion";
  
  // Agregar la clase para la animación fadeOut después de un pequeño retraso
  document.getElementById("Linkmatrix").classList.add("fadeOutAnimationClass");
  
  // Cambiar el contenido del elemento con id "Linkmatrix" después de un retraso
  setTimeout(function() {
    document.getElementById("Linkmatrix").innerHTML = "Descripcion";
    
    // Quitar la clase fadeOut para prepararse para la animación fadeIn
    document.getElementById("Linkmatrix").classList.remove("fadeOutAnimationClass");
    
    // Agregar la clase fadeIn para mostrar el contenido con una animación
    document.getElementById("Linkmatrix").classList.add("fadeInAnimationClass");
  }, 900); // Ajusta el valor del retraso según sea necesario
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
