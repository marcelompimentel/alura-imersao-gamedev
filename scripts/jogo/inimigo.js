class Inimigo extends Animacao {
	constructor(matriz, imagem, x, largura, altura, largura_sprite, altura_sprite) {
		super(matriz, imagem, x, largura, altura, largura_sprite, altura_sprite);

		this.velocidade = 1;
	}

	move() {
		this.x = this.x - this.velocidade;

		if(this.x < -this.largura) {
			this.x = width;
		}
	}
}