function drawOneImage(canvas,context,x,y,width,height){
    var pic = new Image();
    pic.setAttribute('crossOrigin','anonymous')
    pic.onload = function(){
        context.drawImage(pic,x,y,width,height);

    }
    pic.src = `https://source.unsplash.com/collection/1127160/${width}x${height}`;
}





function createCanvas(width,height){
    var canvas = document.createElement('canvas');
    canvas.id = "idCanvas";
    var context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    drawOneImage(canvas,context,0,0,50,50);
    return canvas;
}
function addCanvasToBody(width,height){
    document.body.appendChild(createCanvas(width,height));

}