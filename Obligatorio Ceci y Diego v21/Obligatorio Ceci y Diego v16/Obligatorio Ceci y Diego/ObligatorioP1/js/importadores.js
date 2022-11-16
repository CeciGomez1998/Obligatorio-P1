
//cargar datos importador 

function crearYGuardarImportador(pName, pUsu, pPass, logo, estado) {
    const id = getUltIdImportador(importadores);
 
    const impX = new importador(id, pName, pUsu, pPass, logo, estado);
    importadores.push(impX);
 }
 
 //incrementar el id en importador
 
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
     crearYGuardarImportador("Diegui", "diego2.0", "a12345", "1.jpg", "Habilitado");
     crearYGuardarImportador("Ceci", "ceci2.0", "b12345", "2.jpg", "Habilitado");
     crearYGuardarImportador("Firulay", "firu2.0", "c12345", "3.jpg", "Habilitado");
     crearYGuardarImportador("Pepe", "pepe2.0", "d12345", "4.jpg", "Inhabilitado");
     crearYGuardarImportador("Orion", "ori2.0", "e12345", "5.jpg", "Inhabilitado");
   
 
 }
 
 
//validar campos vacíos en registro

function validarCamposVaciosRegistro(username, clave, nombreCompleto) {
   let campoValido = document.querySelector("#usernameRegistro").value;
   if (username !== "" && clave !== "" && nombreCompleto !== "") {
       campoValido = true;
   }
   return campoValido;
 }
 
 //Formato de contraseña correcto 
 
 function formatoContrasenaOK(pClave) {
   esValido = false;
   let contadorNumeros = 0;
   let contadorMayusculas = 0;
   let contadorMinusculas = 0;
 
   for (let i = 0; i < pClave.length; i++) {
       let codigo = pClave.charCodeAt(i);
 
       if (codigo >= 48 && codigo <= 57) {
           contadorNumeros++;
       }
       if (codigo >= 65 && codigo <= 90) {
           contadorMayusculas++;
       }
       if (codigo >= 97 && codigo <= 122) {
           contadorMinusculas++;
       }
 
       if (pClave.length >= 5 && contadorNumeros > 0 && contadorMayusculas > 0 && contadorMinusculas > 0) {
           esValido = true;
           break;
       }
   }
   return esValido;
 }
 