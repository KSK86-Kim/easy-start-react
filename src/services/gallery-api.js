import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '17667415-6f718af57a22652ec3432b17e';

function fetchImages({ searchQuery = '', nextPage = 1, pageSize = 12 }) {
    return axios
        .get(
            `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${nextPage}&per_page=${pageSize}&image_type=photo&orientation=horizontal`,
        )
        .then(responce => responce.data.hits);
}
export { fetchImages };
