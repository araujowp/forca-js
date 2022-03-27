class Palavras {

    constructor () {
        this._palavras = ["WAGNER", "MARIA", "FLAVIA","JULIO CESAR",
                        "LUIZA", "ANDREIA",
                    "ADALIA","JOCELINO", "JOELMA","EMILY","SOFIA","HERMANDO"];

    }

    _limpar(palavra){
        var temp  = palavra.toUpperCase();
        temp = temp.replaceAll('Á','A'); 
        temp = temp.replaceAll('À','A'); 
        temp = temp.replaceAll('Ã','A'); 
        temp = temp.replaceAll('Â','A'); 
        temp = temp.replaceAll('È','E'); 
        temp = temp.replaceAll('É','E'); 
        temp = temp.replaceAll('Í','I'); 
        temp = temp.replaceAll('Ì','I'); 
        temp = temp.replaceAll('Ó','O'); 
        temp = temp.replaceAll('Ó','O'); 
        temp = temp.replaceAll('Ô','O'); 
        temp = temp.replaceAll('Õ','O'); 
        temp = temp.replaceAll('Ú','U'); 
        temp = temp.replaceAll('Ù','U'); 
        return temp;
    }

    getSorteada(){
        return  this._limpar(this._palavras[Math.floor(Math.random() * this._palavras.length)]);
    }
}