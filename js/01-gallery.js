import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markupImages =  galleryItems.map(({ preview, description, original }) =>  `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </li>`).join("");

gallery.insertAdjacentHTML("beforeend", markupImages);
gallery.addEventListener("click", onGalleryClick);
function onGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
}




