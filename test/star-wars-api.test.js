const axios = require('axios');
const assert = require('assert');
const makeRequest = require('../utils/apiUtils'); // Adjust the path accordingly

// SWAPI endpoint
const swapiUrl = "https://swapi.dev/api";

// Test Suite
describe('Star Wars API Tests', function () {
    this.timeout(10000); // Set the timeout for the entire suite

    // Test Case 1: Retrieve a list of all Star Wars characters
    it('should retrieve a list of all Star Wars characters', async function () {
        const characters = await makeRequest(`${swapiUrl}/people`);
        assert.ok(characters.results && characters.results.length > 0, 'No characters returned');
    });

    // Test Case 2: Retrieve details for a specific Star Wars character
    it('should retrieve details for a specific Star Wars character', async function () {
        const characterName = "Luke Skywalker";
        const characters = await makeRequest(`${swapiUrl}/people`, { search: characterName });
        assert.strictEqual(characters.count, 1, 'Incorrect number of results');
        assert.strictEqual(characters.results[0].name, characterName, 'Incorrect character details');
    });

    // Test Case 3: Retrieve a list of all Star Wars films
    it('should retrieve a list of all Star Wars films', async function () {
        const films = await makeRequest(`${swapiUrl}/films`);
        assert.ok(films.results && films.results.length > 0, 'No films returned');
    });

    // Test Case 4: Retrieve details for a specific Star Wars film
    it('should retrieve details for a specific Star Wars film', async function () {
        const filmTitle = "A New Hope";
        const films = await makeRequest(`${swapiUrl}/films`, { search: filmTitle });
        assert.strictEqual(films.count, 1, 'Incorrect number of results');
        assert.strictEqual(films.results[0].title, filmTitle, 'Incorrect film details');
    });

    // Test Case 5: Retrieve a list of Star Wars starships
    it('should retrieve a list of Star Wars starships', async function () {
        const starships = await makeRequest(`${swapiUrl}/starships`);
        assert.ok(starships.results && starships.results.length > 0, 'No starships returned');
    });

    // Test Case 6: Handle non-existing character gracefully
    it('should handle non-existing character gracefully', async function () {
        const nonExistingCharacterName = "NonExistingCharacter123";
        const characters = await makeRequest(`${swapiUrl}/people`, { search: nonExistingCharacterName });
        assert.strictEqual(characters.count, 0, 'Results returned for a non-existing character');
    });

    // Test Case 7: test case for Star Wars planets
    it('should retrieve a list of all Star Wars planets', async function () {
        const planets = await makeRequest(`${swapiUrl}/planets`);
        assert.ok(planets.results && planets.results.length > 0, 'No planets returned');
    });

    // Test Case 8: test case for Star Wars species
    it('should retrieve a list of all Star Wars species', async function () {
        const species = await makeRequest(`${swapiUrl}/species`);
        assert.ok(species.results && species.results.length > 0, 'No species returned');
    });

    // Test Case 9: test case for Star Wars vehicles
    it('should retrieve a list of all Star Wars vehicles', async function () {
        const vehicles = await makeRequest(`${swapiUrl}/vehicles`);
        assert.ok(vehicles.results && vehicles.results.length > 0, 'No vehicles returned');
    });

    // Test Case 10: Negative test case for an invalid endpoint
    it('should return 404 for an invalid endpoint', async function () {
        try {
            await makeRequest(`${swapiUrl}/invalidEndpoint`);
            // If the request does not throw an error, fail the test
            assert.fail('Request to an invalid endpoint did not return a 404 status');
        } catch (error) {
            assert.strictEqual(error.response.status, 404, 'Unexpected status code for an invalid endpoint');
        }
    });

// Test Case 11: Test case for Star Wars starship details
    it('should retrieve details for a specific Star Wars starship', async function () {
        const starshipName = "Millennium Falcon";
        const starships = await makeRequest(`${swapiUrl}/starships`, { search: starshipName });
        assert.strictEqual(starships.count, 1, 'Incorrect number of results');
        assert.strictEqual(starships.results[0].name, starshipName, 'Incorrect starship details');
    });

// Test Case 12: Test case for Star Wars planet details
    it('should retrieve details for a specific Star Wars planet', async function () {
        const planetName = "Tatooine";
        const planets = await makeRequest(`${swapiUrl}/planets`, { search: planetName });
        assert.strictEqual(planets.count, 1, 'Incorrect number of results');
        assert.strictEqual(planets.results[0].name, planetName, 'Incorrect planet details');
    });
});