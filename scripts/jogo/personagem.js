class Personagem extends Animacao {
	constructor(matriz, imagem, x, variacao_y, largura, altura, largura_sprite, altura_sprite) {
		super(matriz, imagem, x, variacao_y, largura, altura, largura_sprite, altura_sprite);

		this.variacao_y = variacao_y;
		this.y_inicial = height - this.altura - this.variacao_y;
		this.y = this.y_inicial;

		this.pulos = 0;
		this.limite_pulos = 2;
		this.altura_pulo = 30;
		this.velocidade_pulo = 0;
		this.gravidade = 3;
	}

	pula() {
		if(this.pulos < this.limite_pulos) {
			this.velocidade_pulo = -this.altura_pulo;
			this.pulos++;
		}
	}

	aplica_gravidade() {
		this.y = this.y + this.velocidade_pulo;
		this.velocidade_pulo = this.velocidade_pulo + this.gravidade;

		if(this.y > this.y_inicial) {
			this.y = this.y_inicial;
			this.pulos = 0;
		}
	}

	esta_colidindo(inimigo) {
		// noFill();
		// rect(this.x, this.y, this.largura, this.altura);
		// rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
		const precisao = .7;
		const colisao = collideRectRect(
			this.x, this.y, this.largura * precisao, this.altura * precisao,
			inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
		return colisao;
	}
}