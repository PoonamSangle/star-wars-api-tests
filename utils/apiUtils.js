// Helper function to handle API requests
const axios = require('axios');
const assert = require('assert');

async function makeRequest(url, params = {}) {
    try {
        const response = await axios.get(url, { params });
        assert.strictEqual(response.status, 200, `Unexpected status code for ${url}`);
        return response.data;
    } catch (error) {
        console.error(`Error during API request (${url}):`, error.message);
        throw error; // Re-throw the error to mark the test as failed
    }
}

module.exports = makeRequest;