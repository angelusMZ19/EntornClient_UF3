const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const confirmarContrasenya = document.querySelector("#repetirContrasenya");
const contrasenya = document.querySelector("#contrasenya");
const condicionContrasenya = document.getElementById("condiciones").getElementsByTagName("li");
const postal = document.querySelector("#postal");

form.addEventListener("focusout", (event) => {
    if (event.target.tagName.toLowerCase() === 'input') {
        let value = event.target.value;
        if (event.target.id === 'nombre') {
            let errorNom = document.getElementById("errorNom");
            if (value.trim() === '') {
                nombre.style.border = "red 2px solid";
                event.target.style.background = "rgb(242, 165, 165)";
                errorNom.innerHTML = "<p>Ingrese su nombre.</p>";
            } else {
                event.target.style.background = "rgb(49, 210, 124)";
                nombre.style.border = "rgb(22, 104, 49) 2px solid";
                errorNom.innerHTML = "";
            }
        }
        if (event.target.id === 'email') {
            if (value.trim() == '') {
                emailInput.style.border = "red 2px solid";
            }else{
                validateEmail();
            }
        }
        if (event.target.id === 'contrasenya') {
            if (value.trim() === '') {
                event.target.style.background = "rgb(242, 165, 165)";
                nombre.style.border = "red 2px solid";
            } 
        }
        if (event.target.id === 'postal') {
            if (value.trim() === '') {
                event.target.style.background = "rgb(242, 165, 165)";
            } else {
                event.target.style.background = "rgb(49, 210, 124)";
            }
        }
        if (event.target.id === 'repetirContrasenya') {
            if (value.trim() === ''){
                event.target.style.background = "rgb(242, 165, 165)";
            }else{
                validacionConfirmacionContrasenya(); 
            }
            
        }
       
    }
});

function validateEmail() {
    let emailValue = emailInput.value;
    let errorEmail = document.getElementById("mensajeErrorEmail");


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        emailInput.style.background = "rgb(49, 210, 124)";
        emailInput.style.border= "rgb(22, 104, 49) 2px solid";//verdeOscuro
        errorEmail.innerHTML = "";
    } else {
        emailInput.style.background = "rgb(242, 165, 165)";
        errorEmail.innerHTML = "<p>Ingrese un correo electrónico válido.</p>";
    }
}

contrasenya.addEventListener("input", function () {
    let passwordValue = this.value;

    let isValid = true;
    

        if (passwordValue.length < 8 || passwordValue.length > 15) {
            isValid = false;
            muestraErroresContrasenya(0);
        } else {
            actualizarColor(0, true);
        }

        if (!/[a-z]/.test(passwordValue)) {
            isValid = false;
            muestraErroresContrasenya(1);
        } else {
            actualizarColor(1, true);
        }

        if (!/[A-Z]/.test(passwordValue)) {
            isValid = false;
            muestraErroresContrasenya(2);
        } else {
            actualizarColor(2, true);
        }

        if (!/[0-9]/.test(passwordValue)) {
            isValid = false;
            muestraErroresContrasenya(3);
        } else {
            actualizarColor(3, true);
        }

        if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordValue)) {
            isValid = false;
            muestraErroresContrasenya(4);
        } else {
            actualizarColor(4, true);
        }
        

        if (isValid) {
            contrasenya.style.background = "rgb(49, 210, 124)";
        } else {
            contrasenya.style.background = "rgb(242, 165, 165)";
        }
    
});

function validacionConfirmacionContrasenya() {
    let valorContrasenya = contrasenya.value;
    let confirmacionValorContrasenya = confirmarContrasenya.value;
    let mensajeErrorContrasenya = document.getElementById("mensajeErrorContrasenya");

    if (confirmacionValorContrasenya == valorContrasenya) {
        confirmarContrasenya.style.background = "rgb(49, 210, 124)";
        contrasenya.style.background = "rgb(49, 210, 124)";
        mensajeErrorContrasenya.innerHTML = "";
    } else {
        confirmarContrasenya.style.background = "rgb(242, 165, 165)";
        contrasenya.style.background = "rgb(242, 165, 165)";
        mensajeErrorContrasenya.innerHTML = "<p>Las contraseñas no coinciden.</p>";
        muestraErroresContrasenya(5);
    }
}

function muestraErroresContrasenya(conditionIndex) {
    let conditionElement = condicionContrasenya[conditionIndex];
    if (conditionElement) {
        conditionElement.style.color = "rgb(242, 165, 165)";
    }
}


function actualizarColor(conditionIndex, isValid) {
    condicionContrasenya[conditionIndex].style.color = isValid ? "green" : "rgb(242, 165, 165)";
}

form.addEventListener("submit", function (event) {
    if (postal.value.trim() === '') {
        event.preventDefault();
        postal.style.background = "rgb(242, 165, 165)";
        let mensageError=document.getElementById("error");
        mensageError.innerHTML ="<p>La dirección postal no puede estar vacía.</p>";
        
    }
});


