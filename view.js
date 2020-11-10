
class UserView {
    
    constructor()

    renderView(model) {



        let card = document.createElement('div');
        card.classList = 'corpo';

        card.innerHTML =
            `
            <p>${model.getDate()}</p>
            <img src = ${model.getImage()}>
            <h2>${model.getTitle()}</h2>
            <p>${model.getExplanation()}</p>
        `
        document.body.appendChild(card);
    }
}

enviar.addEventListener('click', controller.adicionaImagem);