class Jogo {
	constructor() {
		this.indice = 0;

		this.mapa = fita.mapa;
	}


	setup() {
		cenario = new Cenario(imagem_cenario, 5);
		vida = new Vida(fita.configuracoes.vida_maxima, fita.configuracoes.vida_inicial);
		pontuacao = new Pontuacao();

		personagem = new Personagem(matriz_personagem, imagem_personagem, 0, 30, 110, 135, 220, 270);
		const inimigo = new Inimigo(matriz_inimigo, imagem_inimigo, width - 52, 30, 52, 52, 104, 104, 10);
		const inimigo_grande = new Inimigo(matriz_inimigo_grande, imagem_inimigo_grande, width, 0, 200, 200, 400, 400, 10);
		const inimigo_voador = new Inimigo(matriz_inimigo_voador, imagem_inimigo_voador, width - 100, 200, 100, 75, 200, 150, 10);

		inimigos.push(inimigo);
		inimigos.push(inimigo_grande);
		inimigos.push(inimigo_voador);
	}


	key_pressed(key) {
		if(key === 'ArrowUp') {
			personagem.pula();
			som_do_pulo.play();
		}
	}


	draw() {
		cenario.exibe();
		cenario.move();
		vida.draw();
		pontuacao.exibe();
		pontuacao.adicionar_ponto();

		personagem.exibe();
		personagem.aplica_gravidade();

		const linha_atual = this.mapa[this.indice];
		const inimigo = inimigos[linha_atual.inimigo];
		const inimigo_visivel = inimigo.x < - inimigo.largura;

		inimigo.velocidade = linha_atual.velocidade;

		inimigo.exibe();
		inimigo.move();

		if(inimigo_visivel) {
			this.indice++;
			inimigo.aparece();
			if(this.indice > this.mapa.length - 1) {
				this.indice = 0;
			}
		}

		if(personagem.esta_colidindo(inimigo)) {
			vida.perde_vida();
			personagem.tornar_invencivel();
			
			if(vida.vidas === 0) {
				som_do_jogo.stop();
				noLoop();
				image(imagem_gameover, (width - 206) / 2, (height - 39) / 2, 412, 78);
				som_gameover.play();
			}
		}
	}
}