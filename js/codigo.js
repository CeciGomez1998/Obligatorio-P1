window.addEventListener("load", inicio);

function inicio() {
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", mostrarSeccion)

    }
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#navPrincipalEmpresa").style.display = "none";
    document.querySelector("#seccionInformacionEstadisticaImportador").style.display = "none";
    document.querySelector("#seccionInterfazEmpresa").style.display = "none";
    document.querySelector("#seccionInterfazImportador").style.display = "none";
    document.querySelector("#seccionBuscar").style.display = "none";
    document.querySelector("#seccionBotonVolver").style.display = "none";
    document.querySelector("#seccionLoginImportador").style.display = "none";
    document.querySelector("#seccionLoginEmpresa").style.display = "none";
    document.querySelector("#seccionRegistro").style.display = "none";

/*---------------------------PARA SEPARAR---------------------------------------*/
    
    document.querySelector("#btnImportador").addEventListener("click", hacerLoginImportador);
    document.querySelector("#btnEmpresa").addEventListener("click", hacerLoginEmpresa);
    document.querySelector("#btnRegistrar").addEventListener("click", registrarUsuario);
    document.querySelector("#btnIngresarEmpresa").addEventListener("click", ingresoEmpresa);
    document.querySelector("#btnIngresarImportador").addEventListener("click", ingresoImportador);
    document.querySelector("#btnVolver").addEventListener("click", volver);
    document.querySelector("#btnLogOutGestor").addEventListener("click", logOutEmpresa);
    document.querySelector("#btnLogOut").addEventListener("click", logOutImportador);
    document.querySelector("#btnSeccionEstadisticas").addEventListener("click", informacionEstadisticaImportador);
    document.querySelector("#btnSeccionEmpresa").addEventListener("click", seccionEmpresa);
    document.querySelector("#btnSeccionImportador").addEventListener("click", seccionImportador);

}


function seccionEmpresa() {
    document.querySelector("#seccionInterfazEmpresa").style.display = "block";
}

function seccionImportador() {
    document.querySelector("#seccionInterfazImportador").style.display = "block";
    document.querySelector("#seccionInformacionEstadicaImportador").style.display = "none";
}


function logOutEmpresa() {
    document.querySelector("#seccionInicio").style.display = "block";
    document.querySelector("#seccionInterfazEmpresa").style.display = "none";
    document.querySelector("#navPrincipalEmpresa").style.display = "none";

}

function logOutImportador() {
    document.querySelector("#seccionInicio").style.display = "block";
    document.querySelector("#seccionInterfazImportador").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#seccionInformacionEstadisticaImportador").style.display = "none";
    usuarioLogeado = null;
}


function ingresoEmpresa() {
    document.querySelector("#seccionLoginEmpresa").style.display = "block";
    document.querySelector("#seccionInicio").style.display = "none";
    document.querySelector("#seccionBotonVolver").style.display = "block";
}


function ingresoImportador() {
    document.querySelector("#seccionLoginImportador").style.display = "block";
    document.querySelector("#seccionRegistro").style.display = "block";
    document.querySelector("#seccionInicio").style.display = "none";
    document.querySelector("#seccionBotonVolver").style.display = "block";
}

let empresas = [];
let idCliente = 3;
let usuarioLogeado = null;

function registrarUsuario() {
    let nombreCompleto = document.querySelector("#txtNombreRegistro").value;
    let clave = document.querySelector("#txtContraRegistro").value;
    let nombreUsuario = document.querySelector("#txtNombreUsuarioRegistro").value;
    let mensaje = "";

    if (validarCamposVaciosRegistro(nombreUsuario, clave, nombreCompleto)) {
        if (formatoContrasenaOK(clave)) {
            if (usuarioExiste(nombreUsuario)) {
                let usuario = new Cliente(idCliente, nombreUsuario, clave, nombreCompleto)
                empresas.push(usuario);
                idCliente++;
                mensaje = "Registro existoso"
                document.querySelector("#txtNombreRegistro").value = "";
                document.querySelector("#txtContraRegistro").value = "";
                document.querySelector("#txtNombreUsuarioRegistro").value = "";
            } else {
                mensaje = "Ya existe un usuario con ese nombre";
            }
        } else {
            mensaje = "Formato de contraseña incorrecto (debe tener al menos 6 caracteres, al menos una Mayus, al menos Minus y al menos un Numero) "
        }
    } else {
        mensaje = "Los campos no pueden ser vacíos";
    }
    document.querySelector("#pAvisosRegistro").innerHTML = mensaje;
}

function validarCamposVaciosRegistro(pNombre, pClave, pNombreCompleto) {
    let campoValido = document.querySelector("#txtNombreRegistro").value;
    if (pNombre !== "" && pClave !== "" && pNombreCompleto !== "") {
        campoValido = true;
    }
    return campoValido;
}

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

        if (pClave.length >= 6 && contadorNumeros > 0 && contadorMayusculas > 0 && contadorMinusculas > 0) {
            esValido = true;
            break;
        }
    }
    return esValido;
}



function usuarioExiste(pNombre) {
    let resultado = true;
    for (let i = 0; i < empresas.length; i++) {
        const unUsuario = empresas[i];
        if (unUsuario.nombreDeUsuario === pNombre) {
            resultado = false;
            break
        }
    }
    return resultado;
}

let gestorLogueado = null;

function precargarDatosEmpresa() {
    let empresa1 = new Empresa(1, "empCecilia", "Cc1234");
    let empresa2 = new Empresa(2, "empDiego", "Dd1234");
    empresas.push(empresa1);
    empresas.push(empresa2);
}


function hacerLoginImportador() {
    for (let i = 0; i < empresas.length; i++) {
        const unUsuario = empresas[i];
        let nombreCliente = document.querySelector("#txtNombreCliente").value;
        let contrasena = document.querySelector("#txtContrasenaCliente").value;
        if (unUsuario.nombreDeUsuario === nombreCliente && unUsuario.clave === contrasena) {
            usuarioLogeado = unUsuario;
            document.querySelector("#seccionInterfazCliente").style.display = "block";
            document.querySelector("#seccionLoginCliente").style.display = "none";
            document.querySelector("#seccionRegistro").style.display = "none";
            document.querySelector("#seccionBotonVolver").style.display = "none";
            document.querySelector("#navPrincipal").style.display = "block";
            document.querySelector("#seccionCancelarReserva").style.display = "none";
            document.querySelector("#seccionCalificarReserva").style.display = "none";
            mostrarLocalesAReservar();
            break;
        }
    }
    document.querySelector("#pAvisosLoginCliente").innerHTML = "Al menos uno de los datos no es correcto."
}


function hacerLoginEmpresa() {
    let contrasena = document.querySelector("#txtContrasenaGestor").value;
    let nombreGestor = document.querySelector("#txtNombreGestor").value;
    for (let i = 0; i < gestores.length; i++) {
        const unGestor = gestores[i];
        if (unGestor.nombreUsuarioGestor === nombreGestor && unGestor.contrasena === contrasena) {
            gestorLogueado = unGestor;
            document.querySelector("#seccionInterfazGestor").style.display = "block";
            document.querySelector("#seccionLoginGestor").style.display = "none";
            document.querySelector("#seccionBotonVolver").style.display = "none";
            document.querySelector("#navPrincipalGestor").style.display = "block";
            break;
        }
    }
    document.querySelector("#pAvisosLoginGestor").innerHTML = "Al menos uno de los datos no es correcto."
}