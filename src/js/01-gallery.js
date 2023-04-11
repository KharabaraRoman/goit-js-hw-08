// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const ulRef = document.querySelector('.gallery')
const galleryCardsSet = createGallery(galleryItems);


function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
        })
        .join('');
}

ulRef.insertAdjacentHTML('beforeend', galleryCardsSet);
ulRef.addEventListener('click', selectGalleryElement);

function selectGalleryElement(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
}

let lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
