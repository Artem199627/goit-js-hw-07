import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let fullImages;
let imagesInfo;

const markup = galleryItems.map(({ preview, description, original }) => `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          alt=${description}
          data-source=${original}
        />
      </a>
    </li>`).join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  imagesInfo = evt.target.dataset.source;
  createLightBox();
}
function createLightBox() {
  fullImages = basicLightbox.create(
    `<img  src=${imagesInfo} />`, {
    onShow: () => {
      window.addEventListener("keydown", onKeyPress);
    },
    onClose: () => {
      window.removeEventListener("keydown", onKeyPress);
    },
  }
  );
  fullImages.show();
}
function onKeyPress({code}) {
  if (code === "Escape") {
    fullImages.close();
  }
}





