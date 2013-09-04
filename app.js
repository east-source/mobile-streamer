/* starts the player on a canvas*/
function embed(width, height){
        var $canvas = $(document.createElement('canvas')).width(width).height(height)
        $("#player").html($canvas)
        var canvas = $canvas[0];
        var context = canvas.getContext('2d')
        var imageObj = new Image()
        imageObj.onload= function(){
                context.drawImage(imageObj, 0, 0, width, height);
        }
        //we go with 10 frames/s
        var interval = setInterval(function(){
            //we do an http request for latest image provided by ffmpeg
            //send a timestamp query param (some browsers abort consecutive requests)
            var t = new Date().getTime()
            imageObj.src="/frame/?t="+t;
        , 100})
}

/* run */
$(function(){
        embed(150, 150);
});
