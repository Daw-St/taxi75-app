import axios from 'axios';

export default axios.create({
    baseURL: 'http://taxi.eadsum.org'
});