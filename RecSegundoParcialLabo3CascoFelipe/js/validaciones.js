export const validarCampoVacio = (e) => {
  const input = e.target;
  input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
};

export function ValidarRadioSeleccionado() {
  const radioButtons = document.querySelectorAll('input[name="transaccion"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.id;
    }
  }
  return false;
}

export function ValidarKm(numero) {
  const ExpRegSoloNumeros = "^[0-9]+$";

  if (
    numero.match(ExpRegSoloNumeros) != null &&
    numero > 0 &&
    numero < 200000
  ) {
    return true;
  }
  return false;
}

export function ValidarPotencia(numero) {
  const ExpRegSoloNumeros = "^[0-9]+$";

  if (numero.match(ExpRegSoloNumeros) != null) {
    {
      if (numero >= 50 && numero <= 300) {
        return true;
      }
    }
  }
  return false;
}

export function ValidarPuertas(numero) {
  const ExpRegSoloNumeros = "^[0-9]+$";

  if (numero.match(ExpRegSoloNumeros) != null) {
    if (numero == 2 || numero == 4 || numero == 5) {
      return true;
    }
  }
  return false;
}

const setError = (input, mensaje) => {
  const $small = input.nextElementSibling;
  $small.textContent = mensaje || `${input.name} requerido`;
  input.classList.add("inputError");
  $small.classList.add("danger");
};
const clearError = (input, mensaje) => {
  const $small = input.nextElementSibling;
  $small.textContent = "";
  input.classList.remove("inputError");
  $small.classList.remove("danger");
};
