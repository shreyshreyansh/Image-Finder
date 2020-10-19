import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4gWRwUUlK3-CrVaoc-0OUu-KAjqp44XsOBf3azu3lNY'
    }
});