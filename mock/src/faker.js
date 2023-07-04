const { faker } = require("@faker-js/faker");

const baseLocale = process.env.MOCK_DEFAULT_LOCALE || "fa";

faker.locale = baseLocale;

module.exports = faker;
