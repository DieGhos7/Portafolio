//Funcion para calcular la velocidad dado distancia y tiempo
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


//Funcion para obtener el precio con iva de algo
function calcularIVA(dinero, porcentaje) {
    var iva = parseFloat(dinero) * (porcentaje / 100);
    return iva;
}

function costeTotal(dinero, porcentaje) {
    var iva = calcularIVA(dinero, porcentaje);
    var costeTotal = parseFloat(dinero) + iva;
    return costeTotal;
}

var calcularBotonIva = document.getElementById("calcularIva");
var costeTotalSpan = document.getElementById("costeTotal");
var cantIvaSpan = document.getElementById("cantIva");

calcularBotonIva.addEventListener("click", function () {
    var dinero = document.getElementById("dinero").value;
    var porcentaje = document.getElementById("porcentajeIva").value;

    if (dinero !== "" && porcentaje !== "") {
        var iva = calcularIVA(dinero, porcentaje);
        var coste = costeTotal(dinero, porcentaje);
        cantIvaSpan.textContent = iva + " UYU";
        costeTotalSpan.textContent = coste + " UYU";
    } else {
        alert("Por favor, ingrese tanto el monto como el porcentaje de IVA.");
    }
});

//Funcion para etapa de la vida dada la edad.
document.getElementById("formEdad").addEventListener("submit", function(event) {
    event.preventDefault();

    var edad = parseInt(document.getElementById("edad").value);
    var imagen = document.getElementById("imagenEdad");

    if (isNaN(edad) || edad < 0) {
        document.getElementById("edadPuesta").textContent = "Ingrese valores numéricos válidos.";
        imagen.src = "../images/Escrito js/error.png";
    } else if (edad >= 0 && edad <= 2) {
        document.getElementById("edadPuesta").textContent = "Eres un bebé.";
        imagen.src = "../images/Escrito js/bebe.png";
    } else if (edad >= 3 && edad <= 11) {
        document.getElementById("edadPuesta").textContent = "Eres un niño.";
        imagen.src = "../images/Escrito js/nene.png";
    } else if (edad >= 12 && edad <= 17) {
        document.getElementById("edadPuesta").textContent = "Eres un adolescente.";
        imagen.src = "../images/Escrito js/adolescente.png";
    } else if (edad >= 18 && edad <= 59) {
        document.getElementById("edadPuesta").textContent = "Eres un adulto.";
        imagen.src = "../images/Escrito js/adulto.png";
    } else if (edad >= 60) {
        document.getElementById("edadPuesta").textContent = "Eres un anciano.";
        imagen.src = "../images/Escrito js/anciano.png";
    }
});