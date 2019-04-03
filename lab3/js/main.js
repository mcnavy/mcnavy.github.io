var isGood = 0;
function drawOneImage(canvas,context,x,y,width,height){
    var pic = new Image();
    pic.setAttribute('crossOrigin','anonymous')
    pic.onload = function(){
        context.drawImage(pic,x,y,width,height);
        isGood +=1;
        if(isGood == 4){
            getQuote(canvas,context);
        }
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

           context.font = 'bold 20px Arial';
           context.fillStyle = 'rgba(0,0,0,0.7)';
           context.fillRect(0, 0, canvas.width, canvas.height);
           context.fillStyle = 'white';

           context.textAlign = 'center';
           context.textBaseline = 'middle';
           var text = JSON.parse(xhr.responseText)['quoteText'];
           var maxWidth = canvas.width - 40;
           var maxHeight = canvas.height - 40;
           var Center = canvas.width/2;
           var words = text.split(' ');
           var lines = [];
           var currentLine = '';
           words.forEach(function (value) {

               var newLine = currentLine+value+' ';
               var newLineWidth = context.measureText(newLine).width;
               if(newLineWidth > maxWidth){
                    lines.push(currentLine);
                    currentLine = value + ' ';
               }else{
                   currentLine = newLine;
               }
               
           });
           lines.push(currentLine);
           var marginTop = (maxHeight - lines.length*30)/2;
           lines.forEach(function(value){
               context.fillText(value,Center,marginTop);
               marginTop+=30;
               }
           )





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





    return canvas;
}
function addCanvasToBody(width,height){
    document.body.appendChild(createCanvas(width,height));

}