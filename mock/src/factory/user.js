// const { getRandomUser } = require("../helper");

const getFakeUser = () =>{
    return{
        id: 12665,
        type: "user",
        first_name: "\u0645\u06cc\u0644\u0627\u062f",
        last_name: "\u0645\u06cc\u0631\u0632\u0627\u06cc\u06cc",
        user_name: null,
        gender: "m",
        birth_date: "1998-03-16",
        level: 0,
        invite_code: "0Fps9335",
        invited_by: null,
        mobile: "09332644757",
        mobile_verified_at: "2023-05-21 16:34:32",
        pattern_id: 3,
        country_id: 1,
        state_id: 4,
        city_id: 206,
        grade_id: 1,
        status: "active",
        is_completed: 1,
        image: null,
        pattern: "\u0645\u0639\u0644\u0645",
        country: "\u0627\u06cc\u0631\u0627\u0646",
        state: "\u0627\u0635\u0641\u0647\u0627\u0646",
        city: "\u0627\u0635\u0641\u0647\u0627\u0646",
        grade: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc",
        invited: null,
        hasPassword: null,
        publishedBooks: 0,
        allBooks: []
    }
}


// {
//     return getRandomUser();
// };

module.exports = { getFakeUser };
