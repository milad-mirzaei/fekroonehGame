const faker = require("./faker");
const db = require("../database");

const generateFakeImage = (params) => {
    const {
        width = 1900,
        height = 600,
        min = 890,
        max = 950,
    } = params ?? {
        width: 1900,
        height: 600,
        min: 890,
        max: 950,
    };
    const random = faker.datatype.number({ min, max });
    const image = `https://picsum.photos/id/${random}/${width}/${height}`;
    return image;
};

const generateFakeHtmlContent = () => {
    const image = generateFakeImage({ height: 800 });
    const image2 = generateFakeImage();
    let html = `
    <p>${faker.lorem.paragraphs()}</p>
    <div class="aspect-w-9 aspect-h-4">
        <img src='${image}' class='object-cover w-full mx-auto rounded-md' style='margin-top: 0;' />
    </div>
    <p>${faker.lorem.paragraphs()}</p>
    <h2 class="font-bold text-lg">1.${faker.lorem.words(5)}</h2>
    <p>${faker.lorem.paragraphs()}</p>
    <div class="aspect-w-9 aspect-h-4">
        <img src='${image2}' class='object-cover w-full mx-auto rounded-md' style='margin-top: 0;' />
    </div>
    <h2 class="font-bold text-lg">2.${faker.lorem.words(5)}</h2>
    <p>${faker.lorem.paragraphs()}</p>
    <p>${faker.lorem.paragraphs()}</p>
    <p>${faker.lorem.paragraphs()}</p>
    `;
    return html;
};

const getRandomUser = () => {
    const users = db.users;
    const max = users.length;
    return users[faker.datatype.number({ min: 1, max })];
};

const getRandomShortUser = () => {
    const users = db.users;
    const max = users.length;
    const user = users[faker.datatype.number({ min: 1, max: max - 1 })];
    return {
        id: user.id,
        fullName: user.firstName + " " + user.lastName,
        image: user.image,
        username: user.username,
    };
};

const forceEnglishLocale = (callback) => {
    faker.locale = "en";
    callback();
    faker.locale = process.env.MOCK_DEFAULT_LOCALE || "fa";
};

module.exports = {
    generateFakeHtmlContent,
    generateFakeImage,
    forceEnglishLocale,
    getRandomUser,
    getRandomShortUser,
};
