

//incrementar id - viajes 


function getUltIdCreacionViaje(lista) {
    let maxId = 0;
    lista.forEach(function (objConid) {
       if (objConid.idViaje > maxId) {
          maxId = objConid.idViaje;
 
       }
    });
    return maxId + 1;
 }
 
 //cargar datos al array
 //(nombreBuqueP, cantidadMaximaP, idViajeP, fechaLlegadaP,)
 function crearYGuardarCreacionViaje(nombreBuque, cantidadMaxima, idViaje, fechaLlegadaP) {
    const id = getUltIdCreacionViaje(crearViaje);
    const viajeX = new creacionDeViaje(nombreBuque, cantidadMaxima, idViaje, fechaLlegadaP);
    crearViaje.push(viajeX);
 
 }
 
 //poblar array viajes 
 
 function precargarDatosViajes() {
 
    crearYGuardarCreacionViaje("pepe", 2, 1, "2022-10-07");
 
 }
 
 
//validar campos vacios en creacion de viaje 

function validarCamposVaciosCreacionViaje(txtNombreBuque, cantidadMaxContenedores ) {
    let campoValido = false;
    if (txtNombreBuque !== "" && cantidadMaxContenedores !== "") {
        campoValido = true;
    }
    return campoValido;
  }
  
//Definir capacidad maxima ----PERFIL EMPRESA----
function crearUnViaje() {

   let nombreBuque = document.querySelector("#txtNombreBuque").value;
   let cantidadMaxima = Number(document.querySelector("#cantidadMaxContenedores").value);
   let mensaje = document.querySelector("#pAvisoCreacionViaje");
   let fechaLlegada = document.querySelector("#fechaLlegada").value;
   let creacionViaje = null;
   let idViaje = 0;
  const unaEmpresa = empresaLogueada;
unaEmpresa.capacidadMaximaCont = cantidadMaxima;
   
   
   if (validarCamposVaciosCreacionViaje(txtNombreBuque, cantidadMaxContenedores) && cantidadMaxima > 0) {
        creacionViaje = crearYGuardarCreacionViaje(nombreBuque, cantidadMaxima, idViaje, fechaLlegada)
        idViaje = getUltIdCreacionViaje(crearViaje);
        alert("Creacion de viaje exitosa");
        document.querySelector("#pAvisoCreacionViaje").innerHTML=""
        console.log(crearViaje);
      } else {
         mensaje.innerHTML = "Hay campos sin completar o la capacidad máxima del buque es menor a 1.";
      }
     
         document.querySelector("#txtNombreBuque").value=""
         document.querySelector("#cantidadMaxContenedores").value=""
         document.querySelector("#fechaLlegada").value=""
   }