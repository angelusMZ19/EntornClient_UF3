
let btnEdit = document.querySelectorAll(".btnEdit");
btnEdit.forEach(el=>{
    el.addEventListener("click", function(){
        let formData = new FormData();
        formData.append("id", this.getAttribute("idProd"));
        let options = {
                method: 'POST',
                body: formData
        }

        fetch("getProducte.php", options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("nomProducte").value = data.nom;
            document.getElementById("addEdit").value = data.addEdit;
        })
        .catch((error) => {});
    })
});