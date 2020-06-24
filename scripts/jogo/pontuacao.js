class Pontuacao {
	constructor() {
		this.pontos = 0;
	}

	exibe() {
		fill('#fff');
		textSize(50);
		textAlign(RIGHT);
		text(parseInt(this.pontos), width - 30, 50);
	}

	adicionar_ponto() {
		this.pontos += .2;
	}
}