const container = document.querySelector('.grid-container');


for (let i = 1; i <= 16; i++) {
    for (let x = 1; x<= 16; x++){
    const item = document.createElement('div');
    item.classList.add('grid-item');
    container.appendChild(item);
  };
}