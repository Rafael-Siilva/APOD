class Model {
    constructor() {


        this._date = busca.value;
        this._title = '';
        this._image = '';
        this._explanation = '';
    }

    buscaImagem() {


        let request = new XMLHttpRequest();

        request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=ECpoRsNJWK3SQxK9HfxJQcXii7ZCh7YXxaaffIg0&date=' + this._date, false);



        request.addEventListener('load', () => {

            if (request.status == 200) {
                let dados = this._processaResponse(request.responseText);

                this._atualiza(dados)
            }
        })

        request.send();

        console.log(request);
    }

    _processaResponse(responseString) {


        let response = JSON.parse(responseString);

        return response;

    }

    _atualiza(dados) {


        this._date = dados.date;
        this._title = dados.title;
        this._image = dados.url;
        this._explanation = dados.explanation;
    }

    getTitle() {
        return this._title;
    }

    getDate() {
        return this._date;
    }

    getImage() {
        return this._image;
    }

    getExplanation() {
        return this._explanation;
    }
}





