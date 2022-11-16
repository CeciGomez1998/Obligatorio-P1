

window.addEventListener("load", inicio);

let importadorLogueado = null;
let empresaLogueada = null;
let empresas = [];
let importadores = [];
let solicitudesCarga = []; 
let crearViaje = []; 




function inicio() {

    mountSelectProfile();
    precargarDatosEmpresas();
    precargarDatosImportador()
    precargarDatosSolicitudes();
    precargarDatosViajes();
   
    
}


//visibilidad de las pantallas 

function mountSelectProfile() {

  changeVisibility("#selectionProfile", "block");
  changeVisibility("#pantallaInicio", "none");
  changeVisibility("#mensajeBienvenida", "none");
  changeVisibility("#seccionLoginImportador", "none");
  changeVisibility("#seccionLoginEmpresa", "none");
  changeVisibility("#seccionRegistro", "none");
  changeVisibility("#creacionViaje", "none");
  changeVisibility("#asignarSolicitudes", "none");
  changeVisibility("#rolloverCarga", "none");
  changeVisibility("#manifiestoCarga", "none");
  changeVisibility("#habilitacionImportadores", "none");
  changeVisibility("#seccionSolicitudesCarga", "none");
  changeVisibility("#seccionInformacionEstadisticaImportador", "none");
  changeVisibility("#seccionTodasLasCargas", "none");
  changeVisibility("#navPrincipalEmpresa", "none");

  document.querySelector("#btnLogout").addEventListener("click", logout);
  document.querySelector("#btnEmpresa").addEventListener("click", loginEmpresa);
  document.querySelector("#btnImportador").addEventListener("click", loginImportador);
  document.querySelector("#btnVolver").addEventListener("click", volverALoginImportador);
  document.querySelector("#btnInicio").addEventListener("click", btnInicio);
  document.querySelector("#btnCrear").addEventListener("click", crearUnViaje);
  document.querySelector("#cargarSolicitud").addEventListener("click", cargarSolicitudes);
  document.querySelector("#btnManifiesto").addEventListener("click", manifiestoCarga);

  document.querySelector("#btnCargar").addEventListener("click", asignarSolicitudesCarga);
  
  document.querySelectorAll(".btnVolverAPerfiles").forEach(function (btn) {
    btn.addEventListener("click", onReturnPerfiles)
  })
  
}

//volver a seleccion de perfiles desde login empresa e importador 

function onReturnPerfiles(){
  mountSelectProfile();
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

  document.querySelectorAll(".logo").forEach(function (btn) {
    btn.addEventListener("click", onLogoClick)
  })
}

//función para cambio de tamaño de logo 

function onLogoClick() {
  document.querySelectorAll(".logo").forEach(function (img) {
    img.width = 100
  })
  this.width = 187
}

// mostrar login de empresa 
function loginEmpresa() {
  unmountSelectProfile()
  changeVisibility("#seccionLoginEmpresa", "block");
  document.querySelector("#btnIngresarEmpresa").addEventListener("click", ingresarEmpresa);
  document.querySelector("#txtNombreEmpresa").value = "";
  document.querySelector("#txtContrasenaEmpresa").value = "";



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
      if (unaEmpresa.nombreUsuEmpresa.toLowerCase() === nombreEmpresa.toLowerCase() && unaEmpresa.clave === clave) {
        empresaLogueada = unaEmpresa;
        encontreEmpresa = true;

      }
    }

    if (encontreEmpresa) {

      btnInicio()

    } else {
      mensaje.innerHTML = "Al menos uno de los datos no es correcto o algún campo se encuentra vacío."
    }

  }

}

//ui login importador

function loginImportador() {

  unmountSelectProfile()
  changeVisibility("#seccionLoginImportador", "block");
  document.querySelector("#btnRegistro").addEventListener("click", registroImportador);
  document.querySelector("#btnIngresarImportador").addEventListener("click", ingresarImportador);

  //campos login importador
  document.querySelector("#txtNombreImportador").value = "";
  document.querySelector("#txtContrasenaImportador").value = "";

}

// login importador 

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
      if (unUsuario.username.toLowerCase() === nombreImportador.toLowerCase() && unUsuario.clave === claveImportador) {
        importadorLogueado = unUsuario;
        encontreImportador = true;
      }
    }

  } if (encontreImportador) {

    btnInicio()

  } else {
    mensaje.innerHTML = "Al menos uno de los datos no es correcto."
  }
}

//limpiar campos de registro 

function registroImportador() {


  mountRegistroImportador()

  //campos registro importador
  document.querySelector("#nombreRegistro").value = "";
  document.querySelector("#usernameRegistro").value = "";
  document.querySelector("#passwordRegistro").value = "";

  document.querySelector("#btnRegistrar").addEventListener("click", btnRegistrar);
}



//Verificación de usuario existente

function usuarioExiste(username) {
  let resultado = true;
  for (let i = 0; i < importadores.length; i++) {
    const unUsuario = importadores[i];
    
    if (unUsuario.username.toLowerCase() === username.toLowerCase()) {
      resultado = false;

    }
    return resultado;
  }
}


//registro importador 

function btnRegistrar() {


  let nombreCompleto = document.querySelector("#nombreRegistro").value;
  let username = document.querySelector("#usernameRegistro").value;
  let clave = document.querySelector("#passwordRegistro").value;
  let mensaje = document.querySelector("#pAvisosRegistro")
  let estado = "";
  importadorLogueado = null;

  // let imagesPerfil = document.querySelector("#imagesPerfil").value; FALTA VALIDAR 

  if (validarCamposVaciosRegistro(nombreCompleto, username, clave)) {
    if (formatoContrasenaOK(clave)) {

      if (usuarioExiste(username)) {
        if (logoSelected()) {

          let logo;
          document.querySelectorAll(".logo").forEach(function (img) {
            if (img.width == 187) {
              logo = img.getAttribute("src")
            }
          })
          //let usuario = new importador(idImportador, nombreCompleto, username, clave)
          estado = "Habilitado"
          importadorLogeado = crearYGuardarImportador(nombreCompleto, username, clave, logo, estado);
          alert("Registro exitoso");
          changeVisibility("#seccionLoginImportador", "block");
          changeVisibility("#seccionRegistro", "none")

        } else {
          mensaje.innerHTML = "Por favor selecciona un logo"
        }
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

//foto de perfil empresas 

function logoSelected() {
  let selected = false
  document.querySelectorAll(".logo").forEach(function (img) {
    if (img.width == 187) {
      selected = true
    }
  })
  return selected
}






