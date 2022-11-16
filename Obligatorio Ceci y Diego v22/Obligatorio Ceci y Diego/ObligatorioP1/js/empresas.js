//Cargar los datos en empresa
function crearYGuardarEmpresa(pUsu, pPass) {
    const id = getUltIdEmpresa(empresas);
    const empX = new empresa(id, pUsu, pPass);
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
    crearYGuardarEmpresa("CocaCola", "c12345");
    crearYGuardarEmpresa("Salus", "d12345");
 
 
 
 }



 
 //////////////////Consultar en clase acerca de la asignacion de solicitudes pendientes////////////////////////////////////////////////////////////////////

 function buscarEmpresa(idEmpresa){
   for (let i = 0; i < empresas.length; i++) {
      if (idEmpresa == empresas[i].idEmpresa){
         let empresa = empresas[i];  
         return empresa;    
      }
   }
 }

 function buscarViaje(idViaje){
   for (let i = 0; i < crearViaje.length; i++){
      if (idViaje == crearViaje[i].idViaje){
         let viaje = crearViaje[i];
         return viaje;
      }
   }
 }


 function buscarSolicitud(idSolicitud){
   for (let i = 0; i < solicitudesCarga.length; i++){
      if (idSolicitud == solicitudesCarga[i].idSolicitudes){
         let solicitud = solicitudesCarga[i];
         return solicitud;
      }
   }
 }

 function buscarImportador(idImportador){
   for(let i = 0; i < importadores.length; i++){
      if (idImportador == importadores[i].idImportador){
         let importador = importador[i];
         return importador;
      }
   }
 }

 function calcularContenedoresDeViaje(idViaje){
   let contenedores = 0;
   for (let i = 0; i < solicitudesCarga.length; i++){
      if (solicitudesCarga[i].idViaje == idViaje){
         contendores += solicitudesCarga[i].cantidadContenedores;
      }
   }
   return contenedores;
 }

 function asignarSolicitudesCarga(idEmpresa, idViaje, idSolicitud) {

   let viaje = buscarViaje(idViaje);
   let solicitud = buscarSolicitud(idSolicitud);
   let importador = buscarImportador(solicitud.idImportador);

   if (importador.estado != "habilitado"){ // estado segun segun el state de solicitudes de carga
      return alert("El importador no está habilitado.");
   }

   let contenedoresDisponibles = viaje.cantidadMaxima - calcularContenedoresDeViaje(idViaje);
   if (solicitud.cantidadContenedores > contenedoresDisponibles && solicitud.cantidadContenedores < 1){
      return alert("La cantidad de contenedores de la solicitud supera el máximo que soporta el viaje o es inferior a 1.");
   }

   setEmpresa(idEmpresa);
   setViaje(idViaje);
   setState("CONFIRMADA");   //CECILIA: ver array solicitudesCarga.state  -- misma lógica que en el botón de cancelar con el cambio de estado a Cancelado
   alert("La solicitud fue asignada.")
 }

 function viajesPosterioresAHoy(){
   let viajes = []
   let hoy = new Date;
   for (let i = 0; i < crearViajes.length; i++){
      let fecha = Date.parse(crearViajes[i].fechaLlegada);
      if (fecha > hoy){
         viajes.push(crearViajes[i]);
      }
   }
   return viajes;
 }

 // Por hacer:

 function solicitudesPendientes(){
   let solicitudes = [];
   for (let i = 0; i < solicitudesCarga.length; i++){
      if (solicitudesCarga[i].state == "Pendiente"){ 
         solicitudes.push(solicitudesCarga[i]);
      }
   }
   return solicitudes;
 }

 function viajesPendientes(){
   let viajes = [];
   for (let i = 0; i < crearViaje.length; i++){
      if (crearViaje[i].state == "Pendiente"){ ///////////////////
         viajes.push(crearViaje[i]);
      }
   }
   return solicitudes;
 }
 // cargarAsignacionDeSolicitudes

 // Crear funcion que obtenga el id de empresa, el viaje seleccionado y la solicitud seleccionada para ejecutar la funcion
 // asignarSolicitudesCarga pasando los 3 parametros.

