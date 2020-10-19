// Create map 
const map = L.map('mapid').setView([-23.6060704,-47.0277716], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],    
});

let marker;

// create and add marker
map.on("click", function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;


    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
});



// add the field photo

function addPhotoField() {
    // get container photos #images
    const container = document.querySelector("#images");

    // get container to double .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload")

    // realizar o clone da last imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo está vazio
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return 
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = "";

    // add o clone ao container de #images
    container.appendChild(newFieldContainer);
}


function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload");

    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "";

        return
    }

    // deletar o campo
    span.parentNode.remove();

    // aula parou em 1:39
}



// select yes or no

function toggleSelect(event) {

    // retirar a class active
    document.querySelectorAll(".button-select button")
        .forEach(function(button) {
            button.classList.remove("active")
        });

    const button = event.currentTarget
    button.classList.add("active");

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector("[name='open_on_weekends']");

    input.value = button.dataset.value;
    
}


function validate(event) {

    // validar se lat e lng estão preenchidos
    // preventDefault();
    // alert("Selecione um ponto no mapa")
}

    