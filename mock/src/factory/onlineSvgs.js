const generateOnlineSVGs = () => {
  const links = [
    // "https://www.svgrepo.com/show/520483/quiz.svg",
    // "https://www.svgrepo.com/show/520480/globe.svg",
    // "https://www.svgrepo.com/show/520482/knowledge.svg",
    // "https://www.svgrepo.com/show/520490/student.svg",
    // "https://www.svgrepo.com/show/520500/drawing.svg",
    // "https://www.svgrepo.com/show/520498/clock.svg",
    // "https://www.svgrepo.com/show/520486/school.svg",
    // "https://www.svgrepo.com/show/520494/video-course.svg",
    // "https://www.svgrepo.com/show/520485/research.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/2/2f/Delicious%2C_yummy%2C_lecker%2C_delicioso_from_Openclipart.org.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/2/22/Creative-Tail-People-girl-skintone4.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dog_tan.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/8/82/Heraldic_Dog_Head.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/5/58/Rainbow_Caticorn.svg",

    "https://static2.fekrooneh.com/images/avatar/boy_63d4d70ddf2ea.svg",
    "https://static2.fekrooneh.com/images/avatar/woman_63d4e51dbf24b.svg",
    "https://static2.fekrooneh.com/images/avatar/man_63d4e334a3ced.svg",
    "https://static2.fekrooneh.com/images/avatar/man_63d4e36b2c5a3.svg",
    "https://static2.fekrooneh.com/images/avatar/woman_63d4e52a2c2dc.svg",
    "https://static2.fekrooneh.com/images/avatar/genderless_63d4dc4a90853.svg",
    "https://static2.fekrooneh.com/images/avatar/genderless_63d4dca1c44f4.svg",
    "https://static2.fekrooneh.com/images/avatar/genderless_63d4dcc25b009.svg",
    "https://static2.fekrooneh.com/images/avatar/genderless_63d4dd199fda4.svg",
    "https://static2.fekrooneh.com/images/avatar/genderless_63d4dc78d182c.svg",
  ];

  const SVGs = [];
  for (let i = 0; i < 35; i++) {
    SVGs.push({
      id: i,
      image: links[i % links.length],
      modifications: undefined,
      coin: null,
      tags: ["فراوان"],
      category: 5,
    });
  }

  return SVGs;
};

module.exports = { generateOnlineSVGs };
