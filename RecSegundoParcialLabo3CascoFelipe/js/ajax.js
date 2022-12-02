
const divSpinner = document.getElementById("spinner");

const URL = "http://localhost:3000/anuncios";

export const getAnunciosAsync = async () => {
  return new Promise((res, rej) => {
    setSpinner(divSpinner, "../Assets/spinnerAjax.gif");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.send();
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          const data = JSON.parse(xhr.responseText);
          if (data) {
            res(data);
          }
        } else {
          rej(`Error ${xhr.status}: ${xhr.statusText}`);
        }
        clearSpinner(divSpinner);
      }
    });
  });
};

export const getAnuncioAsync = async (id) => {
  return new Promise((res, rej) => {
      setSpinner(divSpinner, "../Assets/spinnerAjax.gif");
      const xhr = new XMLHttpRequest();
      xhr.open("GET", URL + `/${id}`);
      xhr.send();
      xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState == 4){
              if (xhr.status >= 200 && xhr.status < 400){
                  const data = JSON.parse(xhr.responseText);
                  if (data){
                      res(data);
                  }
              } 
              else{
                  rej(`Error ${xhr.status}: ${xhr.statusText}`);
              }
              clearSpinner(divSpinner);
          }
      })
  })
}

export const createAnuncioAsync = async (anuncio) => {
  return new Promise((res, rej) => {
      setSpinner(divSpinner, "../Assets/spinnerAjax.gif");
      const xhr = new XMLHttpRequest();
      xhr.open("POST", URL);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(anuncio));
      xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState == 4){
              if (xhr.status >= 200 && xhr.status < 400){
                  const data = JSON.parse(xhr.responseText);
                  if (data){
                      res(data);
                  }
              }
              else{
                  rej(`Error ${xhr.status}: ${xhr.statusText}`);
              }
              clearSpinner(divSpinner);
          }
      })
  })
}

export const updateAnuncioAsync = async (entidad) => {
  return new Promise((res, rej) => {
      setSpinner(divSpinner, "../Assets/spinnerAjax.gif");
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", URL + `/${entidad.id}`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(entidad));
      xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState == 4){
              if (xhr.status >= 200 && xhr.status < 400){
                  const data = JSON.parse(xhr.responseText);
                  if (data){
                      res(data);
                  }
              }
              else{
                  rej(`Error ${xhr.status}: ${xhr.statusText}`);
              }
              clearSpinner(divSpinner);
          }
      })
  })
}

export const deleteAnuncioAsync = async (id) => {
  return new Promise((res, rej) => {
      setSpinner(divSpinner, "../Assets/spinnerAjax.gif");
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", URL + `/${id}`);
      xhr.send();
      xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState == 4){
              if (xhr.status >= 200 && xhr.status < 400){
                  const data = JSON.parse(xhr.responseText);
                  if (data){
                      res(data);
                  }
              }
              else{
                  rej(`Error ${xhr.status}: ${xhr.statusText}`);
              }
              clearSpinner(divSpinner);
          }
      })
  })
}

const setSpinner = (div, src) => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "spinner");
  div.appendChild(img);
};

const clearSpinner = (div) => {
  while (div.hasChildNodes()) {
    div.removeChild(div.firstElementChild);
  }
};
