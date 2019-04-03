function drawOneImage(canvas,context,x,y,width,height){
    var pic = new Image();
    pic.setAttribute('crossOrigin','anonymous')
    pic.onload = function(){
        context.drawImage(pic,x,y,width,height);

    }
    pic.src = `https://source.unsplash.com/collection/1127160/${width}x${height}`;
}
function getQuote(canvas,context){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru', true);
   xhr.onreadystatechange = function(){
       if (xhr.readyState != 4){
           return;
       }
       if (xhr.status == 200){
           context.font = 'bold 26px Arial';
           context.fillStyle = 'white';
           context.textAlign = 'center';
           context.textBaseline = 'middle';
           var text = JSON.parse(xhr.responseText)['quoteText'];
           context.fillText(text,50,50);

       }
   };
   xhr.send();

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
    getQuote(canvas,context);
    return canvas;
}
function addCanvasToBody(width,height){
    document.body.appendChild(createCanvas(width,height));

}