import axios from 'axios';

/**
 * axios instance with twitch api configuration
 */
export default axios.create({
    
    baseURL: 'https://api.twitch.tv/kraken/',
    headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': ''
    }
});
