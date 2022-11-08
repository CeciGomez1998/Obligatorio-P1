

//validar campos vacíos en registro

function validarCamposVaciosRegistro(username, clave, nombreCompleto) {
  let campoValido = document.querySelector("#usernameRegistro").value;
  if (username !== "" && clave !== "" && nombreCompleto !== "") {
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
      if (codigo >= 65 && codigo <= 90) {
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


// validar imagen 



























/*
 * Valida que el dato recibido no sea vacío
 * @param {string} txt
 * @returns boolean
 */


 /*function isNotEmpty(txt) {
    return txt.length > 0;
  }
  
  function isValidPass(txt) {
    return txt.length > 5;
  }
  function isValidNumber(num) {
    return !isNaN(num);
  }
  

function isValidSelection (selecciona){
    return selecciona = true;
}



  /**
   * Busca al usuario con los datos recibidos dentro del array de empresas
   * @param {string} nombreUsuEmpresaP
   * @param {string} claveP
   * @returns []|null
   */
 /* function findUserEmpresa(nombreUsuEmpresaP, claveP) {
    let empresaYaLogueada = null;
    empresa.forEach(function (empresa) {
      if (empresa.nombreUsuEmpresa === nombreUsuEmpresaP && empresa.clave === claveP) {
            empresaYaLogueada = empresa;
      }
    });
    return empresaYaLogueada;
  }
  /**
   * Busca al usuario con los datos recibidos dentro del array de importador
   * @param {string} usernameP
   * @param {string} claveP
   * @returns []|null
   */
  /*function findUserImportador(usernameP, claveP) {
    let importadorYaLogueado = null;
    importador.forEach(function (importador) {
      if (importador.nombreDeUsuario === usernameP && importador.clave === claveP) {
        importadorYaLogueado = importador;
      }
    });
    return importadorYaLogueado;
  }

  /**
   * Validacion de campos basadas en las reglas recibidas
   * @param {array} validations
   * @returns
   */
  /*function formValidatorImportador(validations) {
    let iterador = 0;
    let failedValidationImportador = null;
  
    while (iterador < validations.length && !failedValidationImportador) {
      const value = document.querySelector(validations[iterador].id).value;
      if (!validations[iterador].fnValidate(value)) {
        failedValidationImportador = validations[iterador];
      }
      iterador++;
    }
    return failedValidationImportador;
  }
  
  function formValidatorEmpresa(validations) {
    let iterador = 0;
    let failedValidationEmpresa = null;
  
    while (iterador < validations.length && !failedValidationEmpresa) {
      const value = document.querySelector(validations[iterador].id).value;
      if (!validations[iterador].fnValidate(value)) {
        failedValidationEmpresa = validations[iterador];
      }
      iterador++;
    }
    return failedValidationEmpresa;
  }*/