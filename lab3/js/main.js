function drawOneImage(canvas,context,x,y,width,height){
    var pic = new Image();
    pic.setAttribute('crossOrigin','anonymous')
    pic.onload = function(){
        context.drawImage(pic,x,y,width,height);

    }
    pic.src = `https://source.unsplash.com/collection/1127160/${width}x${height}`;
}
function getQuote(canvas,conext){

}





function createCanvas(width,height){
    var canvas = document.createElement('canvas');
    canvas.id = "idCanvas";
    var context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    drawOneImage(canvas,context,0,0,100,200);
    drawOneImage(canvas,context,0,200,210   ,100);
    drawOneImage(canvas,context,100,0,110   ,200);
    drawOneImage(canvas,context,210,0,100   ,300);
    return canvas;
}
function addCanvasToBody(width,height){
    document.body.appendChild(createCanvas(width,height));

}