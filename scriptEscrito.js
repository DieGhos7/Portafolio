function calcularVelocidad(distancia, tiempo) {
    var tiempoMinutos = tiempo * 60;
    var velocidad = distancia / tiempoMinutos;
    return velocidad;
}

var calcularBoton = document.getElementById("calcular");
var velocidadSpan = document.getElementById("velocidad");

calcularBoton.addEventListener("click", function () {
    var distancia = document.getElementById("distancia").value;
    var tiempo = document.getElementById("tiempo").value;
    var velocidad = calcularVelocidad(distancia, tiempo);
    velocidadSpan.textContent = velocidad.toFixed(2) + " m/min";
});