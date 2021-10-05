let botonIngresar = document.querySelector("#boton-ingresar");

function cambiarSaludo(e) {
    const $nombreUsuario = document.querySelector("#nombre-usuario").value;
    const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const $edadUsuario = document.querySelector("#edad-usuario").value;
    let saludoCompleto = `${$nombreUsuario} ${$apellidoUsuario} de ${$edadUsuario} años de edad`;
    document.querySelector("#respuesta-nombre").innerText = saludoCompleto;
    e.preventDefault();
}

function cambiarEncabezado(e){
    const $nombreUsuario = document.querySelector("#nombre-usuario").value;
    document.querySelector("h1").innerText = `Bienvenido ${$nombreUsuario}`;
    e.preventDefault();
}

botonIngresar.addEventListener("click",cambiarSaludo,);
botonIngresar.addEventListener("click",cambiarEncabezado,);
