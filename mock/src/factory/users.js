const faker = require("../faker");
const { generateFakeCountedImage } = require("./utils");

const generateFakeUser = (_, id) => {
    faker.locale = "en";
    const email = faker.internet.email();
    const username = faker.random.word();
    faker.locale = "fa";
    return {
        id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username,
        online: faker.datatype.boolean(),
        image: generateFakeCountedImage(id, {
            path: "profile/",
            ext: "jpg",
            max: 3,
        }),
        walletAmount: faker.datatype.number({
            min: 100,
            max: 1000,
            precision: 1000,
        }),
        hasPassword: faker.datatype.boolean(),
        bio: faker.lorem.paragraph(),
        coin: faker.datatype.number({ min: 100, max: 1000, precision: 100 }),
        phone: faker.phone.phoneNumber("091########"),
        city: faker.address.city(),
        province: faker.address.state(),
        productCount: faker.datatype.number({ min: 0, max: 100 }),
        followers: faker.datatype.number({ min: 0, max: 100 }),
        following: faker.datatype.number({ min: 0, max: 100 }),
        email,
    };
};

const generateFakeUsers = (count = 50) =>
    [...Array(count)].map(generateFakeUser);

module.exports = { generateFakeUsers, generateFakeUser };
