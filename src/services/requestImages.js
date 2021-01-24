import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
const API_KEY = '19261458-26a7a8067c525acd82bd2f87d';

export function requestImages({ querry, page }) {
  return axios(
    `${BASE_URL}q=${querry}&page=${page}&key=${API_KEY}&per_page=12`,
  );
}
