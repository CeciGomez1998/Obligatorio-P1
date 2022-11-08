//visibilidad de las pantallas 

function mountSelectProfile() {
  changeVisibility("#selectionProfile", "block");
  changeVisibility("#mensajeBienvenida", "none");
  changeVisibility("#seccionLoginImportador", "none");
  changeVisibility("#seccionLoginEmpresa", "none");
  changeVisibility("#seccionRegistro", "none");
  changeVisibility("#creacionViaje", "none");
  changeVisibility("#asignarSolicitudes", "none");
  changeVisibility("#rolloverCarga", "none");
  changeVisibility("#cargasViaje", "none");
  changeVisibility("#habilitacionImportadores", "none");
  changeVisibility("#seccionSolicitudesCarga", "none");
  changeVisibility("#seccionInformacionEstadisticaImportador", "none");

  document.querySelector("#btnLogout").addEventListener("click", logout);
  document.querySelector("#btnEmpresa").addEventListener("click", loginEmpresa);
  document.querySelector("#btnImportador").addEventListener("click", loginImportador);
  document.querySelector("#btnVolver").addEventListener("click", volverALoginImportador);
  document.querySelector("#btnInicio")
  document.querySelector("#btnCrear").addEventListener("click", definirCapacidadMaximaContenedores);

}

//volver a la pantalla de selección de perfiles con el botón Inicio
function logout() {

  mountSelectProfile();
}

//Retornar al login con el botón Volver
function volverALoginImportador() {

  changeVisibility("#seccionLoginImportador", "block");
  changeVisibility("#seccionRegistro", "none");
}

//desmontar selección de perfiles

function unmountSelectProfile() {

  changeVisibility('#selectionProfile', 'none');
  document.querySelector("#btnEmpresa").removeEventListener("click", loginEmpresa);
  document.querySelector("#btnImportador").removeEventListener("click", loginImportador);

}

//mostrar pantalla de registro importador

function mountRegistroImportador() {

  unmountSelectProfile();
  changeVisibility("#seccionLoginImportador", "none");
  changeVisibility("#seccionRegistro", "block");



}

// mostrar login de empresa 
function loginEmpresa() {

  unmountSelectProfile()
  changeVisibility("#seccionLoginEmpresa", "block");
  document.querySelector("#btnIngresarEmpresa").addEventListener("click", ingresarEmpresa);

}

//validaciones del login empresa
function ingresarEmpresa() {

  let nombreEmpresa = document.querySelector("#txtNombreEmpresa").value;
  let clave = document.querySelector("#txtContrasenaEmpresa").value;
  let mensaje = document.querySelector("#pAvisosLoginEmpresa");

  let encontreEmpresa = false;

  empresaLogueada = null;

  if (nombreEmpresa === "" && clave === "") {

    mensaje.innerHTML = "Los campos no pueden estar vacíos."

  } else {

    for (let i = 0; i < empresas.length; i++) {
      const unaEmpresa = empresas[i];
      if (unaEmpresa.nombreUsuEmpresa === nombreEmpresa && unaEmpresa.clave === clave) {
        empresaLogueada = unaEmpresa;
        encontreEmpresa = true;

      }
    }

    if (encontreEmpresa) {

      mountScreen1Empresa()

    } else {
      mensaje.innerHTML = "Al menos uno de los datos no es correcto o algún campo se encuentra vacío."
    }

  }

}



//validaciones login importador

function loginImportador() {

  unmountSelectProfile()
  changeVisibility("#seccionLoginImportador", "block");
  document.querySelector("#btnRegistro").addEventListener("click", registroImportador);
  document.querySelector("#btnIngresarImportador").addEventListener("click", ingresarImportador);

}

function ingresarImportador() {

  let nombreImportador = document.querySelector("#txtNombreImportador").value;
  let claveImportador = document.querySelector("#txtContrasenaImportador").value;
  let mensaje = document.querySelector("#pAvisosLoginImportador")


  let encontreImportador = false;
  importadorLogueado = null;



  if (nombreImportador === "" && claveImportador === "") {
    mensaje.innerHTML = "Los campos no pueden estar vacíos."
  } else {

    for (let i = 0; i < importadores.length; i++) {
      const unUsuario = importadores[i];
      if (unUsuario.username === nombreImportador && unUsuario.clave === claveImportador) {
        importadorLogueado = unUsuario;
        encontreImportador = true;
      }
    }

  } if (encontreImportador) {

    mountScreen1Importador();

  } else {
    mensaje.innerHTML = "Al menos uno de los datos no es correcto."
  }
}


function registroImportador() {


  mountRegistroImportador()
  document.querySelector("#btnRegistrar").addEventListener("click", btnRegistrar);
}



//Verificación de usuario existente

function usuarioExiste(username) {
  let resultado = true;
  for (let i = 0; i < importadores.length; i++) {
    const unUsuario = importadores[i];
    if (unUsuario.username === username) {
      resultado = false;

    }
    return resultado;
  }
}




function btnRegistrar() {

  let nombreCompleto = document.querySelector("#nombreRegistro").value;
  let username = document.querySelector("#usernameRegistro").value;
  let clave = document.querySelector("#passwordRegistro").value;
  // let imagesPerfil = document.querySelector("#imagesPerfil").value; FALTA VALIDAR 
  let mensaje = document.querySelector("#pAvisosRegistro")
   importadorLogueado = null;

  if (validarCamposVaciosRegistro(nombreCompleto, username, clave)) {
    if (formatoContrasenaOK(clave)) {

      if (usuarioExiste(username)) {
        
        //let usuario = new importador(idImportador, nombreCompleto, username, clave)
         importadorLogeado = crearYGuardarImportador(nombreCompleto, username, clave);
         alert("Registro exitoso");
         changeVisibility("#seccionLoginImportador", "block");
         changeVisibility("#seccionRegistro", "none")
     
      } else {
        mensaje.innerHTML = "Ya existe un usuario con ese nombre.";
      }
    } else {
      mensaje.innerHTML = "Formato de contraseña incorrecto (debe tener como mínimo 5 caracteres, al menos una Mayúscula, una minúscula y un número). "
    }
  } else {
    mensaje.innerHTML = "Los campos no pueden estar vacíos.";
  }
  

}








