//Importando bird
import {bird, birdStatus} from "./bird.js";
//Import Control
import {statusControle} from "./control.js";
//Import Snage
import {statusStage, floor, bgStage} from "./stage.js";


//Canvas config
const canvas = window.document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Contexto
const ctx = canvas.getContext('2d');

//Carregando Sprite
const source = new Image();
source.src = '../_img/sprites.png';

//Atribuindo posionamento do floor
floor.positionY = canvas.height -112; //Altera o valor do posicionamento Y do florr. Nao consegui tratar esse dado dentro do modulo bird.js.

//Atribuindo posionamento Y do bgStage 
bgStage.positionY = canvas.height -112;

//Loop game
function loop(){
    bird.update();



    // Passando o parametro "ctx" e "source" para o modulo
    bgStage.drawn(ctx, source, bgStage.positionY, canvas.width, canvas.height);// Desenhando o BG.

    // Passando o parametro "ctx", "source" e "floor.positionY para o modulo
    floor.drawn(ctx, source, floor.positionY);// enviado para o modulo o contexto, a fonte da imagem, e o posicionamento Y na tela.

    // Passando o parametro "ctx" e "source" para o modulo
    bird.drawn(ctx, source); //Chama a função desenha enviando os dados (ctx - "contexto do canvas") e (source que e nada mais nada menos que a sprite do bird).







    requestAnimationFrame(loop);


}
loop();
