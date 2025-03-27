function convertir() {
    let valor = parseFloat(document.getElementById("valor").value);
    let unidadOriginal = document.getElementById("unidad-original").value;
    let unidadDestino = document.getElementById("unidad-destino").value;
    let resultado = 0;

    if (unidadOriginal === unidadDestino) {
      resultado = valor;
    } else {
      switch (unidadOriginal) {
        case "kg":
          if (unidadDestino === "g") {
            resultado = valor * 1000;
          } else if (unidadDestino === "lb") {
            resultado = valor * 2.20462;
          }
          break;
        case "g":
          if (unidadDestino === "kg") {
            resultado = valor / 1000;
          } else if (unidadDestino === "lb") {
            resultado = valor * 0.00220462;
          }
          break;
        case "lb":
          if (unidadDestino === "kg") {
            resultado = valor / 2.20462;
          } else if (unidadDestino === "g") {
            resultado = valor * 453.592;
          }
          break;
        case "m":
          if (unidadDestino === "cm") {
            resultado = valor * 100;
          } else if (unidadDestino === "km") {
            resultado = valor / 1000;
          } else if (unidadDestino === "mi") {
            resultado = valor * 0.000621371;
          }
          break;
        case "cm":
          if (unidadDestino === "m") {
            resultado = valor / 100;
          } else if (unidadDestino === "km") {
            resultado = valor / 100000;
          } else if (unidadDestino === "mi") {
            resultado = valor * 0.00000621371;
          }
          break;
        case "km":
          if (unidadDestino === "m") {
            resultado = valor * 1000;
          } else if (unidadDestino === "cm") {
            resultado = valor * 100000;
          } else if (unidadDestino === "mi") {
            resultado = valor * 0.621371;
          }
          break;
        case "mi":
          if (unidadDestino === "m") {
            resultado = valor * 1609.34;
          } else if (unidadDestino === "cm") {
            resultado = valor * 160934;
          } else if (unidadDestino === "km") {
            resultado = valor * 1.60934;
          }
          break;
        case "l":
          if (unidadDestino === "ml") {
            resultado = valor * 1000;
          } else if (unidadDestino === "gal") {
            resultado = valor * 0.264172;
          }
          break;
        case "ml":
          if (unidadDestino === "l") {
            resultado = valor / 1000;
          } else if (unidadDestino === "gal") {
            resultado = valor * 0.000264172;
          }
          break;
        case "gal":
          if (unidadDestino === "l") {
            resultado = valor * 3.78541;
          } else if (unidadDestino === "ml") {
            resultado = valor * 3785.41;
          }
          break;
      }
    }

    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado.toFixed(2) + " " + unidadDestino;
  }
