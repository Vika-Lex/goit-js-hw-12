import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43029074-bbcb488b86e9977f1b5ed3d25';
const spinner = document.querySelector('.loader-container');

export function getData(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      iziToast.error({
        message: err.message,
        backgroundColor: '#FC3D03',
        messageColor: '#fff',
        close: false,
        progressBarColor: '#fff',
        position: 'topRight',
        timeout: 1000,
      });
      console.log(err);
      spinner.classList.add('hidden');
    });
}
