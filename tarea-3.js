function sumarHoras() {
    const horasVideo1 = Number(document.querySelector("#horas-video-1").value);
    const horasVideo2 = Number(document.querySelector("#horas-video-2").value);
    const horasVideo3 = Number(document.querySelector("#horas-video-3").value);
    const horasVideo4 = Number(document.querySelector("#horas-video-4").value);
    const horasVideo5 = Number(document.querySelector("#horas-video-5").value);
    const horasVideo = [horasVideo1, horasVideo2, horasVideo3, horasVideo4, horasVideo5];
    let i;
    for (i = 0; i < horasVideo.length; i++) {
        sumaHorasVideo = sumaHorasVideo + horasVideo[i];
    }
}

function convertirHorasASegundos(horas) {
    return horas * 3600;
}

function sumarMinutos() {
    const minutosVideo1 = Number(document.querySelector("#minutos-video-1").value);
    const minutosVideo2 = Number(document.querySelector("#minutos-video-2").value);
    const minutosVideo3 = Number(document.querySelector("#minutos-video-3").value);
    const minutosVideo4 = Number(document.querySelector("#minutos-video-4").value);
    const minutosVideo5 = Number(document.querySelector("#minutos-video-5").value);
    const minutosVideo = [minutosVideo1, minutosVideo2, minutosVideo3, minutosVideo4, minutosVideo5];
    let i;
    for (i = 0; i < minutosVideo.length; i++) {
        sumaMinutosVideo = sumaMinutosVideo + minutosVideo[i];
    }
}

function convertirMinutosASegundos(minutos) {
    return minutos * 60;
}

function sumarSegundos() {
    const segundosVideo1 = Number(document.querySelector("#segundos-video-1").value);
    const segundosVideo2 = Number(document.querySelector("#segundos-video-2").value);
    const segundosVideo3 = Number(document.querySelector("#segundos-video-3").value);
    const segundosVideo4 = Number(document.querySelector("#segundos-video-4").value);
    const segundosVideo5 = Number(document.querySelector("#segundos-video-5").value);
    const segundosVideo = [segundosVideo1, segundosVideo2, segundosVideo3, segundosVideo4, segundosVideo5];
    let i;
    for (i = 0; i < segundosVideo.length; i++) {
        sumaSegundosVideo = sumaSegundosVideo + segundosVideo[i];
    }
}

function sumarSegundosTotales(horasASegundos, minutosASegundos, segundos) {
    return horasASegundos + minutosASegundos + segundos;
}

let sumaHorasVideo = 0;
let sumaMinutosVideo = 0;
let sumaSegundosVideo = 0;

document.querySelector("#boton-calcular-tiempo").onclick = function () {
    sumarHoras();
    sumarMinutos();
    sumarSegundos();
    let horasConvertidasASegundos = convertirHorasASegundos(sumaHorasVideo);
    let minutosConvertidosASegundos = convertirMinutosASegundos(sumaMinutosVideo);
    let segundosTotales = sumarSegundosTotales(horasConvertidasASegundos, minutosConvertidosASegundos, sumaSegundosVideo);
    
    document.querySelector("#resultado").value = `La suma de tiempo total de sus videos es de ${segundosTotales} segundos.`;
    return false;
}
