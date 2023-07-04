const { generateFakeCountedImage } = require("./utils");
const { getRandomShortUser } = require("../helper");
const faker = require("../faker");

const generateFakeBook = (_, id) => {
    const book = [
        {
            backgroundColor: "#881337",
            backgroundImage: "/media/mock/book-builder/backgrounds/03.jpg",
            previewImage: "",
            id: "JlKrmNSCHjSqoECjY_AT1",
            elements: [
                {
                    type: "image-vector",
                    src: "/media/mock/book-builder/vectors/png/32.png",
                    value: "",
                    width: "8.66935%",
                    height: "15.9274%",
                    x: 173,
                    y: 361,
                    id: "G2p246kG7p-ksrHDk_zRN",
                    rotate: 64,
                },
            ],
        },
        {
            backgroundColor: "#ffffff",
            backgroundImage: "",
            previewImage: "",
            id: "ZJLdRkNazrJSO5VIul00q",
            elements: [
                {
                    type: "svg-vector",
                    src: "/media/mock/book-builder/vectors/svg/01.svg",
                    value: "",
                    width: "113.71%",
                    height: "110.081%",
                    x: -27,
                    y: -5,
                    id: "i2NqvVf92Q93XdIZSvsOo",
                },
                {
                    type: "svg-vector",
                    src: "/media/mock/book-builder/vectors/svg/06.svg",
                    value: "",
                    width: "20%",
                    height: "20%",
                    x: 34,
                    y: 242,
                    id: "ME33Q28OSfPhOvG6ywFVc",
                },
                {
                    type: "svg-vector",
                    src: "/media/mock/book-builder/vectors/svg/05.svg",
                    value: "",
                    width: "20%",
                    height: "20%",
                    x: 62,
                    y: 240,
                    id: "fpoRY_S6fWktxsFqDc1e2",
                },
                {
                    type: "svg-vector",
                    src: "/media/mock/book-builder/vectors/svg/07.svg",
                    value: "",
                    width: "20%",
                    height: "20%",
                    x: 104,
                    y: 248,
                    id: "Tk2E-DEX0XJ6OHOoibxas",
                },
                {
                    type: "svg-vector",
                    src: "/media/mock/book-builder/vectors/svg/08.svg",
                    value: "",
                    width: "20%",
                    height: "20%",
                    x: 352,
                    y: 248,
                    id: "I1FgHhJrZbTIR5LKyBLGx",
                },
                {
                    type: "svg-vector",
                    src: "/media/mock/book-builder/vectors/svg/21.svg",
                    value: "",
                    width: "20%",
                    height: "20%",
                    x: 219,
                    y: 242,
                    id: "vGV0brUGHlTmcc-AgPO2e",
                },
            ],
        },
    ];
    const image = generateFakeCountedImage(id, {
        path: "book/",
        ext: "jpg",
        max: 10,
    });
    const author = getRandomShortUser();
    const isFavorite = faker.datatype.boolean();
    const title = faker.commerce.productAdjective();
    const price = faker.datatype.number({
        min: 10000,
        max: 40000,
        precision: 1000,
    });
    const coin = faker.datatype.number({ min: 100, max: 1000, precision: 100 });

    return { id, book, image, author, price, coin, title, isFavorite };
};

const generateFakeBooks = (count = 40) =>
    [...Array(count)].map(generateFakeBook);

module.exports = { generateFakeBooks };
