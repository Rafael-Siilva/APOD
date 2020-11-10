class UserController {
    constructor()

    adicionaImagem() {


        let page = new UserModel();
        page.buscaImagem();

        let view = new UserView();
        view.renderView(page)
    }
}

let controller = new UserController();