const rentedClass = "dashboard__item__img--rented"
const returnClass = "dashboard__item__button--return"

function alterarStatus(id){
    

    //Pega o item com o identificador "game-id"
    var item = document.getElementById("game-"+id);
    var status = "available"

    for (const child of item.children) {
        if(child.tagName == "DIV"){
            if(child.classList.contains(rentedClass)){
                if(confirm("Tem certeza de que quer devolver?")){
                    child.classList.remove(rentedClass);
                    status = "available";
                }else{
                    break;
                }
            }else{
                child.classList.add(rentedClass);
                status = "rented";
            }
        }else if(child.tagName == "A"){
            if(status == "available"){
                child.classList.remove(returnClass);
                child.innerHTML = "Alugar";
            }else{
                child.classList.add(returnClass);
                child.innerHTML = "Devolver";
            }
        }
    }
}