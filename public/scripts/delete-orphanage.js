const cards = document.querySelectorAll(".list-orphanages .orphanage-card button");

for (card of cards) {
    const containerCard = card.parentNode;
    const cardid = containerCard.querySelector(".info-orphanage input").value;

    card.addEventListener("click", function(){

        const confirmation = confirm("Deseja apagar?");

        if (!confirmation) {
            console.log("continuar")
            return
        }


        console.log(cardid);
        console.log("pode ser apagado")
    });
}

console.log(cards)


