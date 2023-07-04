const db = require("../../database");
const faker = require("../faker");
const {
    generateFakeCoin,
    generateFakeCountedImage,
    generateFakeTags,
    getRandomItemFromArray,
} = require("./utils");

const generateFakeBackgroundImage = (_, id) => {
    const image = generateFakeCountedImage(id, {
        path: "book-builder/backgrounds/",
        max: 9,
    });
    const coin = generateFakeCoin();
    const tags = generateFakeTags();
    const category = getRandomItemFromArray(db["categories"]);
    return { id, image, coin, tags, category: category.id };
};

const generateFakeBackgroundColor = (_, id) => {
    const color = faker.internet.color();
    const coin = generateFakeCoin();
    return { id, color, coin };
};

const generateFakeBackgroundImages = (count = 100) =>
    [...Array(count)].map(generateFakeBackgroundImage);

const generateFakeBackgroundColors = (count = 100) =>
    [...Array(count)].map(generateFakeBackgroundColor);

module.exports = {
    generateFakeBackgroundImages,
    generateFakeBackgroundColors,
};
