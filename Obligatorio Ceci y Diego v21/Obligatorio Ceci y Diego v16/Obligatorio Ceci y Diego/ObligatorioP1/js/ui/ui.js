
//función de visibilidad
function changeVisibility(id, display) {
  document.querySelector(id).style.display = display;
}


//pantalla creacion viaje
/*function mountScreen1Empresa() {

  changeVisibility("#seccionLoginEmpresa", "none");
  changeVisibility("#navPrincipalEmpresa", "block");
  changeVisibility('#creacionViaje', 'block');
  changeVisibility("#mensajeBienvenida", "block");
  document.querySelector("#mensajeBienvenida").innerHTML = "Bienvenido " + empresaLogueada.nombreUsuEmpresa;
}

//PAantalla solicitud de carga
/*function mountScreen1Importador() {

  changeVisibility("#seccionLoginImportador", "none");
  changeVisibility("#seccionRegistro", "none");
  changeVisibility("#navPrincipalEmpresa", "block");
  changeVisibility('#seccionSolicitudesCarga', 'block');
  changeVisibility("#mensajeBienvenida", "block");
  document.querySelector("#mensajeBienvenida").innerHTML = "Bienvenido " + importadorLogueado.username;
  agregarDatosTabla()
}*/


function btnInicio(){
  
  changeVisibility("#pantallaInicio", "block");
  changeVisibility("#seccionLoginImportador", "none");
  changeVisibility("#seccionLoginEmpresa", "none");
  changeVisibility("#seccionRegistro", "none");
  changeVisibility("#navPrincipalEmpresa", "block");
  changeVisibility("#mensajeBienvenida", "block");
  let mensajeBienvenida = document.querySelector("#mensajeBienvenida")
  
  //botones importador

  document.querySelector("#btnCrearCarga").addEventListener("click", onCrearCarga);
  document.querySelector("#btnVisualizarSolicitudes").addEventListener("click", onVisualizarSolicitudes);
  document.querySelector("#btnInformacionEstadistica").addEventListener("click", onInformacionEstadistica);

  
  //botones empresa
  document.querySelector("#btnCrearViajes").addEventListener("click", onCreacionViaje);
  document.querySelector("#btnRollover").addEventListener("click", onRollover);
  document.querySelector("#btnHabilitar").addEventListener("click", onHabilitaciones);
  document.querySelector("#btnAsignarSolicitudes").addEventListener("click", onAsignarSolicitudes);
  document.querySelector("#btnManifiesto").addEventListener("click", onManifiesto);
  
  if(importadorLogueado != null) {
    
    changeVisibility("#botonesImportadores", "block");
    changeVisibility("#botonesEmpresas", "none");
    mensajeBienvenida.innerHTML  = "Bienvenido " + importadorLogueado.username + "<br/>" + "<br/>" +  importadorLogueado.estado;
    //prueba();
    agregarDatosTabla()
    poblarTablaCargas(solicitudesCarga.idImportador);
    
    

  }
  
  if(empresaLogueada != null){ 
    changeVisibility("#botonesImportadores", "none");
    changeVisibility("#botonesEmpresas", "block");
    changeVisibility("#mensajeBienvenida", "block");
 mensajeBienvenida.innerHTML  =  "Bienvenido " + empresaLogueada.nombreUsuEmpresa;
 habilitarImportadores()


}
  changeVisibility('#seccionSolicitudesCarga', 'none');
  changeVisibility('#seccionInformacionEstadisticaImportador', 'none');
  changeVisibility('#creacionViaje', 'none');
  changeVisibility('#rolloverCarga', 'none');
  changeVisibility('#habilitacionImportadores', 'none');
  changeVisibility('#asignarSolicitudes', 'none');
  changeVisibility('#manifiestoCarga', 'none');
  changeVisibility('#seccionTodasLasCargas', 'none');
}


function onCrearCarga(){
 
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#seccionSolicitudesCarga', 'block');
}

function onVisualizarSolicitudes(){
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#seccionTodasLasCargas', 'block');
 const searchCargas =  document.querySelector("#searchCargas");
 searchCargas.addEventListener("keyup", onSearch);
}






function onCreacionViaje(){
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#creacionViaje', 'block');
}

function onRollover(){
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#rolloverCarga', 'block');
}

function onHabilitaciones(){
  
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#habilitacionImportadores', 'block');
}

function onAsignarSolicitudes(){
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#asignarSolicitudes', 'block');
}

function onManifiesto(){
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#manifiestoCarga', 'block');
  const filtroCargasPeligrosas =  document.querySelector("#filtroCargasPeligrosas");
  filtroCargasPeligrosas.addEventListener("click", onFiltroPeligrosas);

  const btnVerTodas =  document.querySelector("#btnVerTodas");
  btnVerTodas.addEventListener("click", onVerTodas);

}

function onInformacionEstadistica(){
  changeVisibility("#pantallaInicio", "none");
  changeVisibility('#seccionInformacionEstadisticaImportador', 'block');
}