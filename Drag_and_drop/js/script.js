// document.addEventListener("DOMContentLoaded", function () {
// array vacio
var array = [];

// Declarar els objects que farem servir
const dropArea = document.querySelector(".drop-area");
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');

events=['dragover', 'dragleave', 'drop'];

events.forEach(function(evt) {
    dropArea.addEventListener(evt, prevDefault);
})
function prevDefault (e) {
    e.preventDefault();
}

dropArea.addEventListener("dragover", function () {
    dropArea.classList.add('active');
    dragDropText.innerText = "Andale wey ponlo aqui con confianza....";
});

dropArea.addEventListener("dragleave", function () {
    dropArea.classList.remove('active');
    dragDropText.innerText = "Arrastra el fichero hasta aquí....";
});

// ctrl + k + u descomenta
dropArea.addEventListener("drop", function (e) {
    array = array.concat(Array.from(e.dataTransfer.files));
    console.log(array);
});
// })