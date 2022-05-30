function guardarNota(){
    var nota = document.createElement("div");
    var titulo = document.createElement("div");
    var texto =  document.createElement("div");
    var boton = document.createElement("button");

    nota.className = "column container round shadow";

    titulo.innerHTML = document.getElementById("tituloNota").value;
    texto.innerHTML = document.getElementById("textoNota").value;
    boton.innerHTML = "Borrar Nota";

    nota.style = "margin-top: 5%";

    if(titulo.innerHTML != '' && texto.innerHTML != '') {
        nota.appendChild(titulo);
        nota.appendChild(texto);

        boton.onclick = function(){borrarNota(this);}

        nota.appendChild(boton);
        document.getElementById("listaNotas").appendChild(nota);



        limpiarTexto();
    }
    
}

function limpiarTexto(){
    document.getElementById("tituloNota").value = '';

    document.getElementById("textoNota").value = '';
}

function borrarNota(boton){
    var nota = boton.parentNode;

    nota.parentNode.removeChild(nota);

}