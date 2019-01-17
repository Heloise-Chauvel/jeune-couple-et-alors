function ini(){
    //Gestion de l'aside
        
    var main = document.getElementById("col1");
    
    var aside = document.getElementById("aside");
    
    var h = main.offsetHeight;
    
    aside.style.height = (h+"px");   
    
    //Gestion de la map
    
    var video = document.getElementById("video_presentation");
    
    var map = document.getElementById("map_canvas");
    
    var h2 = video.offsetHeight;
    
    map.style.height = (h2+"px");
    
}

document.addEventListener('DOMContentLoaded', ini, false);
window.onresize = function(event){
	ini();
}