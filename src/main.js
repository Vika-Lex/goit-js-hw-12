import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getData } from './js/pixabay-api';
import { creatMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.loader-container'),
};
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
});

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  refs.spinner.classList.remove('hidden');
  getData(event.target.elements.request.value).then(data => {
    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#FC3D03',
        messageColor: '#fff',
        close: false,
        progressBarColor: '#fff',
        position: 'topRight',
        timeout: 1000,
      });
      refs.spinner.classList.add('hidden');
      event.target.reset();
      return;
    }
    refs.gallery.innerHTML = '';
    refs.gallery.insertAdjacentHTML('afterbegin', creatMarkup(data.hits));
    gallery.refresh();
    refs.spinner.classList.add('hidden');
    event.target.reset();
  });
}
