import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryList(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryList(gallery) {
    return (gallery.map((img) => `<a class='gallery__item' href='${img.original}'><img class='gallery__image' src='${img.preview}' alt='${img.description}'></a>`).join(""))
}
const img = galleryEl.querySelector('.gallery__image')

console.log(galleryItems);

let gallery =new SimpleLightbox('.gallery a',{captionsData:"alt",captionDelay:250 });
gallery.on('show.simplelightbox', function () { });

