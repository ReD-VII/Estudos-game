//Importando bird
import {bird, birdStatus} from "./bird.js";
//Import Control
import {statusControle} from "./control.js";
//Import Snage
import {statusStage} from "./stage.js";




//Canvas config
const canvas = window.document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Contexto
const ctx = canvas.getContext('2d');


//Carregando Sprite
const source = new Image();
source.src = '../_img/sprites.png';





//Loop game
function loop(){
    ctx.drawImage(source, 0, 0, bird.with, bird.destHeight, bird.positionX, bird.positionY, bird.with, bird.height)
    requestAnimationFrame(loop);
}
loop();
