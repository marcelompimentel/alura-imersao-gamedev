class Inimigo extends Animacao {
	constructor(matriz, imagem, x, variacao_y, largura, altura, largura_sprite, altura_sprite, velocidade, delay) {
		super(matriz, imagem, x, variacao_y, largura, altura, largura_sprite, altura_sprite, velocidade, delay);

		this.velocidade = velocidade;
		this.delay = delay;
		this.x = width + this.delay;
	}

	move() {
		this.x = this.x - this.velocidade;

		if(this.x < -this.largura - this.delay) {
			this.x = width;
		}
	}
}