const faker = require("../faker");

const generateFakeTag = (_, id) => {
    return {
        id: id + 1,
        title: faker.commerce.department(),
        views: faker.datatype.number({ min: 100, max: 1000 }),
    };
};

const generateFakeTags = (count = 15) => [...Array(count)].map(generateFakeTag);

module.exports = {
    generateFakeTags,
};
