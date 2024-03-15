let botonEncriptar = document.querySelector("#btnEncriptar");
let botonDesencriptar = document.querySelector("#btnDesencriptar");
let imgMunieco = document.querySelector(".contentMunieco");
let content = document.querySelector(".contentParrafo");
let resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    hideElement();
    let cajaTexto = recibirTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    hideElement();
    let cajaTexto = recibirTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recibirTexto() {
    let cajaTexto = document.querySelector(".cajaTexto");
    return cajaTexto.value.toLowerCase();
}

function hideElement() {
    imgMunieco.classList.add("hidden");
    content.classList.add("hidden");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoEncriptado += 'ai';
        }
        else if (texto[i] == 'e') {
            textoEncriptado += 'enter'; 
        }
        else if (texto[i] == 'i') {
            textoEncriptado += 'imes';
        }
        else if (texto[i] == 'o') {
            textoEncriptado += 'ober';
        }
        else if (texto[i] == 'u') {
            textoEncriptado += 'uber';
        }
        else {
            textoEncriptado += texto[i];
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoDesencriptado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoDesencriptado += 'a';
            i+=1;
        }
        else if (texto[i] == 'e') {
            textoDesencriptado += 'e';
            i +=4;
        }
        else if (texto[i] == 'i') {
            textoDesencriptado += 'i';
            i+=3;
        }
        else if (texto[i] == 'o') {
            textoDesencriptado += 'o';
            i+=3;
        }
        else if (texto[i] == 'u') {
            textoDesencriptado += 'u';
            i+=3;
        }
        else {
            textoDesencriptado += texto[i];
        }
    }
    return textoDesencriptado;
}

const btnCopiar = document.querySelector(".btnCopy");
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
})