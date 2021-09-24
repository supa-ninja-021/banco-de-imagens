function enviar() {
    var listaUm = document.getElementById("upload").value;
    if (listaUm.endsWith(".jpg")) {
      novaLista(listaUm);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("upload").value = "";
    
    function novaLista(upload) {
      var itens = "<li>" + "<div class='dropdown'>" + "<img src='" + listaUm + "'>" + "</div>" + "</li>";
      var conteudoLista = document.getElementById("container");
      conteudoLista.innerHTML = conteudoLista.innerHTML + itens;
    }
  }
  
  for (var up = 0; up < enviar.length; up++) {
    document.write("<img src=" + enviar[up] + ">");
  }