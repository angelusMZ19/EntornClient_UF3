// array vacío
var array = [];

const dropArea = document.querySelector(".drop-area");
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');

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
    console.log(array);
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
});

function showFiles(fileArray) {
    if (fileArray.length > 0) {
        preview.innerHTML = '';
        fileArray.forEach((file, index) => {
            processFile(file, index);
        });
    } else {
        console.log("Sin archivos para mostrar.");
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
                            <span onclick="remove(${index})" class="material-symbols-outlined removeBtn">X</span>
                        </div>`;
            preview.innerHTML += prev;
        }
    } else {
        console.log(`El archivo ${file.name} no es una imagen.`);
    }
}

function isImageFile(file) {

    const lowerCaseFile = file.name.toLowerCase();

    return extensiones.some(ext => lowerCaseFile.endsWith(ext));
}

function readDataAsURL(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        console.log("Data URL:", e.target.result);
    };
    reader.readAsDataURL(file);
}


function removeBtn(i) {
  
  if (i >= 0 && i < files.length) {
    files.splice(i, 1); 
    showFiles(); 
    clearPreview();
  } else {
    console.error("Índex fora de límits");
  }
}

function clearPreview() {
  var previewDiv = document.getElementById('preview');
  if (previewDiv) {
    previewDiv.innerHTML = '';
  }
}
