

//incrementar el id en solicitudes

function getUltIdSolicitudesCarga(lista) {
  let maxId = 0;
  lista.forEach(function (objConid) {
    if (objConid.idSolicitudes > maxId) {
      maxId = objConid.idSolicitudes;

    }
  });
  return maxId + 1;
}

//cargar datos solicitudes 

function crearYGuardarSolicitudes(tipoMercaderia, descripcion, puertoDeOrigen, cantidadContenedores, state, idImportador, idEmpresa, idViaje) {
  const id = getUltIdSolicitudesCarga(solicitudesCarga);
  const impX = new solicitudesDeCarga(id, tipoMercaderia, descripcion, puertoDeOrigen, cantidadContenedores, state, idImportador, idEmpresa, idViaje);
  solicitudesCarga.push(impX);

}

//precarga de solicitudes 

function precargarDatosSolicitudes() {

  crearYGuardarSolicitudes("Peligrosa", "Fuegos artificiales", "BsAs", 2, "Pendiente", 1);
  crearYGuardarSolicitudes("General", "Electrodomesticos", "Esp", 4, "Cancelada", 1);
  crearYGuardarSolicitudes("Peligrosa", "Explosivos", "Lux", 8, "Confimada", 1);
  crearYGuardarSolicitudes("General", "Vestimenta", "USA", 10, "Pendiente", 2);
  crearYGuardarSolicitudes("Refrigerado", "Medicación", "Br", 15, "Confirmada", 3);
  crearYGuardarSolicitudes("General", "Juguetes", "China", 7, "Confirmada", 4);

}


//validar campos vacíos en soliciudes de carga 

function validarCamposVaciosSolicitudCarga(slcTipoMercaderia, descripcionMercaderia, puertoDeOrigen, cantContenedores) {
  let campoValido = false;
  if (slcTipoMercaderia !== "" && descripcionMercaderia !== "" && puertoDeOrigen !== "" && cantContenedores !== "") {
    campoValido = true;
  }
  return campoValido;
}

function validarHabilitacion() {
  let habilitado = false;
  if (importadorLogueado.estado === "Habilitado") {
    habilitado = true;

  } else {
    alert("No se encuentra habilitado para crear nuevas cargas")
  }
  return habilitado;
}

// guardar los datos ingresados en el array 

function cargarSolicitudes() {

  let tipoMercaderia = document.querySelector("#slcTipoMercaderia").value;
  let descripcion = document.querySelector("#descripcionMercaderia").value;
  let puertoDeOrigen = document.querySelector("#puertoDeOrigen").value;
  let cantidadContenedores = Number(document.querySelector("#totalContenedores").value);
  let state = "";
  let mensaje = document.querySelector("#mensajeSolicitudCarga");
  let cargaSolicitudes = null;

  //(slcTipoMercaderia, descripcionMercaderia, puertoDeOrigen, cantContenedores )
  if (validarCamposVaciosSolicitudCarga(slcTipoMercaderia, descripcionMercaderia, puertoDeOrigen, cantidadContenedores) && validarHabilitacion()) {
    state = "Pendiente";
    idImportador = importadorLogueado.idImportador
    cargaSolicitudes = crearYGuardarSolicitudes(tipoMercaderia, descripcion, puertoDeOrigen, cantidadContenedores, state, idImportador)
    alert("Se creo la solicitud correctamente");
    agregarDatosTabla()
    poblarTablaCargas()

  } else {

    mensaje.innerHTML = "Debe completar todos los campos";
  }

}

//agregar campos a tablas

function agregarDatosTabla() {

  document.querySelector("#tablaSolicitud").innerHTML = "";
  if (solicitudesCarga.length > 0) {
    for (let i = 0; i < solicitudesCarga.length; i++) {
      let solicitudes = solicitudesCarga[i];
      if (solicitudes.idImportador === importadorLogueado.idImportador) {
        if (solicitudes.state === "Pendiente" && solicitudes.state != "Cancelado" && solicitudes.state != "Confirmada") {
          document.querySelector("#tablaSolicitud").innerHTML += `<tr> 
          <td>${solicitudes.tipoMercaderia}</td>
          <td>${solicitudes.descripcion}</td>
          <td>${solicitudes.puertoDeOrigen}</td>
          <td>${solicitudes.cantidadContenedores}</td>
          <td><input type="button" id="btnCancelacion${i}" class="btnCancelar" value="Cancelar" data-id="${solicitudes.idSolicitudes}"></td>
          </tr>`
        }
      }

    }
  }
  let btns = document.querySelectorAll(".btnCancelar");
  btns.forEach(function (btn) {
    btn.addEventListener("click", onCancelar);

  })
  document.querySelector("#slcTipoMercaderia").value = "";
  document.querySelector("#descripcionMercaderia").value = "";
  document.querySelector("#puertoDeOrigen").value = "";
  document.querySelector("#totalContenedores").value = "";
}



//boton de cancelar luego de seleccionar 

let contadorCancelaciones = 0;

function onCancelar() {
  let id = Number(this.getAttribute("data-id"));
  // console.log(id)
  //console.log(solicitudesCarga)
  solicitudesCarga.forEach(function (solicitud) {
    if (solicitud.idSolicitudes === id) {
      solicitud.state = "Cancelado"
      contadorCancelaciones = contadorCancelaciones + 1
    }
  })
  inhabilitarImportadores()
  //document.querySelector("#tablaSolicitud").innerHTML = "";
  agregarDatosTabla()
  //console.log(solicitudesCarga)
  console.log(contadorCancelaciones);
  console.log(importadorLogueado)


}
//VER COMO HACER PARA QUE SE SUMEN LAS QUE YA ESTAN CANCELADAS Y PRECARGADAS 

