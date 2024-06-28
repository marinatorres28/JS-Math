let inputMostrado = false; // controla si existe un input en pantalla
let entrada = document.querySelector("#entrada");
let salida = document.querySelector("#salida");
window.onload = () => {
    document.querySelector("#valorAbs").addEventListener("click", valorAbs);
    document.querySelector("#enteroSup").addEventListener("click", enteroSup);
    document.querySelector("#expo").addEventListener("click", exponente);
    document.querySelector("#max").addEventListener("click", max);
    document.querySelector("#min").addEventListener("click", max);
    document.querySelector("#redondeo").addEventListener("click", redondeo);
    document.querySelector("#raizC").addEventListener("click", raizC);
    document.querySelector("#truncar").addEventListener("click", truncar);
}

// crear el input 1
function crearInput1() {
    let input = document.createElement("input");
    input.setAttribute("id", "input1")
    input.setAttribute("placeholder", "Escribe un número");
    entrada.appendChild(input);
}

// crear el input 2
function crearInput2() {
    let input = document.createElement("input");
    input.setAttribute("id", "input2")
    input.setAttribute("placeholder", "Escribe un número");
    entrada.appendChild(input);
}

// borrar boton
function borrarBoton() {
    document.querySelector(".boton").remove();
}

// crear el boton
function crearBoton() {
    let boton = document.createElement("button");
    boton.setAttribute("id", "calcular");
    boton.classList.add("boton");
    boton.textContent = "Calcular";
    entrada.appendChild(boton);

}

// crear todo
function crearInputs(numeroInputs) {
    if (inputMostrado) { // no hay ni input ni boton en pantalla
        salida.innerHTML = "";
        document.querySelector("#input1").remove();

        if (document.querySelector("#input2")) {
            document.querySelector("#input2").remove();
        }

        borrarBoton();
        inputMostrado = false;
    }

    if (!inputMostrado) {
        //envia a crear las entradas de input y boton
        entrada.style.visibility = "visible"; // el div comienza a mostrarse

        crearInput1();
        if (numeroInputs === 2) {
            crearInput2();
        }

        crearBoton();
        inputMostrado = true;
    }
}

// calcular valor absoluto
function valorAbs() {
    crearInputs(1);
    // si pulsas click en el boton de calcular
    document.querySelector("#calcular").addEventListener("click",()=>{ 
        // 1. Lee el número que contiene el input
        let numero=document.querySelector("#input1").value;
        // 2. Validamos el numero
        if (validar(numero)){
            // 3. Creamos el mensaje de salida
            salida.textContent="El valor absoluto de " + numero + " es " + Math.abs(numero); 
        }
    })

}

// calcular entero superior
function enteroSup() { 
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{ 
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="El el entero superior de " + numero + " es " + Math.ceil(numero); 
        }
    })
}

// calcular exponente
function exponente() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let base=document.querySelector("#input1").value;
        let exponente=document.querySelector("#input2").value;

        if (validar (base) && validar (exponente)){
            salida.innerHTML="El resultado de " + base + "<sup>" + exponente + "</sub> es " + Math.pow(base,exponente);
        }
    })
}

// numero máximo
function max() {
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero1=document.querySelector("#input1").value;
        let numero2=document.querySelector("#input2").value;

        if (validar (numero1) && validar (numero2)){
            salida.innerHTML="El mayor entre " + numero1 + " y " + numero2 + " es " + Math.max(numero1,numero2);
        }
    })
}

// numero mínimo
function min() { 
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero1=document.querySelector("#input1").value;
        let numero2=document.querySelector("#input2").value;

        if (validar (numero1) && validar (numero2)){
            salida.textContent="El menor entre " + numero1 + " y " + numero2 + " es " + Math.min(numero1,numero2);
        }
    })
}

// redondeo
function redondeo() {
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{ 
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="El " + numero + " redondeado es " + Math.round(numero)
        }
    })

 }

//  raíz cuadrada
function raizC() { 
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{ 
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            // toFixed muestra solo el numero de decimales que le indiques
            salida.textContent="La raíz cuadrada de " +  numero + " es " + Math.sqrt(numero).toFixed(3);
        }
    })
}

// truncar
function truncar() { 
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{ 
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="La parte entera de " + numero + " es " + Math.trunc(numero);
        }
    })
}


// validar los números
function validar(numero) {
    if (isNaN(numero)) { // is not a number isNaN(numero) devuelve true si se cumple que el valor no es numerico
        salida.textContent = "La operación no se puede realizar.";
        return false;
    } else {
        return true;
    }

}