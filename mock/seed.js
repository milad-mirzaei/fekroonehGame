const db = require("./database");
const { generateFakeBooks } = require("./src/factory/books");
const { generateFakePosts } = require("./src/factory/post");
const { generateFakeTags } = require("./src/factory/tags");
const { generateFakeTopics } = require("./src/factory/topics");
const { generateFakeComments } = require("./src/factory/comments");
const {
    generateFakeBackgroundImages,
    generateFakeBackgroundColors,
} = require("./src/factory/backgrounds");
const {
    generateFakeSVGVectors,
    generateFakePNGVectors,
} = require("./src/factory/vectors");
const { generateFakeUsers } = require("./src/factory/users");
const { getFakeUser } = require("./src/factory/user");
const { generateFakeStories } = require("./src/factory/stories");
const { generateFakeCoinPlans } = require("./src/factory/coin");
const { generateFakeBookSingle } = require("./src/factory/book");
const { generateFakeCategories } = require("./src/factory/categories");
const {generateFakeGameLevels} = require("./src/factory/games");
const {getFakeDashboard} = require("./src/factory/dashboard");
const { generateOnlineSVGs } = require("./src/factory/onlineSvgs");
const { generateFakeSoundsCategory } = require("./src/factory/soundsCategory");
const { generateFakeMusics } = require("./src/factory/musics");

db["categories"] = generateFakeCategories();
db["users"] = generateFakeUsers();
db["books"] = generateFakeBooks();
db["tags"] = generateFakeTags();
db["topics"] = generateFakeTopics();
db["post"] = generateFakePosts();
db["coin"] = generateFakeCoinPlans();
db["comments"] = generateFakeComments();
db["background-images"] = generateFakeBackgroundImages();
db["background-colors"] = generateFakeBackgroundColors();
// db["svg-vectors"] = generateFakeSVGVectors();
db["svg-vectors"] = generateOnlineSVGs();
db["png-vectors"] = generateFakePNGVectors();
db["user"] = getFakeUser();
db["book-single-list"] = generateFakeBookSingle();
db["stories"] = generateFakeStories();
db["game-levels"] = generateFakeGameLevels();
db["dashboard"]=getFakeDashboard();
db["category-sounds"] = generateFakeSoundsCategory();
db["musics"] = generateFakeMusics();
// db["svg-online"] = generateOnlineSVGs();

const getDatabase = () => db;

module.exports = { getDatabase };
