//Importando bird
import {bird, birdStatus} from "./bird.js";
//Import Control
import {statusControle} from "./control.js";
//Import Snage
import {statusStage, floor, bgStage} from "./stage.js";
//TEla de inicio
import {screen, home, telaAtiva, mudaTela} from "./screen.js"

//Canvas config
const canvas = window.document.querySelector('canvas');
export const width = canvas.width = window.innerWidth;
export const height = canvas.height = window.innerHeight;

//Contexto
const ctx = canvas.getContext('2d');

//Carregando Sprite
const source = new Image();
source.src = '../_img/sprites.png';

//Atribuindo posionamento do floor
floor.positionY = canvas.height -112; //Altera o valor do posicionamento Y do florr. Nao consegui tratar esse dado dentro do modulo bird.js.

//Atribuindo posionamento Y do bgStage 
bgStage.positionY = canvas.height -112;
var py = bgStage.positionY ;





//Loop game
function loop(){

    // mudaTela(screen.INIT.drawn(ctx, source, canvas, py, width, height));
    mudaTela(screen.Game.drawn(ctx, source, canvas, py, width, height));

    






{
    //Dentro do modulo screen
    // Atualizando o bird
    // screen.Game.update();



    // Desenhando o BG.
    // Passando o parametro "ctx" e "source" para o modulo
    // bgStage.drawn(ctx, source, bgStage.positionY, canvas.width, canvas.height);
    // screen.Game.drawn(ctx, source, bgStage.positionY, canvas.width, canvas.height);


    // Desenhando o chão
    // Passando o parametro "ctx", "source" e "floor.positionY para o modulo
    // floor.drawn(ctx, source, floor.positionY);// enviado para o modulo o contexto, a fonte da imagem, e o posicionamento Y na tela.
    // screen.Game.drawn(ctx, source, floor.positionY)



    // Desenhando o bird
    // Passando o parametro "ctx" e "source" para o modulo
    // bird.drawn(ctx, source); //Chama a função desenha enviando os dados (ctx - "contexto do canvas") e (source que e nada mais nada menos que a sprite do bird).
    //Telas do game
    // screen.Game.drawn(ctx, source);
    


    //TELA DE INICIO DO GAME
    // home.drawn(ctx, source,  canvas);


    //Controle telas do game
    // passando o parametro para SCREEN(objeto) / INIT(objeto) / DRAWN(função), que por sua vez chama a função home.drawn()"desenha" com os valores passados por parametro
    // TELA DE INICIO
    // screen.INIT.drawn(ctx, source, canvas);

}

    





    requestAnimationFrame(loop);
}
loop();
