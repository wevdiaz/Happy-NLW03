
const cards = document.querySelectorAll(".list-orphanages .orphanage-card button");
const formDelete = document.querySelector(".list-orphanages #formDelete");


// for (card of cards) {
//     const containerCard = card.parentNode;
//     const cardid = containerCard.querySelector(".info-orphanage input").value;

//     card.addEventListener("submit", function(event){

//         const confirmation = confirm("Deseja apagar?");

//         if (!confirmation) {
//             console.log("continuar")
//             event.preventDeafault();
//             return
//         }                

        
        
//     });
// }


formDelete.addEventListener("submit", function(event){

    const confirmation = confirm("Deseja apagar?");

    if (!confirmation) {        
        event.preventDefault();
        return
    }                

    
    
});




