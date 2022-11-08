
//Cargar los datos en empresa
function crearYGuardarEmpresa(pUsu, pPass){
   const id = getUltIdEmpresa(empresas);
   const empX = new empresa(id,pUsu, pPass);
   empresas.push(empX);
}

//incrementar el id en Empresa

function getUltIdEmpresa(lista) {
   let maxId = 0;
   lista.forEach(function (objConid) {
      if (objConid.idEmpresa > maxId) {
          maxId = objConid.idEmpresa;
         
      }
   });
   return maxId + 1;
}


//datos del array empresas

function precargarDatosEmpresas() {
   
   crearYGuardarEmpresa("EmpWorld", "a12345");
   crearYGuardarEmpresa("EmpSea", "b12345");
   
   
   
}


//cargar datos importador 

function crearYGuardarImportador(pName, pUsu, pPass){
   const id = getUltIdImportador(importadores);
   const impX = new importador(id, pName, pUsu, pPass);
   importadores.push(impX);
}

//incrementar el id en Empresa

function getUltIdImportador(lista) {
   let maxId = 0;
   lista.forEach(function (objConid) {
      if (objConid.idImportador > maxId) {
          maxId = objConid.idImportador;
         
      }
   });
   return maxId + 1;
}

//datos array importadores 

function precargarDatosImportador() {
   // orden: (idImportadorP, nombreCompletoP, usernameP,claveP)
   crearYGuardarImportador("Diegui", "diego2.0", "a12345");
   crearYGuardarImportador("Ceci", "ceci2.0", "b12345");
   
}


//solicitudes de carga 

//incrementar el id en solicitudes

function getUltIdSolicitudesCarga(lista) {
   let maxId = 0;
   lista.forEach(function (objConid) {
      if (objConid.idSolicitudes> maxId) {
          maxId = objConid.idSolicitudes;
         
      }
   });
   return maxId + 1;
}

//cargar datos solicitudes 

function crearYGuardarSolicitudes(tipoMercaderia, descripcion, puertoDeOrigen, cantContenedores ){
   const id = getUltIdSolicitudesCarga(solicitudesCarga);
   const impX = new solicitudesDeCarga(id, tipoMercaderia, descripcion, puertoDeOrigen, cantContenedores);
   solicitudesCarga.push(impX);
}

 //precarga de solicitudes 
 
function precargarDatosSolicitudes() {
   
   crearYGuardarSolicitudes("Peligrosa", "Fuegos artificiales", "BsAs", "2");
   crearYGuardarSolicitudes("General", "Vestimenta", "USA", "10");
   
}


 //Creación de viaje por buque ----PERFIL EMPRESA----


 
  //Definir capacidad maxima ----PERFIL EMPRESA----
 function definirCapacidadMaximaContenedores() {
      
   let nombreBuque = document.querySelector("#txtNombreBuque").value;
   let capacidadMaxima = Number(document.querySelector("#cantidadContenedores").value);
   if(capacidadMaxima < 1) {
      document.querySelector("#pAvisoCreacionViaje").innerHTML = "Ingrese capacidad maxima mayor o igual a 1"; 
   } else {
      document.querySelector("#pAvisoCreacionViaje").innerHTML = "El buque " + nombreBuque + " cuenta con una capacidad maxima de: " + capacidadMaxima + " contenedoes";  
      const unaEmpresa = empresaLogueada;
      unaEmpresa.capacidadMaximaCont = capacidadMaxima;
   }

}