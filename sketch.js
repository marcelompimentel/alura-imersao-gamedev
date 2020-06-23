let imagem_cenario;
let imagem_personagem;
let imagem_inimigo;
let cenario;
let personagem;
let som_do_jogo;
let som_pulo;

const matriz_inimigo = [
	[0, 0],
	[104, 0],
	[208, 0],
	[312, 0],
	[0, 104],
	[104, 104],
	[208, 104],
	[312, 104],
	[0, 208],
	[104, 208],
	[208, 208],
	[312, 208],
	[0, 312],
	[104, 312],
	[208, 312],
	[312, 312],
	[0, 418],
	[104, 418],
	[208, 418],
	[312, 418],
	[0, 522],
	[104, 522],
	[208, 522],
	[312, 522],
	[0, 626],
	[104, 626],
	[208, 626],
	[312, 626],
];

const matriz_personagem = [
	[0, 0],
	[220, 0],
	[440, 0],
	[660, 0],
	[0, 270],
	[220, 270],
	[440, 270],
	[660, 270],
	[0, 540],
	[220, 540],
	[440, 540],
	[660, 540],
	[0, 810],
	[220, 810],
	[440, 810],
	[660, 810]
 ];

function preload() {
	imagem_cenario = loadImage('imagens/cenario/floresta.png');
	imagem_personagem = loadImage('imagens/personagem/correndo.png');
	imagem_inimigo = loadImage('imagens/inimigos/gotinha.png');
	som_do_jogo = loadSound('sons/trilha_jogo.mp3');
	som_pulo = loadSound('sons/somPulo.mp3');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	cenario = new Cenario(imagem_cenario, 5);
	personagem = new Personagem(matriz_personagem, imagem_personagem, 0, 110, 135, 220, 270);
	inimigo = new Inimigo(matriz_inimigo, imagem_inimigo, width - 52, 52, 52, 104, 104);
	som_do_jogo.loop();
}


function keyPressed() {
	if(key === 'ArrowUp') {
		personagem.pula();
		som_pulo.play();
	}
}


function draw() {
	cenario.exibe();
	cenario.move();

	personagem.exibe();
	personagem.aplica_gravidade();

	inimigo.exibe();
	inimigo.move();

	if(personagem.esta_colidindo(inimigo)) {
		console.log('colidiu');
		noLoop();
	}
}
