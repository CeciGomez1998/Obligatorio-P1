
window.addEventListener("load", inicio);

let importadorLogueado = null;
let empresaLogueada = null;
let empresas = [];
let importadores = [];
let solicitudesCarga = []; 
let crearViaje = []; 

//let idImportador = 0;




function inicio() {

    mountSelectProfile();
    precargarDatosEmpresas();
    precargarDatosImportador()
    precargarDatosSolicitudes();
}


 