const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Centro y radio 

let h = 200; //Es el centro en x
let k = 200; //El centro en y
let r = 100; // radio

function punto(x, y) {
  ctx.fillRect(x, y, 2, 2);
}
//FUNCIÓN PRINCIPAL

function dibujar() {

  let x = 0;
  let y = r;

// Se recorre solo 1/8 de la circunferencia

  while (x <= y) {

    // simetría de 8 puntos
    punto(h + x, k + y);
    punto(h + y, k + x);

    punto(h - x, k + y);
    punto(h - y, k + x);

    punto(h - x, k - y);
    punto(h - y, k - x);

    punto(h + x, k - y);
    punto(h + y, k - x);

    //Avanza en x
    x++;

    // ecuación de la circunferencia
    //(x - h)^2 + (y - k)^2 = r^2
    // De la ecuación se simplifica y queda y=raiz cuadrada de (r*r - x*x))
    y = Math.round(Math.sqrt(r*r - x*x));
  }
}

dibujar();

//permite al usuario modificar x,y y r
//limpia el canvas y vuelve a dibujar la circunferencia
function actualizar() {

  h = parseInt(document.getElementById("inputH").value);
  k = parseInt(document.getElementById("inputK").value);
  r = parseInt(document.getElementById("inputR").value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujar();
}

//Se agrega una cuadricula
function dibujarCuadricula() {
    dibujarCuadricula();
  for (let i = 0; i < canvas.width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  for (let i = 0; i < canvas.height; i += 20) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
}