import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getData, resetPage } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.loader-container'),
  btnLoadMore: document.querySelector('.btn-load_more'),
};
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
});

let query = '';

refs.form.addEventListener('submit', handleSubmit);
refs.btnLoadMore.addEventListener('click', handleLoadMore);
window.addEventListener('wheel', handleWheel);

async function handleSubmit(event) {
  event.preventDefault();
  refs.btnLoadMore.classList.add('btn-load_more-hidden');
  resetPage();
  query = event.target.elements.request.value;
  refs.spinner.classList.remove('hidden');

  const res = await getData(query);
  if (res.data.hits.length === 0) {
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
  refs.btnLoadMore.classList.remove('btn-load_more-hidden');
  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('afterbegin', createMarkup(res.data.hits));
  gallery.refresh();
  refs.spinner.classList.add('hidden');
  event.target.reset();
}

async function handleLoadMore(event) {
  refs.btnLoadMore.classList.add('btn-load_more-hidden');
  refs.spinner.classList.remove('hidden');
  const res = await getData(query);
  refs.btnLoadMore.classList.remove('btn-load_more-hidden');
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(res.data.hits));
  gallery.refresh();
  refs.spinner.classList.add('hidden');
  if (res.data.hits.length === 0) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      backgroundColor: '#FC3D03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
    refs.btnLoadMore.classList.add('btn-load_more-hidden');
    return;
  }
}
function getBoundingClientRect() {
  if (refs.gallery.children[0]) {
    return refs.gallery.children[0].offsetHeight * 2;
  }
}

function handleWheel(event) {
  if (event.deltaY > 0) {
    if (getBoundingClientRect()) {
      window.scrollBy(0, getBoundingClientRect());
    }
  } else {
    if (getBoundingClientRect()) {
      window.scrollBy(0, -getBoundingClientRect());
    }
  }
}
