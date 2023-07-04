const db = require("../../database");
const {
  generateFakeTags,
  generateFakeCoin,
  generateFakeCountedImage,
  getRandomItemFromArray,
} = require("./utils");

const generateFakePNGVector = (_, id) => {
  const image = generateFakeCountedImage(id, {
    ext: "png",
    path: "book-builder/vectors/png/",
    max: 50,
  });
  const coin = generateFakeCoin();
  const tags = generateFakeTags();
  const category = getRandomItemFromArray(db["categories"]).id;
  return { id, image, coin, tags, category };
};

const generateFakeSVGVector = (_, id) => {
  const image = generateFakeCountedImage(id, {
    ext: "svg",
    path: "book-builder/vectors/svg/",
    max: 40,
  });
  const coin = generateFakeCoin();
  const tags = generateFakeTags();
  const category = getRandomItemFromArray(db["categories"]).id;
  return { id, image, coin, tags, category };
};

const generateFakePNGVectors = (count = 200) =>
  [...Array(count)].map(generateFakePNGVector);

const generateFakeSVGVectors = (count = 200) =>
  [...Array(count)].map(generateFakeSVGVector);

module.exports = { generateFakeSVGVectors, generateFakePNGVectors };
