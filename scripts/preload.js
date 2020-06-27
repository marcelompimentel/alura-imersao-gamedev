function preload() {
	fonte_tela_inicial = loadFont('imagens/assets/fonteTelaInicial.otf');

	imagem_tela_inicial = loadImage('imagens/cenario/telaInicial.png');
	imagem_cenario = loadImage('imagens/cenario/floresta.png');
	imagem_gameover = loadImage('imagens/assets/game-over.png');
	imagem_vida = loadImage('imagens/assets/coracao.png');
	imagem_personagem = loadImage('imagens/personagem/correndo.png');
	imagem_inimigo = loadImage('imagens/inimigos/gotinha.png');
	imagem_inimigo_grande = loadImage('imagens/inimigos/troll.png');
	imagem_inimigo_voador = loadImage('imagens/inimigos/gotinha-voadora.png');

	som_do_jogo = loadSound('sons/trilha_jogo.mp3');
	som_do_pulo = loadSound('sons/somPulo.mp3');
	som_gameover = loadSound('sons/round_end.wav');

	fita = loadJSON('fita/fita.json');
}