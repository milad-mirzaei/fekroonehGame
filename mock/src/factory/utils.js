const faker = require("../faker");

const generateFakeTags = (min = 1, max = 4) => {
    return [...Array(faker.datatype.number({ min, max }))].map(() =>
        faker.lorem.words(1)
    );
};

const getRandomItemFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateFakeCoin = () => {
    const isFree = faker.datatype.boolean();
    let coin = null;
    if (!isFree) {
        coin = faker.datatype.number({ min: 50, max: 400, precision: 50 });
    }
    return coin;
};

const generateFakeCountedImage = (
    index,
    { path = "", ext = "jpg", max = 40 }
) => {
    let num = index;
    if (index >= max) {
        num = parseInt(index % max);
    }
    num = num + 1 >= 10 ? num + 1 : "0" + (num + 1);
    return `/media/mock/${path}${num}.${ext}`;
};

module.exports = {
    generateFakeTags,
    generateFakeCoin,
    generateFakeCountedImage,
    getRandomItemFromArray,
};
