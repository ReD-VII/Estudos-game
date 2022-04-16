

export var home = {
    sourceX: 134,
    sourceY: 0,
    width: 174,
    height: 152,
    positionX: 0,
    positionY: 0,
    drawn(ctx, sprite,  canvas){
        ctx.drawImage(
        sprite,
        home.sourceX, home.sourceY,
        home.width, home.height,
        ((canvas.width / 2) - 174 / 2), ((canvas.height / 2) - 400 / 2),
        home.width, home.height
        );
    }
}