let imagem_cenario;
let imagem_personagem;
let imagem_inimigo;
let imagem_inimigo_grande;

let cenario;
let gameover;
let pontuacao;

let personagem;
let inimigo;
let inimigo_grande;
let inimigo_voador;
const inimigos = [];

let som_do_jogo;
let som_pulo;
let som_gameover;

const matriz_personagem = [
	[0,   0], [220,   0], [440,   0], [660,   0],
	[0, 270], [220, 270], [440, 270], [660, 270],
	[0, 540], [220, 540], [440, 540], [660, 540],
	[0, 810], [220, 810], [440, 810], [660, 810],
];

const matriz_inimigo = [
	[0,   0], [104,   0], [208,   0], [312,   0],
	[0, 104], [104, 104], [208, 104], [312, 104],
	[0, 208], [104, 208], [208, 208], [312, 208],
	[0, 312], [104, 312], [208, 312], [312, 312],
	[0, 418], [104, 418], [208, 418], [312, 418],
	[0, 522], [104, 522], [208, 522], [312, 522],
	[0, 626], [104, 626], [208, 626], [312, 626],
];

const matriz_inimigo_grande = [
	[0,    0], [400,    0], [800,    0], [1200,    0], [1600,    0],
	[0,  400], [400,  400], [800,  400], [1200,  400], [1600,  400],
	[0,  800], [400,  800], [800,  800], [1200,  800], [1600,  800],
	[0, 1200], [400, 1200], [800, 1200], [1200, 1200], [1600, 1200], 
	[0, 1600], [400, 1600], [800, 1600], [1200, 1600], [1600, 1600],
	[0, 2000], [400, 2000], [800, 2000],
];

const matriz_inimigo_voador = [
	[0,   0], [200,   0], [400,   0],
	[0, 150], [200, 150], [400, 150],
	[0, 300], [200, 300], [400, 300],
	[0, 450], [200, 450], [400, 450],
	[0, 600], [200, 600], [400, 600],
	[0, 750],
];

function preload() {
	imagem_cenario = loadImage('imagens/cenario/floresta.png');
	imagem_gameover = loadImage('imagens/assets/game-over.png');
	imagem_personagem = loadImage('imagens/personagem/correndo.png');
	imagem_inimigo = loadImage('imagens/inimigos/gotinha.png');
	imagem_inimigo_grande = loadImage('imagens/inimigos/troll.png');
	imagem_inimigo_voador = loadImage('imagens/inimigos/gotinha-voadora.png');
	som_do_jogo = loadSound('sons/trilha_jogo.mp3');
	som_do_pulo = loadSound('sons/somPulo.mp3');
	som_gameover = loadSound('sons/round_end.wav');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	cenario = new Cenario(imagem_cenario, 5);
	pontuacao = new Pontuacao();
	
	personagem = new Personagem(matriz_personagem, imagem_personagem, 0, 30, 110, 135, 220, 270);
	
	const inimigo = new Inimigo(matriz_inimigo, imagem_inimigo, width - 52, 30, 52, 52, 104, 104, 10, 1000);
	const inimigo_grande = new Inimigo(matriz_inimigo_grande, imagem_inimigo_grande, width, 0, 200, 200, 400, 400, 10, 5000);
	const inimigo_voador = new Inimigo(matriz_inimigo_voador, imagem_inimigo_voador, width - 100, 200, 100, 75, 200, 150, 10, 2500);
	inimigos.push(inimigo);
	inimigos.push(inimigo_grande);
	inimigos.push(inimigo_voador);

	frameRate(62);
	som_do_jogo.loop();
}


function keyPressed() {
	if(key === 'ArrowUp') {
		personagem.pula();
		som_do_pulo.play();
	}
}


function draw() {
	cenario.exibe();
	cenario.move();
	pontuacao.exibe();
	pontuacao.adicionar_ponto();

	personagem.exibe();
	personagem.aplica_gravidade();

	inimigos.forEach(inimigo => {
		inimigo.exibe();
		inimigo.move();
		if(personagem.esta_colidindo(inimigo)) {
			som_do_jogo.stop();
			noLoop();
			image(imagem_gameover, (width - 206) / 2, (height - 39) / 2, 412, 78);
			som_gameover.play();
		}
	});
}