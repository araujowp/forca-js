class Son {
  static acerto() {
      console.log('acertamos wagner');
    this._play("sons/confirm-jingle.wav");
  }

  static erro() {
    this._play("sons/error.mp3");
  }

  static vitoria() {
    this._play("sons/victory.mp3");
  }

  static derrota() {
    this._play("sons/derrota.mp3");
  }

  static _play(arquivo) {
    const son = new Audio(arquivo);
    son.play();
  }
}
