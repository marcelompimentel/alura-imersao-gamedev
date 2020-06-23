class Animacao {
	constructor(matriz, imagem, x, largura, altura, largura_sprite, altura_sprite) {
		this.matriz = matriz;
		this.imagem = imagem;
		this.largura = largura;
		this.altura = altura;
		this.x = x;
		this.y = height - this.altura;
		this.largura_sprite = largura_sprite;
		this.altura_sprite = altura_sprite;

		this.frame_atual = 0;
	}


	exibe() {
		image(this.imagem,
			this.x, this.y,
			this.largura, this.altura,
			this.matriz[this.frame_atual][0], this.matriz[this.frame_atual][1],
			this.largura_sprite, this.altura_sprite);

		this.anima();
	}


	anima() {
		this.frame_atual++;
		if(this.frame_atual >= this.matriz.length - 1) {
			this.frame_atual = 0;
		}
	}
}