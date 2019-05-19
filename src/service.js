import api from './api';

/**
 * Get list of feature streams.
 * @param {String} limit 
 */
export function getFeatureStreams (limit) {
    return api.get(`streams/featured/${limit}`);
}

/**
 * get stream based on a search query.
 * @param {String} query 
 * @param {String} limit 
 */
export function getStreams(query, limit) {
    return api.get(`search/streams?query=${query}&limit=${limit}`);
}

/**
 * get stream by channelId
 * @param {String} channelId 
 */
export function getStream(channelId) {
    return api.get(`streams/${channelId}`);
}