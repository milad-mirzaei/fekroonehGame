const generateFakeMusics = ()=>{

    const links = [
        "https://ups.music-fa.com/tagdl/1402/Farzad%20Ebdali%20-%20Lalaei%20(320).mp3",
        "https://ups.music-fa.com/tagdl/1402/Majid%20Malvandi%20-%20Delet%20Miad%20(320).mp3"
      ];

      const images = [
        "https://static2.fekrooneh.com/images/avatar/boy_63d4d70ddf2ea.svg",
        "https://static2.fekrooneh.com/images/avatar/woman_63d4e51dbf24b.svg",
        "https://static2.fekrooneh.com/images/avatar/man_63d4e334a3ced.svg",
        "https://static2.fekrooneh.com/images/avatar/man_63d4e36b2c5a3.svg",
        "https://static2.fekrooneh.com/images/avatar/woman_63d4e52a2c2dc.svg",
      ]
    
      const musics = [];
      for (let i = 0; i < 35; i++) {
        musics.push({
          id: i,
          image: images[i % images.length],
          src: links[i % links.length],
          coin: null,
          tags: ["فراوان"],
          category: 5,
        });
      }
      
    return {}
}

module.exports = { generateFakeMusics };