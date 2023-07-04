const faker = require("../faker");

const generateFakeCoinPlan = (_, id) => {
    const oldPrice = faker.datatype.number({ min: 10, max: 50 }) * 10000;
    const offPercent = faker.datatype.number({ min: 0, max: 10 });
    const price = oldPrice * ((100 - offPercent) / 100);
    const isOffer = faker.datatype.boolean();
    const limitOffer = isOffer ? new Date(faker.date.soon()).getTime() : 0;

    return {
        id,
        offPercent,
        oldPrice,
        price,
        isOffer,
        coin: faker.datatype.number({ min: 100, max: 500, precision: 100 }),
        rewardCoin: faker.datatype.number({ min: 10, max: 100, precision: 10 }),
        limitOffer,
        createdAt: new Date(
            faker.date.between(new Date(faker.date.recent()), new Date())
        ).getTime(),
    };
};

const generateFakeCoinPlans = (count = 4) =>
    [...Array(count)].map(generateFakeCoinPlan);

module.exports = { generateFakeCoinPlans };
