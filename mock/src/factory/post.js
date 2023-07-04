const faker = require("../faker");
const { generateFakeHtmlContent } = require("../helper");
const { generateFakeTags } = require("./tags");
const { generateFakeCountedImage } = require("./utils");

const generateFakePost = (_, id) => {
    const title = faker.lorem.words(4);

    return {
        id,
        title,
        author: {
            id: faker.datatype.number({ min: 1, max: 4 }),
            name: faker.name.firstName() + " " + faker.name.lastName(),
            image: generateFakeCountedImage(id, {
                path: "profile/",
                ext: "jpg",
                max: 3,
            }),
        },
        content: generateFakeHtmlContent(),
        description: faker.lorem.words(100),
        hash: generateFakeTags(4),
        views: faker.datatype.number({ min: 100, max: 1000 }),
        rating: faker.datatype.number({ min: 1, max: 5 }),
        slug: id,
        comments: faker.datatype.number({ min: 1, max: 26 }),
        image: generateFakeCountedImage(id, {
            path: "posts/",
            ext: "jpg",
            max: 12,
        }),
        date: new Date(faker.date.recent(20)).getTime(),
    };
};

const generateFakePosts = (count = 80) =>
    [...Array(count)].map(generateFakePost);

module.exports = {
    generateFakePosts,
};
