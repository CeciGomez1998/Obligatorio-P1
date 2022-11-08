




/*window.addEventListener("load", inicio);

function inicio() {

    document.querySelector("#btnImportador").addEventListener("click", hacerLoginImportador);
    document.querySelector("#btnRegistrar").addEventListener("click", registrarUsuario);
    document.querySelector("#btnIngresarEmpresa").addEventListener("click", hacerLoginEmpresa);

    precargarDatosEmpresas();
}



//VALIDACIÓN DE REGISTRO IMPORTADOR- Que todos los campos estén completos

let importadores = [];

let idImportador = 3;
let importadorLogueado = null;
let empresaLogueada = null;

function registrarUsuario() {



    let nombreCompleto = document.querySelector("#nombreRegistro").value;
    let username = document.querySelector("#usernameRegistro").value;
    let clave = document.querySelector("#passwordRegistro").value;
    let mensaje = "";

    if (validarCamposVaciosRegistro(nombreCompleto, username, clave)) {
        if (formatoContrasenaOK(clave)) {

            if (usuarioExiste(username)) {
                let usuario = new Importador(idImportador, nombreCompleto, username, clave)
                importadores.push(usuario);
                idImportador++;
                mensaje = "Registro existoso"
                document.querySelector("#nombreRegistro").value = "";
                document.querySelector("#usernameRegistro").value = "";
                document.querySelector("#passwordRegistro").value = "";
            } else {
                mensaje = "Ya existe un usuario con ese nombre.";
            }
        } else {
            mensaje = "Formato de contraseña incorrecto (debe tener como mínimo 5 caracteres, al menos una Mayúscula, una minúscula y un número). "
        }
    } else {
        mensaje = "Los campos no pueden estar vacíos.";
    }
    document.querySelector("#pAvisosRegistro").innerHTML = mensaje;
}

function validarCamposVaciosRegistro(pNombre, pClave, pNombreCompleto) {
    let campoValido = document.querySelector("#nombreRegistro").value;
    if (pNombre !== "" && pClave !== "" && pNombreCompleto !== "") {
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
        if (codigo >= 64 && codigo <= 90) {
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

//Verificación de usuario existente

function usuarioExiste(pNombre) {
    let resultado = true;
    for (let i = 0; i < importadores.length; i++) {
        const unUsuario = importadores[i];
        if (unUsuario.nombreDeUsuario === pNombre) {
            resultado = false;
            break
        }
    }
    return resultado;
}*/


//Login importador
/*
function hacerLoginImportador() {
    let username = document.querySelector("#txtNombreImportador").value;
    let clave = document.querySelector("#txtContrasenaImportador").value;
    let encontreImportador = false;

    for (let i = 0; i < importadores.length; i++) {
        const unUsuario = importadores[i];
        importadorLogueado = null;
        if (unUsuario.nombreDeUsuario === username && unUsuario.clave === clave) {
            importadorLogueado = unUsuario;
            encontreImportador = true;
        }
    } if (encontreImportador) {
        document.querySelector("#pAvisosLoginImportador").innerHTML = "Bienvenido"

    } else {
        document.querySelector("#pAvisosLoginImportador").innerHTML = "Al menos uno de los datos no es correcto."
    }

}

//Login empresa

function hacerLoginEmpresa() {
    let nombreEmpresa = document.querySelector("#txtNombreEmpresa").value;
    let clave = document.querySelector("#txtContrasenaEmpresa").value;
    let mensaje = document.querySelector("#pAvisosLoginEmpresa");
   
    let bienvenida = document.querySelector("#mensajeBienvenida");

    let encontreEmpresa = false;
    empresaLogueada = null;
    
    if (nombreEmpresa === "" && clave === "" ) {

        mensaje.innerHTML = "Los campos no pueden estar vacíos."


    } else{

        for (let i = 0; i < empresas.length; i++) {
            const unaEmpresa = empresas[i];
            if (unaEmpresa.nombreUsuEmpresa === nombreEmpresa && unaEmpresa.clave === clave) {
                empresaLogueada = unaEmpresa;
                encontreEmpresa = true;
                
            }
        }
        
        if (encontreEmpresa) {
            
    
            bienvenida.innerHTML += empresaLogueada.nombreUsuEmpresa;
    
        } else {
            mensaje.innerHTML = "Al menos uno de los datos no es correcto o algún campo se encuentra vacío."
        }
        
    }
    
}




*/











































































