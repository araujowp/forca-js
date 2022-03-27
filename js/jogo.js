class Jogo {
  constructor() {
    this._alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    this._letrasErradas = [];
    this.letrasCertas = [' '];
      this._palavra = new Palavras();
      this._palavraSecreta = this._palavra.getSorteada();
    this._fimJogo = false;
    this._vitoria = false;
  }

  teste(letra) {
    if(this._fimJogo){
        Son.erro();
        return;    
    }

    if (this._palavraSecreta.includes(letra)) {
      Son.acerto();
      this.letrasCertas.push(letra);
    } else {
        Son.erro();
      this._letrasErradas.push(letra);
    }

    this.atualizar();
 
    if(this._descobriu()){
      this._fimJogo =  true;
      Son.vitoria();
    }
    
    if(this._letrasErradas.length == 6){
      this._fimJogo =  true;
      Son.derrota();
      alert("a palavra era " + this._palavraSecreta);
    }
    
  }
  
  _descobriu(){
    console.log(this._palavraSecreta);
    for (var i = 0; i < this._palavraSecreta.length; i++) {
      if(!this.letrasCertas.includes(this._palavraSecreta[i])){
        return false;
      }
    }
    return true; 
  }

  atualizar() {
    var letras = this._alfabeto.split(" ");

    var html = " ";
    letras.forEach((letra) => {
      var temp = " ";
      if (this._letrasErradas.includes(letra)) {
        temp += `<a class="errado" >${letra}</a> `;
      }

      if (this.letrasCertas.includes(letra)) {
        temp += `<a class="certo" >${letra}</a> `;
      }

      if (temp == " ") {
        temp += `<a class="ativo" onClick="jogo.teste('${letra}')">${letra}</a> `;
      }
      html += temp;
    });

    var alfabetoHTML = document.querySelector("#alfabeto");
    alfabetoHTML.innerHTML = html;

    var caminhoimg = `imagens/boneco${this._letrasErradas.length}.jpg`;
    document.getElementById("boneco").src = caminhoimg;

    let _mascara = "";
    for (var i = 0; i < this._palavraSecreta.length; i++) {

      if (this.letrasCertas.includes(this._palavraSecreta[i]) || this._palavraSecreta[i] == ' ' ) {
          if(this._palavraSecreta[i] != ' '){
              _mascara += this._palavraSecreta[i] + "&nbsp;";
          }else {
              _mascara += '&nbsp &nbsp';
          }
      } else {
        _mascara += "?";
      }
    }
    document.getElementById("secreta").innerHTML = _mascara;
  }
}
