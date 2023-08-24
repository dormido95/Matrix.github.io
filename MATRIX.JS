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

  setTimeout(function() {
    canvas.style.display = "none";
    canvas.remove();
    body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    document.getElementById("Linkmatrix").innerHTML = "Matrix se refiere a una simulación de realidad virtual creada por máquinas para controlar a la humanidad, mientras que en un sentido más amplio, el término puede utilizarse para referirse a cualquier sistema que simule la realidad";
    document.querySelectorAll("#navision").forEach(function(el) {
    el.style.background = 'none';
    });
  }, 900); 
}

function Click1() {

  setTimeout(function() {
    canvas.style.display = "none";
    canvas.remove();
    document.getElementById("Linkmatrix").innerHTML = "Se refiere a un espacio digital, un entorno virtual creado dentro de la simulación de la Matrix. En otras palabras, es un lugar ficticio dentro de la realidad simulada donde los personajes pueden interactuar y manipular elementos de su entorno utilizando sus mentes y habilidades.";
    const body = document.body;
    body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1612124974419-da8ee0e92b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    document.querySelectorAll("#navision").forEach(function(el) {
    el.style.background = 'none';
    });
  }, 650); 
}


function Click2() {

  setTimeout(function() {
    document.getElementById("Linkmatrix").innerHTML = " Las personas pueden cargar escenarios simulados para practicar y aprender con situaciones distintas o desafiantes que puedan encontrar en el mundo real de Matrix para solucionar.";
    const body = document.body;
    canvas.style.display = "none";
    canvas.remove();
    body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1600419388659-7efdcb4ac41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    document.querySelectorAll("#navision").forEach(function(el) {
    el.style.background = 'none';
    });
  }, 650); 
}

function Click3() {

  setTimeout(function() {
    canvas.style.display = "none";
    canvas.remove();
    const body = document.body;
    body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1621323863489-0b9cf05548b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    document.querySelectorAll("#navision").forEa
    document.getElementById("Linkmatrix").innerHTML = "Formulario";
    document.querySelectorAll("#navision").forEach(function(el) {
    el.style.background = 'none';
    });
  }, 650);
}

setTimeout(() => {
  button.classList.add('visible');
  button.innerHTML = 'Searching...';
}, 3000);

setTimeout(() => {
  button.innerHTML = 'Just go';
}, 5000);

setTimeout(function() {


  button.remove();
}, 10000);

setTimeout(function() {
  var elemento = document.getElementById("navision");
  navision.classList.add("visible");
}, 9900);

setInterval(matrix,50);

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    
    
    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Mensaje:", message);
  
    form.reset();
  });
});


const links = document.querySelectorAll('.fadeInAnimationClass');
const body = document.body;

links.forEach(link => {
  link.addEventListener('click', () => {
    body.style.opacity = 0;
    setTimeout(() => {
      body.style.opacity = 1;
    },1000); 
  });
});


