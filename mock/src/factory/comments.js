const faker = require("../faker");
const { generateFakeCountedImage } = require("./utils");

const generateFakeComment = (id) => {
    faker.locale = "en";
    const email = faker.internet.email();
    faker.locale = "fa";
    return {
        id: id + 1,
        email,
        title: faker.lorem.words(faker.datatype.number({ min: 3, max: 5 })),
        author: {
            id: faker.datatype.number({ min: 1, max: 4 }),
            name: faker.name.firstName() + " " + faker.name.lastName(),
            image: generateFakeCountedImage(id, {
                path: "profile/",
                ext: "jpg",
                max: 3,
            }),
        },
        date: new Date(faker.date.recent(20)).getTime(),
        text: faker.lorem.paragraph(faker.datatype.number({ min: 3, max: 5 })),
    };
};

const generateFakeComments = (count = 40) => {
    return [...Array(count)].map((_, id) => {
        return generateFakeComment(id);
    });
};

module.exports = {
    generateFakeComments,
};
