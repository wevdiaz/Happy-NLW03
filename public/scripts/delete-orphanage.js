
const formDelete = document.querySelector(".list-orphanages #formDelete");
let inputFormID = document.querySelector(".list-orphanages form input[type='hidden']");


formDelete.addEventListener("submit", function(event){

    const confirmation = confirm("Deseja apagar?");    

    const buttonID = event.submitter.getAttribute("id");
    inputFormID.value = buttonID;
    

    if (!confirmation) {          
        
        event.preventDefault();
        return
    }    
    
});




