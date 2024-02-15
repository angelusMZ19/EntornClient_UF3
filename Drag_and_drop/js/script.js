//array vacio
var array=[];
// Declarar els objects que farem servir
const dropArea= query.selector('.drop-area');
const dragDropText= query.selector('h2');
const button = query.selector('button');
const input = query.selector('#input-file');
const preview = query.selctor('#preview');



events=['dragover', 'dragleave', 'drop'];
events.forEach(function(evt) {
    dropArea.addEventListener(evt, prevDefault);
})
function prevDefault (e) {
    e.preventDefault();
}
dropArea.addEventListener("dragover", function(){
    dropArea.classList.add('active');
    dropArea.innerText = "Arrastra el fichero hasta aqui....";
});

dropArea.addEventListener("dragleave", function(){
    dropArea.classList.remove('active');
    dropArea.innerText = "....";
});


//ctrl + k + u descomenta
dropArea.addEventListener("drop", (event)=>{});
dropArea.addEventListener("drop", function(e){});
