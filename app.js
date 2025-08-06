// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo(nombre)
{
    nombre = document.getElementById("amigo").value;
    if (nombre === "")
    {
        alert("Por favor, ingresa un nombre.");
    }
    else
    {   
        nombres.push(nombre);
        //console.log(nombres);
        limpiarCaja();
        mostrarAmigos();
    }
}

function limpiarCaja()
{
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

function mostrarAmigos()
{
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < nombres.length; i++)
    {
        const li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }      
}

function amigoAleatorio()
{
    let indice = Math.floor(Math.random() * nombres.length);
    console.log(indice);
    return indice;
}

function sortearAmigo()
{
    const resultado = document.getElementById("resultado");
    const indice = amigoAleatorio();
    if (nombres.length === 0)
    {
        resultado.textContent = "No hay amigos para sortear.";
    }
    else
    {
        resultado.textContent = `El amigo seleccionado es: ${nombres[indice]}`;
    }
}