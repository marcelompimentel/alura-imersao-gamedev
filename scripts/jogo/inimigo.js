class Inimigo extends Animacao {
	constructor(matriz, imagem, x, variacao_y, largura, altura, largura_sprite, altura_sprite, velocidade) {
		super(matriz, imagem, x, variacao_y, largura, altura, largura_sprite, altura_sprite, velocidade);

		this.velocidade = velocidade;
		this.x = width;
	}

	move() {
		this.x = this.x - this.velocidade;
	}

	aparece() {
		this.x = width;
	}
}