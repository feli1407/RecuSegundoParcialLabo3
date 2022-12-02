import { getAnunciosAsync } from "./ajax.js";

const divAnunciosAutos = document.querySelector(".anunciosAutos");

//AJAX con promesas.
getAnunciosAsync()
  .then((anunciosAJAX) =>
    divAnunciosAutos.appendChild(CrearTarjetas(anunciosAJAX))
  )
  .catch((err) => console.error(err));

function CrearTarjetas(anuncios) {
  const tarjetas = document.createElement("div");
  tarjetas.setAttribute("class", "filas");

  anuncios.forEach((elemento) => {
    const col = document.createElement("div"); //Creo la col.
    col.setAttribute("class", "col-4 pt-3");

    const tarjeta = document.createElement("div"); //Creo la tarjeta.
    tarjeta.setAttribute("class", "card text-center bg-secondary text-white");

    const tarjetaBody = document.createElement("div"); //Creo el body de la tarjeta.
    tarjetaBody.setAttribute("class", "card-body");
    tarjeta.appendChild(tarjetaBody);

    const titulo = document.createElement("div"); //Creo el titulo de la tarjeta.
    titulo.setAttribute("class", "card-title");
    const parrafo = document.createElement("div"); //Creo el texto de la tarjeta
    parrafo.setAttribute("class", "card-text");
    tarjetaBody.appendChild(titulo);
    tarjetaBody.appendChild(parrafo);

    for (const atributo in elemento) {
      if (atributo === "id") {
        continue;
      }
      if (atributo === "titulo") {
        titulo.textContent = elemento[atributo];
        continue;
      }
      parrafo.textContent += atributo + ": " + elemento[atributo] + " / ";
    }

    col.appendChild(tarjeta); //Agrego la tarjeta creada a una col.

    //Al no tener rows va a ser null por ende creo una row.
    //Si no es null y la ultima row tiene 3 elementos tambien creo una row.
    if(tarjetas.lastChild == null || tarjetas.lastChild.childNodes.length == 3)
    {
        const row = document.createElement("div"); //Creo la row.
        row.setAttribute("class", "row");
        row.appendChild(col);//Agrego la col a la row creada.
        tarjetas.appendChild(row);
    }
    else if(tarjetas.lastChild.childNodes.length < 3){
      tarjetas.lastChild.appendChild(col);//Agrego la col a la row ya existente.
    }
  });
  return tarjetas;
}


