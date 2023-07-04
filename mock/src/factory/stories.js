const faker = require("../faker");
const { getRandomShortUser } = require("../helper");
const { generateFakeBooks } = require("./books");

const generateFakeStory = (_, id) => {
    return {
        id,
        user: getRandomShortUser(),
        seen: faker.datatype.boolean(),
        galleryId: generateFakeBooks(
            faker.datatype.number({ min: 1, max: 10 })
        ),
    };
};

const generateFakeStories = (count = 20) =>
    [...Array(count)].map(generateFakeStory);

module.exports = { generateFakeStories };
