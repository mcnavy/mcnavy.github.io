function createCanvas(width,height){
    var canvas = document.createElement('canvas');
    canvas.id = "idCanvas";
    var context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function addCanvasToBody(width,height){
    document.body.appendChild(createCanvas(width,height));
}