class TelaInicial {
	constructor() {

	}


	draw() {
		this._imagemDeFundo();
		this._texto();
		this._botao();
	}


	_imagemDeFundo() {
		image(imagem_tela_inicial, 0, 0, width, height);
	}


	_texto() {
		textFont(fonte_tela_inicial);
		textAlign(CENTER);
		textSize(50);
		text('aventuras de', width / 2, height / 3);
		textSize(90);
		text('hipstah', width / 2, height / 5 * 2.3);
	}


	_botao() {
		botao_gerenciador.y = height / 7 * 5;
		botao_gerenciador.draw();
	}
}