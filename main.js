const container = document.querySelector('.grid-container');


for (let i = 1; i <= 256; i++) {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    container.appendChild(item);
  };

  const pixels = document.querySelectorAll('.grid-item');
  isClick = "";


   function mouseDown() {
    // Agregar clase solo al elemento clickeado
    this.classList.add('background-black');
    isClick = true;
  }

  function mouseUp(){
    if(isClick){
      isClick = false;
     // this.classList.remove('background-black');
    }
    
  }

  function mouseOut(){
     if(isClick){
      this.classList.add('background-black');
    }
  }

  function mouseMove(){
    if(isClick){   
    this.classList.add('background-black');
  }else{
    
  }
  }

  function Click(){
    this.classList.add('background-black');
  }

  
  
  for (let i = 0; i < pixels.length; i++) {
    // Agregar evento click a cada elemento
    pixels[i].addEventListener('mousedown', mouseDown);
    pixels[i].addEventListener('mousemove', mouseMove);
   //pixels[i].addEventListener('mouseover', mouseOver);
    pixels[i].addEventListener('mouseup', mouseUp);
    pixels[i].addEventListener('click', Click);

    } 
    

    
    