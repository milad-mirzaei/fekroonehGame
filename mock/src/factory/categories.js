const faker = require("../faker");

const generateFakeCategory = (id) => {
    return {
        id: id + 1,
        title: faker.commerce.department(),
    };
};

const generateFakeCategories = (count = 12) => {
    return [...Array(count)].map((_, id) => {
        return generateFakeCategory(id);
    });
};

module.exports = { generateFakeCategories };
