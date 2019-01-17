// Appelle init lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', init, false);
 
 function init() {

      var canvas = document.getElementById("logo_canvas");
      var ctx = canvas.getContext("2d");
      
      draw(ctx);
    
      if (!context.setLineDash) {
          context.setLineDash = function () {}
       }     
    }

    function draw(ctx) {

      ctx.save(); //garder les fonctionnalités par défaut
        
      // Polygone
      ctx.beginPath();
      ctx.moveTo(412.7, 160.9);
      ctx.lineTo(340.4, 357.4);
      ctx.lineTo(134.1, 393.0);
      ctx.lineTo(0.0, 232.2);
      ctx.lineTo(72.3, 35.7);
      ctx.lineTo(278.6, 0.0);
      ctx.lineTo(412.7, 160.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(216, 255, 22)";
      ctx.fill();

      // Texte : JEUNE COUPLE
      ctx.font = "31.0px fontLogo1";
      ctx.fillStyle = "#000";
      ctx.fillText("JEUNE COUPLE", 36.2, 190.2);

      // Texte : ET ALORS 
      ctx.font = "58.0px fontLogo2";
      ctx.fillStyle = "#000";
      ctx.fillText("ET ALORS !", 129.9, 239.5);

      // Ligne 1 gauche noire
      ctx.beginPath();
      ctx.setLineDash([8,2.8]);
      ctx.moveTo(111.6, 217.5);
      ctx.lineTo(36.2, 217.5);
      ctx.lineWidth = 2;
      ctx.fillStyle = "#000";
      ctx.fill();
      ctx.stroke();      

      // Ligne 2 droite noire
      ctx.beginPath();
      ctx.setLineDash([8,2.8]);
      ctx.moveTo(372.8, 166.9);
      ctx.lineTo(268.3, 166.9);
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      ctx.restore(); // Restaurer les default solid line

      // Ligne 3 gauche blanche
      ctx.beginPath();
      ctx.moveTo(111.6, 224.9);
      ctx.lineTo(38.5, 224.9);
      ctx.lineWidth = 3.5;
      ctx.closePath();        
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.stroke();

      // Ligne 4 droite blanche
      ctx.beginPath();
      ctx.moveTo(372.8, 174.2);
      ctx.lineTo(268.3, 174.2);
      ctx.lineWidth = 3.5;
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }