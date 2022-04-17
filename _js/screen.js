import { bird } from "./bird.js";
import {floor, bgStage} from "./stage.js";



export var home = {
    sourceX: 134,
    sourceY: 0,
    width: 174,
    height: 152,
    positionX: 0,
    positionY: 0,
    drawn(ctx, sprite, canvas){
        ctx.drawImage(
        sprite,
        home.sourceX, home.sourceY,
        home.width, home.height,
        ((canvas.width / 2) - 174 / 2), ((canvas.height / 2) - 400 / 2),
        home.width, home.height
        );
    }
}



export let telaAtiva = {}
export function mudaTela(novaTela){
    telaAtiva = novaTela;
  
}








//Criando um objeto para armazenar a tela atual
export const screen = {
    INIT: { // Objeto dentro de objeto
        // passando os parametros da função INIT.drawn() para o home.drawn
        drawn(ctx, source, canvas, positionY, width, height){
            bgStage.drawn(ctx, source, positionY, width, height)
            floor.drawn(ctx, source, positionY)
            home.drawn(ctx, source, canvas);
            bird.drawn(ctx, source);
        },
        update(){

        }
    }
};

screen.Game = {
    drawn(ctx, source, canvas, positionY, width, height){
        bgStage.drawn(ctx, source, positionY, width, height)
        floor.drawn(ctx, source, positionY)
        
        bird.drawn(ctx, source);
    },
    update(){
        bird.update();
    }
};