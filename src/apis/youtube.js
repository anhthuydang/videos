import axios from 'axios';

const KEY = 'AIzaSyC3QQ_KdjwHEFVAjlLKYl5B5fFspdTgfuY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
