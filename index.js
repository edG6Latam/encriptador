//text area
const caja1 = document.querySelector(".textArea1");
const caja2 = document.querySelector(".textArea2");
const cajaImagen = document.querySelector(".caja2-img");
const cajaContenedor = document.querySelector(".caja2-contenedor");
//botones
const codificar = document.querySelector(".button1");
const descodificar = document.querySelector(".button2");
const copiar = document.querySelector(".button3");
const eliminarDato = document.querySelector(".button4");

//variable de copiar
let variable;
//funciones

//codificar
codificar.addEventListener("click", () => {
  if (caja1.value.trim() != "" && !cajaImagen.classList.contains("ocultar")) {
    encriptar(caja1.value)
    cajaImagen.classList.toggle("ocultar");
    cajaContenedor.classList.toggle("mostrar");
  } else {
    alert("verifique o limpie las cacillas");
  }
});
//descodificar
descodificar.addEventListener("click", () => {
  if (caja1.value.trim() != "" && !cajaImagen.classList.contains("ocultar")) {
    decodificar(caja1.value)
    cajaImagen.classList.toggle("ocultar");
    cajaContenedor.classList.toggle("mostrar");
  } else {
    alert("verifique o  limpie las cacillas");
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
//borrar todo de las cacillas
eliminarDato.addEventListener("click",()=>{
  limpiar()
  if(cajaImagen.classList.contains("ocultar")){
    cajaImagen.classList.toggle("ocultar");
    cajaContenedor.classList.toggle("mostrar");
  }

})

//limpiar
const limpiar = () => {
  caja1.value = "";
  caja2.value = "";
};


// descodificar  funcion
const decodificar=(info)=>{
  let newd;
   newd = info.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  caja2.value=newd
  caja1.value=""
}

// codificar  funcion
const encriptar=(info)=>{  
  let newInfo=[]
  let respuesta=""
  for (let x = 0; x < info.length; x++) {
   
   if(info[x]=="e"){
     newInfo.push(info[x].replace("e","enter"))
   }else if(info[x]=="i"){
     newInfo.push(info[x].replace("i","imes"))
   }else if(info[x]=="a"){
     newInfo.push(info[x].replace("a","ai"))
   }else if(info[x]=="o"){
     newInfo.push(info[x].replace("o","ober"))
   }else if(info[x]=="u"){
     newInfo.push(info[x].replace("u","ufat"))
   }else{
     newInfo.push(info[x])
   }
   
  }
  for (let y = 0; y < newInfo.length; y++) {
   respuesta+=newInfo[y]
  }
caja2.value=respuesta
caja1.value=""
}