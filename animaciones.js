      
      // Con esta variable podemos obtener el canvas
        var pantalla = document.querySelector("canvas");
        // creamos un pincel para dibujar en canvas
        var pincel = pantalla.getContext("2d");
        // elegimos el color
        pincel.fillStyle = "Green";
        // definimos el tamaño del color
        pincel.fillRect(0,0,600,500);
        var colores = ["orange", "white","red","yellow"];
        var indice = 0;
        function dibujarCirculo(evento) {
          // capturamos la ubicacion en X donde se hace click
            var x = evento.pageX - pantalla.offsetLeft;
          // capturamos la ubicacion en Y donde se hace click
            var y = evento.pageY - pantalla.offsetTop;
          // Color del pincel 
            pincel.fillStyle = colores[indice];
            // esta funcion le da via libre a donde quiera moverme
            pincel.beginPath();
            // funcion para dibujar circulos 
            pincel.arc(x,y,10,0,2*3.14);
            pincel.fill();
        }
        
        pantalla.onclick = dibujarCirculo;
        function colorChange()
        {
          indice++;
          if (indice >= colores.length) {
              indice = 0;
          }
          return false;
        }
        pantalla.oncontextmenu = colorChange;