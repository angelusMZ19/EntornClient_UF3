const category = document.getElementById("categorias");
const subcat = document.getElementById("subcategorias");

fetch('php/getCats.php') 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(value => {
            let option = document.createElement("option");
            option.value = value.id;
            option.text = value.nom;
            
            category.appendChild(option);
        });
       
        recarga();
    })
    .catch((error) => {
        console.error(error)
    });


function recarga(){
    let formData = new FormData();
    formData.append('categoria', category.value); 
    let options = {
        method: 'POST',
        body: formData
    };

    fetch('php/getSubCats.php', options) 
        .then((response) => response.json())
        .then((data) => {
            
            subcat.innerHTML = "";
            data.forEach(value => {
                let option = document.createElement("option");
                option.value = value.id;
                option.text = value.nom;
                subcat.appendChild(option);
            });
        })
        .catch((error) => {
            console.error(error); 
        });
}
category.addEventListener("change", function () {
    recarga();
    
});