function inhabilitarImportadores() {

if (contadorCancelaciones >= 3) {
  importadores.forEach(function (importadorCan) {
    if (importadorCan.idImportador === importadorLogueado.idImportador) {
      importadorCan.estado = "Inhabilitado"
    }
  })
}
}


/*function prueba(){
  
  if (solicitudesCarga.length > 0) {

      for (let i = 0; i < solicitudesCarga.length; i++) {
      let solicitudes = solicitudesCarga[i]
      let stateSoli = solicitudesCarga[i].state;
      
      if (solicitudes.idImportador === importadorLogueado.idImportador) {

        if (stateSoli.state === "Cancelado") {
          console.log(contadorCancelaciones)
          contadorCancelaciones = contadorCancelaciones + 1
         }
      }
    } 
  }
}*/

//poblar la tabla "CARGAS" con todas las solicitudes 

function poblarTablaCargas() {

  const table = document.querySelector("#todasLasSolicitud");
  table.innerHTML = "";


  //table.innerHTML = "";
  if (solicitudesCarga.length > 0) {
    for (let i = 0; i < solicitudesCarga.length; i++) {
      let solicitudes = solicitudesCarga[i];

      if (solicitudes.idImportador === importadorLogueado.idImportador) {

        document.querySelector("#todasLasSolicitud").innerHTML += `<tr> 
        <td>${solicitudes.tipoMercaderia}</td>
        <td>${solicitudes.descripcion}</td>
            <td>${solicitudes.puertoDeOrigen}</td>
            <td>${solicitudes.cantidadContenedores}</td>
            <td>${solicitudes.state}</td>
            </tr>`
      }
    }
  }

}

function onSearch() {


  let valueSearch = document.querySelector("#searchCargas").value;

  let table = document.querySelector("#todasLasSolicitud");

  if (valueSearch === "") {
    poblarTablaCargas(solicitudesCarga.idImportador);

  } else {

    console.log(valueSearch)

    const searchValue = valueSearch.toLowerCase();

    const cargasFiltradas = [];


    if (solicitudesCarga.length > 0) {
      for (let i = 0; i < solicitudesCarga.length; i++) {
        let solicitudes = solicitudesCarga[i]
        let descripcionSolicitudes = solicitudesCarga[i].descripcion.toLowerCase();

        if (solicitudes.idImportador === importadorLogueado.idImportador) {

          //console.log(descripcionSolicitudes)

          if (descripcionSolicitudes.indexOf(searchValue) != -1) {

            console.log(descripcionSolicitudes);
            //cargasFiltradas.push(descripcionSolicitudes);

            document.querySelector("#todasLasSolicitud").innerHTML = `<tr> 
             <td>${solicitudes.tipoMercaderia}</td>
            <td>${solicitudes.descripcion}</td>
            <td>${solicitudes.puertoDeOrigen}</td>
            <td>${solicitudes.cantidadContenedores}</td>
            <td>${solicitudes.state}</td>
            </tr>`
          }
        }

        //poblarTablaCargas(cargasFiltradas)
      }
      //table.innerHTML = ""
    }


  }

}


function manifiestoCarga() {

  document.querySelector("#tablaManifiesto").innerHTML = "";

  for (let i = 0; i < solicitudesCarga.length; i++) {

    let solicitudes = solicitudesCarga[i];
    let nombresDelImportador;

    // Obtener nombre de importador
    for (let j = 0; j < importadores.length; j++) {
      let importador = importadores[j];
      if (solicitudes.idImportador == importador.idImportador) {
        nombresDelImportador = importador.nombreCompleto;
        break;
      }
    }

    document.querySelector("#tablaManifiesto").innerHTML += `<tr> 
  
            <td>${solicitudes.tipoMercaderia}</td>
            <td>${solicitudes.descripcion}</td>
            <td>${solicitudes.puertoDeOrigen}</td>
            <td>${solicitudes.cantidadContenedores}</td>
            <td>${nombresDelImportador}</td>
  
            </tr>`

  }
}

function onFiltroPeligrosas() {

  for (let i = 0; i < solicitudesCarga.length; i++) {

    let solicitudes = solicitudesCarga[i];
    let tipoMercaderia = solicitudesCarga[i].tipoMercaderia;

    if (tipoMercaderia === "Peligrosa") {
      // Obtener nombre de importador
      for (let j = 0; j < importadores.length; j++) {
        let importador = importadores[j];
        if (solicitudes.idImportador == importador.idImportador) {
          nombresDelImportador = importador.nombreCompleto;
          break;
        }
      }

      document.querySelector("#tablaManifiesto").innerHTML = `<tr> 

          <td>${solicitudes.tipoMercaderia}</td>
          <td>${solicitudes.descripcion}</td>
          <td>${solicitudes.puertoDeOrigen}</td>
          <td>${solicitudes.cantidadContenedores}</td>
          <td>${nombresDelImportador}</td>

          </tr>`

    }
  }
}
function onVerTodas() {
  manifiestoCarga()
}