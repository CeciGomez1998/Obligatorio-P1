

class solicitudesDeCarga{

    constructor(idSolicitudes, tipoMercaderia, descripcion, puertoDeOrigen, cantidadContenedores, state, idImportador){

        this.idSolicitudes = idSolicitudes;
        this.tipoMercaderia = tipoMercaderia;
        this.descripcion = descripcion;
        this.puertoDeOrigen = puertoDeOrigen;
        this.cantidadContenedores = cantidadContenedores;
        this.state = state; 
        this.idImportador = idImportador;
        this.idEmpresa = 0;
        this.idViaje = 0;    
        
    }

    setEmpresaId(id) {
        this.idEmpresa = id
    }
    setViajeId(id) {
        this.idViaje = id
    }
}


//FALTA VINCULAR ID EMPRESA 

//ADEMAS VER QUE CUANDO SE CREE SE GUARDE EN EL ARRAY 