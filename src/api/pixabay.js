import axios from 'axios';
const key = '15495221-fb25808b8cc2e505368d60253';
const defaultParams = 'image_type=photo&orientation=horizontal&per_page=12';
const domain = 'https://pixabay.com/api/';
const fetchImagesWithQuery = searchQuery => {
  return axios
    .get(`${domain}?q=${searchQuery}&page=1&key=${key}&${defaultParams}`)
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
