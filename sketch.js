function setup() {
	createCanvas(windowWidth, windowHeight);

	tela_inicial = new TelaInicial();
	botao_gerenciador = new BotaoGerenciador('Jogar', width / 2, height / 2);
	jogo = new Jogo();

	jogo.setup();

	cenas = {
		jogo: jogo,
		tela_inicial: tela_inicial
	};

	frameRate(62);
	// som_do_jogo.loop();
}


function keyPressed() {
	jogo.key_pressed(key);
}


function draw() {
	cenas[cena_atual].draw();
}