//text area
const caja1 = document.querySelector(".textArea1");
const caja2 = document.querySelector(".textArea2");
const cajaImagen = document.querySelector(".caja2-img");
const cajaContenedor = document.querySelector(".caja2-contenedor");
//botones
const codificar = document.querySelector(".button1");
const descodificar = document.querySelector(".button2");
const copiar = document.querySelector(".button3");

//variable de copiar
let variable;
//funciones

//codificar
codificar.addEventListener("click", () => {
  if (caja1.value.trim() != "") {
    cajaImagen.classList.toggle("ocultar");
    cajaContenedor.classList.toggle("mostrar");
    caja2.value = caja1.value;
    caja1.value = "";
  } else {
    alert("vacio");
  }
});
//descodificar
descodificar.addEventListener("click", () => {
  if (caja1.value.trim() != "") {
    caja1.value = caja2.value;
    caja2.value = "";
  } else {
    alert("vacio");
  }
});
//copiar
copiar.addEventListener("click", () => {
  if (caja2.value.trim() != "") {
    caja2.select();

    try {
      var copiado = document.execCommand("copy");
      var mensaje=copiado?'copiado':'no copiado';
      alert(mensaje)
    } catch (error) {
     console.log(error)
    }
    cajaImagen.classList.toggle("ocultar");
    cajaContenedor.classList.toggle("mostrar");

    caja2.value = "";
  }
  console.log(variable);
});

//limpiar
const limpiar = () => {
  caja1.value = "";
  caja2.value = "";
};
