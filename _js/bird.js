export var birdStatus = "[BIRD][OK] ... BIRD ALIVE!";
//Configuração bird
export var bird ={
    spriteX: 0,               //Posição X no sprite
    spriteY: 0,              //Posição Y no sprite
    with: 33,               //Tamanho do bird no sprite
    height: 24,            //Tamanho do bird no sprite
    positionX: 40,        //Posição X do bird no canvas
    positionY: 50,       //Posição Y do bird no canvas
    destWidth: 33,      //Tamanho do sprite no canvas
    destHeight: 24,    //Tamanho do sprite no canvas
    drawn(ctx, source) {



        ctx.drawImage(source, 0, 0, bird.with, bird.destHeight, bird.positionX, bird.positionY, bird.with, bird.height);
    }
}
