const faker = require("../faker");

const generateFakeTopic = (_, id) => {
    return {
        id: id + 1,
        title: faker.commerce.productAdjective(),
    };
};

const generateFakeTopics = (count = 20) =>
    [...Array(count)].map(generateFakeTopic);

module.exports = {
    generateFakeTopics,
};
