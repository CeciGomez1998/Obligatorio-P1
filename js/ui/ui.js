//función de visibilidad
function changeVisibility(id, display) {
    document.querySelector(id).style.display = display;
  }
  



  //pantalla creacion viaje
function mountScreen1Empresa() {
    
  changeVisibility ("#seccionLoginEmpresa", "none");
  changeVisibility('#creacionViaje', 'block');
  changeVisibility("#mensajeBienvenida", "block");
  document.querySelector("#mensajeBienvenida").innerHTML= "Bienvenido " + empresaLogueada.nombreUsuEmpresa; 
}
 
//PAantalla solicitud de carga
function mountScreen1Importador() {
  
  changeVisibility("#seccionLoginImportador", "none");
  changeVisibility("#seccionRegistro", "none");
  changeVisibility('#seccionSolicitudesCarga', 'block');
  changeVisibility("#mensajeBienvenida", "block");
 
  document.querySelector("#mensajeBienvenida").innerHTML= "Bienvenido " + importadorLogueado.username;
   
}