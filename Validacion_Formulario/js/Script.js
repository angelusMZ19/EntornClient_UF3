
const form = document.querySelector("form");
const email = document.querySelector("#email").value;
//console.log(email);


form.addEventListener("focusout", (event) => {
    if(event.target.tagName.toLowerCase()=='input'){
        let value= event.target.value;
        //console.log(value);
        if(value.trim()==''){
            event.target.style.border= "2px solid red";
        }else {
            event.target.style.border= "2px solid green"
        }
        if (event.target.id === 'email') {
            if (validateEmail(value)) {
                event.target.style.background = "green";
            }else{
                event.target.style.background = "red";
            }
        }
    }
});

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}