export var statusStage = "[STAGE][OK] ... CENÁRIO CHECADO."

export var floor = {
    spriteX: 0,               //Posição X no sprite
    spriteY: 610,              //Posição Y no sprite
    with: 224,               //Tamanho do bird no sprite
    height: 112,            //Tamanho do bird no sprite
    positionX: 0,        //Posição X do bird no canvas
    positionY: 0,       //Posição Y do bird no canvas
    destWidth: 224,      //Tamanho do sprite no canvas
    destHeight: 112,    //Tamanho do sprite no canvas
    drawn(ctx, source, positionY){
        ctx.drawImage(source, this.spriteX, this.spriteY, this.with, this.height, this.positionX, positionY, this.with, this.height);

        ctx.drawImage(source, this.spriteX, this.spriteY, this.with, this.height, this.positionX + this.with, positionY, this.with, this.height)
    },

}

export var bgStage1 = {
    spriteX: 390,       //Posição X no sprite
    spriteY: 0,         //Posição Y no sprite
    with: 275,          //Tamanho do bird no sprite
    height: 204,        //Tamanho do bird no sprite
    positionX: 0,       //Posição X do bird no canvas
    positionY: 0,       //Posição Y do bird no canvas
    destWidth: 275,     //Tamanho do sprite no canvas
    destHeight: 204,    //Tamanho do sprite no canvas
    drawn(ctx, source, positionY, width, height){
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0, 0, width, height)


        ctx.drawImage(source, this.spriteX, this.spriteY, this.with, this.height, this.positionX, positionY - (floor.height * 1.5), this.with, this.height);

        ctx.drawImage(source, this.spriteX, this.spriteY, this.with, this.height, this.positionX + this.with, positionY - (floor.height * 1.5), this.with, this.height)
    },

}