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

function calcularIVA(dinero) {
    var iva = parseFloat(dinero) * 0.22;
    return iva;
}

function costeTotal(dinero) {
    var iva = parseFloat(dinero) * 0.22;
    var costeTotal = parseFloat(dinero) + (iva);
    return costeTotal;
}

var calcularBotonIva = document.getElementById("calcularIva");
var costeTotalSpan = document.getElementById("costeTotal");
var cantIvaSpan = document.getElementById("cantIva");

calcularBotonIva.addEventListener("click", function () {
    var dinero = document.getElementById("dinero").value;
    var iva = calcularIVA(dinero);
    var coste = costeTotal(dinero);
    cantIvaSpan.textContent = iva + " UYU";
    costeTotalSpan.textContent = coste + " UYU";
});


