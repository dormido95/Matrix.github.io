const button = document.getElementById('greenButton');
const canvas = document.getElementById("lienzo"); 
const ctx = canvas.getContext("2d");

canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;

const w = canvas.width;
const h = canvas.height;

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
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

    // Vuelve a llamar a la función matrix después de un tiempo determinado (en este caso, 100 milisegundos).
    const currentTime = new Date().getTime();
    if (currentTime - startTime >= 25700000) { // Detener la animación después de 25700 segundos (25700000 milisegundos)
        clearInterval(interval);
    }
}



// Función que se ejecutará al hacer clic en el botón "Matrix"
function startMatrixAnimation() {
  // Limpia el canvas antes de volver a iniciar la animación
  ctx.clearRect(0, 0, w, h);
  // Vuelve a llamar a la función matrix a intervalos de 50 milisegundos
  interval = setInterval(matrix, 80);
}

// Agrega un evento click al botón "matrixLink"
const matrixLinkButton = document.getElementById("matrixLink");
matrixLinkButton.addEventListener("click", startMatrixAnimation);


function Click() {

document.getElementById("Linkmatrix").innerHTML = "Matrix se refiere a una simulación de realidad virtual creada por máquinas para controlar a la humanidad, mientras que en un sentido más amplio, el término puede utilizarse para referirse a cualquier sistema que simule la realidad";

}


setTimeout(() => {
  button.classList.add('visible');
  button.innerHTML = 'Searching...';
}, 3000);

setTimeout(() => {
  button.innerHTML = 'Just go';
}, 7000);

setTimeout(function() {
  

  button.remove();
}, 25700);

setTimeout(function() {
  var elemento = document.getElementById("navision");
  navision.classList.add("visible");
}, 25700);



setInterval(matrix,50);
