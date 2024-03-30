import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43029074-bbcb488b86e9977f1b5ed3d25';
const spinner = document.querySelector('.loader-container');

let page = 1;

export function resetPage() {
  page = 1;
}
export function increasePage() {
  page++;
}

export async function getData(query) {
  try {
    let url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;
    const responce = await axios.get(url);
    increasePage();
    return responce;
  } catch (error) {
    iziToast.error({
      message: err.message,
      backgroundColor: '#FC3D03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
    spinner.classList.add('hidden');
  }
}
