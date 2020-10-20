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

    // make the clone from last image add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // check if the field is empty 
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return 
    }

    //clear the field before from  add in the container from images
    input.value = "";

    // add the clone in the container  #images
    container.appendChild(newFieldContainer);
}


function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload");

    if (fieldsContainer.length <= 1) {
        // clear value from field
        span.parentNode.children[0].value = "";

        return
    }

    // delete the field
    span.parentNode.remove();
    
}



// select yes or no

function toggleSelect(event) {

    // remove the class active
    document.querySelectorAll(".button-select button")
        .forEach(function(button) {
            button.classList.remove("active")
        });

    const button = event.currentTarget
    button.classList.add("active");

    // update the input hidden with value selected
    const input = document.querySelector("[name='open_on_weekends']");

    input.value = button.dataset.value;
    
}


function validate(event) {

    const fieldMap = document.querySelector(".map-container input[name='lat']").value;
   
    if (fieldMap == "") {
        event.preventDefault();
        return alert("O campo do mapa deve ser selecionado");
    }
    
}

    