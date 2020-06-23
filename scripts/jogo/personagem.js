class Personagem {
	constructor(imagem) {
		this.imagem = imagem;

		this.personagem_largura = 220;
		this.personagem_altura = 270;

		this.matriz = new Array();
		for(var j = 0; j < 4; j++) {
			for(var k = 0; k < 4; k++) {
				this.matriz.push([this.personagem_largura * k, this.personagem_altura * j]);
			}
		}

		this.frame_atual = 0;
	}


	exibe() {
		image(this.imagem,
			0, height - this.personagem_altura / 2,
			this.personagem_largura / 2, this.personagem_altura / 2,
			this.matriz[this.frame_atual][0], this.matriz[this.frame_atual][1],
			this.personagem_largura, this.personagem_altura);

		this.anima();
	}


	anima() {
		this.frame_atual++;
		if(this.frame_atual >= this.matriz.length - 1) {
			this.frame_atual = 0;
		}
	}
}