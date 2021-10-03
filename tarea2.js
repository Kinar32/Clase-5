
document.querySelector("#boton-ingresar").onclick = function () {
    const $nombreUsuario = document.querySelector("#nombre-usuario").value;
    const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const $edadUsuario = document.querySelector("#edad-usuario").value;
    let saludoCompleto = `${$nombreUsuario} ${$apellidoUsuario} de ${$edadUsuario} años de edad`;
    document.querySelector("h1").innerText = `Bienvenido ${$nombreUsuario}`;
    document.querySelector("#respuesta-nombre").innerText = saludoCompleto;
    return false;
}
/*
document.querySelector("#boton-ingresar").onclick = function (){
    const $nombreUsuario = document.querySelector("#nombre-usuario").value;
    document.querySelector("h1").innerText = `Bienvenido ${$nombreUsuario}`;
    return false;
}
*/
