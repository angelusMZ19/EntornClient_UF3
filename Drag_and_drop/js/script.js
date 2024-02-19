// array vacío
var array = [];

const dropArea = document.querySelector(".drop-area");
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');
const form = document.querySelector('form');

const events = ['dragover', 'dragleave', 'drop'];

events.forEach(function (evt) {
    dropArea.addEventListener(evt, prevDefault);
});

function prevDefault(e) {
    e.preventDefault();
}

dropArea.addEventListener("dragover", function () {
    dropArea.classList.add('active');
    dragDropText.innerText = "¡Ándale, wey, ponlo aquí con confianza....";
});

dropArea.addEventListener("dragleave", function () {
    dropArea.classList.remove('active');
    dragDropText.innerText = "Arrastra el fichero hasta aquí....";
});

dropArea.addEventListener("drop", function (e) {
    array = array.concat(Array.from(e.dataTransfer.files));
    dropArea.classList.remove('active');
    dragDropText.innerText = "Arrastra el fichero hasta aquí....";
    showFiles(array);
});

button.addEventListener("click", function (e) {
    e.preventDefault();
    input.click();
});

input.addEventListener("change", function () {
    let inputFiles = input.files;
    array = array.concat(Array.from(inputFiles));
    showFiles(array);
    form.submit();
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    const dataTransfer = new DataTransfer();
    files.forEach(file=>{
        dataTransfer.items.add(file);
    })
    input.files = dataTransfer.files;
    form.submit();
    console.log("enviado");
});

function showFiles(fileArray) {
    if (fileArray.length >= 0) {
        preview.innerHTML = '';
        fileArray.forEach((file, index) => {
            processFile(file, index);
        });
    } else {
        console.log("Sin archivos para mostrar.");//
    }
}

function processFile(file, index) {
    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const docType = file.type;

    if (validExtensions.includes(docType)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            let fileURL = reader.result;
            let prev = `<div class="previewImage">
                            <img src="${fileURL}"/>
                            <span>${file.name}</span>
                            <span onclick="removeBtn(${index})" class="material-symbols-outlined removeBtn">X</span>
                        </div>`;
            preview.innerHTML += prev;
        }
    }
}

function removeBtn(i) {
    array.splice(i, 1); 
    preview.innerHTML = '';
    showFiles(array); 
}