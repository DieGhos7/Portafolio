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

//Funcion para obtener informacion dada la edad
document.getElementById("formEdad").addEventListener("submit", function(event){
    event.preventDefault();

    var edad = parseInt(document.getElementById("edad").value);
    
    if (edad >= 0 && edad <= 5){
        document.getElementById("edadPuesta").textContent = "Eres un bebé. Por lo tanto no sabes hablar ni caminar y tienes una dependencia absoluta de tus padres. Requieres de adultos para la satisfacción de tus necesidades esenciales."
    }else if(edad >= 6 && edad <= 11){
        document.getElementById("edadPuesta").textContent = "Eres un niño. Tu desarrollo implica una serie de aprendizajes que serán claves para tu formación como adulto. En tus primeros años de vida, deberás desarrollar tu lenguaje para después aprender a leer y escribir.";
    }else if(edad >= 12 && edad <= 17){
        document.getElementById("edadPuesta").textContent = "Eres un adolescente. Traes contigo un aumento en la capacidad para el pensamiento abstracto, la visualización del futuro, la empatía y el idealismo. El cuestionamiento de sí mismo y la reproducción.";
    }else if(edad >= 18 && edad <= 59){
        document.getElementById("edadPuesta").textContent = "Eres adulto. Te caracterizas por la responsabilidad: la capacidad y la determinación para dar la respuesta adecuada a cada una de nuestras circunstancias vitales. No somos responsables de lo que nos sucede, pero sí de la forma en que nos relacionamos con lo que nos sucede.";
    }else if(edad >= 60 && edad <= 120){
        document.getElementById("edadPuesta").textContent = "Eres anciano. Empiezas a notar el peso de los años en tu propio cuerpo. Aparecen arrugas, no cuentas con la misma vitalidad y salud de la juventud. Las funciones y capacidades del organismo empiezan a deteriorarse llegada cierta edad. "
    }else if(edad > 120){
        document.getElementById("edadPuesta").textContent = "No puedes tener tantos años!!!";
    }else if(isNaN(edad)){
        document.getElementById("edadPuesta").textContent = "Ingrese valores numéricos válidos.";
    }
});