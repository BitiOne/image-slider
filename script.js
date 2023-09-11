import imagesDatas from "./images-data.js";

const bigImageContainer = document.querySelector('#big-image');
const container = document.querySelector(`#container`);
const leftArrow = document.querySelector(`.left-arrow`);
const rightArrow = document.querySelector(`.right-arrow`);
const header = document.querySelector(`h4`);
const paragraph = document.querySelector(`p`);

let activeImage = 0;

function loadImages () {
  const smallImagesMainContainer = document.createElement(`div`);
  smallImagesMainContainer.id = `small-images-main-container`;

  container.appendChild(smallImagesMainContainer);

  bigImageContainer.style.setProperty(`background-image`, `url("./images/${activeImage < 9 ? '0' + (activeImage + 1) : (activeImage + 1)}.jpg")`);

  for (let i = 0; i < imagesDatas.length; i++) {
    
    if (i === activeImage) {
      let newDiv01 = document.createElement(`div`);
      let newDiv02 = document.createElement(`div`);
      let newDiv03 = document.createElement(`div`);
      let newDiv04 = document.createElement(`div`);
  
      newDiv01.className = `small-image-container-with-arrow`;
      newDiv02.className = `arrow-up`;
      newDiv03.className = `selected-small-image-container`;
      newDiv04.className = `small-image-div`;
  
      newDiv03.id = `small-image-container-${i < 9 ? (i + 1) : (i + 1)}`;
      newDiv04.id = `small-image-${i < 9 ? '0' + (i + 1) : (i + 1)}`;
      newDiv04.style.setProperty(`background-image`, `url("./images/${i < 9 ? '0' + (i + 1) : (i + 1)}.jpg")`)
  
      newDiv01.appendChild(newDiv02);
      newDiv01.appendChild(newDiv03);
      newDiv03.appendChild(newDiv04);
  
      smallImagesMainContainer.appendChild(newDiv01);

      header.innerText = imagesDatas[i].title;
      paragraph.innerText = imagesDatas[i].description;
    } else {
      let newDiv01 = document.createElement(`div`);
      let newDiv02 = document.createElement(`div`);
  
      newDiv01.className = `small-image-container`;
  
      newDiv01.id = `small-image-container-${i < 9 ? (i + 1) : (i + 1)}`;
      newDiv02.id = `small-image-${i < 9 ? '0' + (i + 1) : (i + 1)}`;
      newDiv02.className = `small-image-div`;
      newDiv02.style.setProperty(`background-image`, `url("./images/${i < 9 ? '0' + (i + 1) : (i + 1)}.jpg")`)
    
      newDiv01.appendChild(newDiv02);
    
      smallImagesMainContainer.appendChild(newDiv01);
    }
  }
  clickSmallImages();
}

window.addEventListener(`load`, () => {
  loadImages();

})

leftArrow.addEventListener(`click`, () => {
  if (activeImage === 0) {
    activeImage = 9;

    resetSmallImagesContainer();
  } else {
    activeImage --;

    resetSmallImagesContainer();
  }
});

rightArrow.addEventListener(`click`, () => {
  if (activeImage === 9) {
    activeImage = 0;

    resetSmallImagesContainer();
  } else {
    activeImage ++;

    resetSmallImagesContainer();
  }
});

function resetSmallImagesContainer() {
  let removableChild = document.querySelector(`#small-images-main-container`);

  container.removeChild(removableChild);

  loadImages();
  clickSmallImages();
};

function clickSmallImages() {
  const smallImageContainer = document.querySelectorAll(`.small-image-container`);

  for (let i = 0; i < smallImageContainer.length; i++) {
    smallImageContainer[i].addEventListener(`click`, (event) => {
      let imageNumberString = [];
      let imageNumber;

      imageNumberString = event.target.id.split(`-`);
      if (imageNumberString.length === 3) {
        imageNumber = Number(imageNumberString[2] - 1);
      } else {
        imageNumber = Number(imageNumberString[3] - 1);
      }

      activeImage = imageNumber;

      let removableChild = document.querySelector(`#small-images-main-container`);

      container.removeChild(removableChild);

      loadImages();
    });
  };
};