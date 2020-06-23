let imagem_cenario;
let imagem_personagem;
let cenario;
let personagem;
let som_do_jogo;

function preload() {
	imagem_cenario = loadImage('imagens/cenario/floresta.png');
	imagem_personagem = loadImage('imagens/personagem/correndo.png');
	som_do_jogo = loadSound('sons/trilha_jogo.mp3');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	cenario = new Cenario(imagem_cenario, 5);
	personagem = new Personagem(imagem_personagem);
	som_do_jogo.loop();
}


function draw() {
	cenario.exibe();
	cenario.move();
	personagem.exibe();
}
