const bigImageContainer = document.querySelector('#big-image');
const container = document.querySelector(`#container`);
const leftArrow = document.querySelector(`.left-arrow`);
const rightArrow = document.querySelector(`.right-arrow`);
const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg'];

let activeImage = 0;

function loadImages () {
  const smallImagesMainContainer = document.createElement(`div`);
  smallImagesMainContainer.id = `small-images-main-container`;

  container.appendChild(smallImagesMainContainer);

  bigImageContainer.style.setProperty(`background-image`, `url("./images/${activeImage < 9 ? '0' + (activeImage + 1) : (activeImage + 1)}.jpg")`);

  for (let i = 0; i < imagesArray.length; i++) {
    
    if (i === activeImage) {
      let newDiv01 = document.createElement(`div`);
      let newDiv02 = document.createElement(`div`);
      let newDiv03 = document.createElement(`div`);
      let newDiv04 = document.createElement(`div`);
  
      newDiv01.className = `small-image-container-with-arrow`;
      newDiv02.className = `arrow-up`;
      newDiv03.className = `selected-small-image-container`;
      newDiv04.className = `small-image-div`;
  
      newDiv04.id = `small-image-${i < 9 ? '0' + (i + 1) : (i + 1)}`;
      newDiv04.style.setProperty(`background-image`, `url("./images/${i < 9 ? '0' + (i + 1) : (i + 1)}.jpg")`)
  
      newDiv01.appendChild(newDiv02);
      newDiv01.appendChild(newDiv03);
      newDiv03.appendChild(newDiv04);
  
      smallImagesMainContainer.appendChild(newDiv01);
    } else {
      let newDiv01 = document.createElement(`div`);
      let newDiv02 = document.createElement(`div`);
  
      newDiv01.className = `small-image-container`;
  
      newDiv02.id = `small-image-${i < 9 ? '0' + (i + 1) : (i + 1)}`;
      newDiv02.className = `small-image-div`;
      newDiv02.style.setProperty(`background-image`, `url("./images/${i < 9 ? '0' + (i + 1) : (i + 1)}.jpg")`)
    
      newDiv01.appendChild(newDiv02);
    
      smallImagesMainContainer.appendChild(newDiv01);
    }
  }
}

window.addEventListener(`load`, () => {
  loadImages();
})

leftArrow.addEventListener(`click`, () => {
  if (activeImage === 0) {
    activeImage = 9;

    let removableChild = document.querySelector(`#small-images-main-container`);

    container.removeChild(removableChild);

    loadImages();
  } else {
    activeImage --;

    let removableChild = document.querySelector(`#small-images-main-container`);

    container.removeChild(removableChild);

    loadImages();
  }
});

rightArrow.addEventListener(`click`, () => {
  if (activeImage === 9) {
    activeImage = 0;

    let removableChild = document.querySelector(`#small-images-main-container`);

    container.removeChild(removableChild);

    loadImages();
  } else {
    activeImage ++;

    let removableChild = document.querySelector(`#small-images-main-container`);

    container.removeChild(removableChild);

    loadImages();
  }
});