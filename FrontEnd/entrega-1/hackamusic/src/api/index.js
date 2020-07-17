import config from './config.js'
const axios = require('axios').default;

const apiKey = config.apiKey;

const BASE_URL = 'https://ws.audioscrobbler.com/';
const URL_GEO_ARTISTS = `2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;
const URL_GEO_TAGS = `2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`;
const URL_GEO_TRACKS = `2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`

async function getArtists() {
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO_ARTISTS}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getTags() {
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO_TAGS}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getTracks() {
    try {
        const response = await axios.get(`${BASE_URL}${URL_GEO_TRACKS}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getArtists,
    getTags,
    getTracks
}