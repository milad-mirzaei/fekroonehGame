

const generateFakeGameLevels = () =>[
  {
    id:'',
    type:'درست و غلط',
    icon:'/images/4gozineLevelIcon.svg',
    isSelected:true,
    trueFalse:{
      answer:'غلط',
      image:'/images/cover1.png',
      music:null,
      video:null,
      question:'ما میتونیم گل های توی پارک  رو بکنیم و با خودمون بیاریم.',
  },
    time:30,
    score:5,
    hardship:'آسون'
} , 
{
  id:'',
  type:'توالی و ترتیب',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  sequenceAndOrder:{
    answers:[
      {
        id: 'askfaso289489403ksdklsdl',
        text: 'کاشتن دانه',
        image:null,
        color: "bg-[#ffb72a]",
         mask:"/images/GozineMask.svg",
        isSelected: false,
      },
      {
        id: 'mfdjgkldpro9487390lesofpfs',
        text: 'جوانه زدن',
        image:null,
        color: "bg-[#7900FF]",
         mask:"/images/GozineMask2.svg",
        isSelected: false,
      },
      {
        id: 'ewiw84430ksdjfsnjsdcsldcs',
        text: 'رشد طولی گیاه',
        image:null,
        color: "bg-[#B2FFD6]",
         mask:"/images/GozineMask3.svg",
        isSelected: true,
      },
      {
        id: '23i4949jsdinfspdfklpscpodsifndsf',
        text: ' رشد قطری گیاه',
        color: "bg-[#FFDDD1]",
         mask:"/images/GozineMask1.svg",
        isSelected: true,
      },
      {
        id: '23i4949jsdinfsp22122dfklpscpodsifndsf',
        text: ' برگ یا میوه دادن',
        color: "bg-[#FFDDD1]",
         mask:"/images/GozineMask1.svg",
        isSelected: true,
      },
     
    ],
    image:'/images/cover3.png',
    music:null,
    video:null,
    trueSequence:[],
    question:'ترتیب صحیح رشد یک گیاه رو از چپ به راست بچین',
    isLtr:true
},
  time:30,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'چند گزینه ای',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  extraAnswers:[
      {
          color:"bg-[#FE4E13]",
          mask:"/images/GozineMask.svg",
      },
      {
          color:"bg-[#6BD3F1]",
          mask:"/images/GozineMask3.svg",
      },
  ],
  fourChoice:{
      answers:[
          {
            id: '',
            text: 'روی تنه درختان میتونیم یادگاری بنویسیم',
            color: "bg-[#ffb72a]",
             mask:"/images/GozineMask.svg",
            isSelected: false,
          },
          {
            id: '',
            text: ' توی طبیعت نباید اشغال بریزیم',
            color: "bg-[#7900FF]",
             mask:"/images/GozineMask2.svg",
            isSelected: true,
          },
          {
            id: '',
            text: ' بچه ها میتوانند محافظ محیط زیست باشند. ',
            color: "bg-[#B2FFD6]",
             mask:"/images/GozineMask3.svg",
            isSelected: true,
          },
        ],
      isMultipleChoice:true,
      image:null,
      music:null,
      video:null,
      question:'داستان رو گوش بده و گزینه درست و غلط رو مشخص کنید؟'
  },
  time:30,
  score:5,
  hardship:'آسون'
},

{
  id:'',
  type:'توالی و ترتیب',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  sequenceAndOrder:{
    answers:[
      {
        id: 'askfaso289489403ksdklsdl',
        text: null,
        image:'/images/sequence1.png',
        color: "bg-[#ffb72a]",
         mask:"/images/GozineMask.svg",
        isSelected: false,
      },
      {
        id: 'mfdjgkldpro9487390lesofpfs',
        text: null,
        image:'/images/sequence2.png',
        color: "bg-[#7900FF]",
         mask:"/images/GozineMask2.svg",
        isSelected: false,
      },
      {
        id: 'ewiw84430ksdjfsnjsdcsldcs',
        text: null,
        image:'/images/sequence3.png',
        color: "bg-[#B2FFD6]",
         mask:"/images/GozineMask3.svg",
        isSelected: true,
      },
    ],
    image:null,
    music:null,
    video:null,
    trueSequence:[],
    question:'اشیا زیر را از نظر جنس به ترتیب پلاستیک -فلزی - شیشه. از چپ به راست مرتب کنید',
    isLtr:true
},
  time:30,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'دیالوگ باکس',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  dialogBox:{
    image:'/images/cover5.jpg',
    music:null,
    video:null,
    question:'گزینه صحیح رو انتخاب کن',
    phrase:[
      {id:'kamsdkaiowdioeiowaioei299304',text:'سارا برای تفکیک زباله ها قوطی شیشه ای را در سطل زباله  ',dialog:null},
      {id:'kamsdksaweraei48284924yy264',text:null,dialog:{choices:['آبی','زرد','قرمز','سبز'],trueAnswer:0,isOpen:false}},
      {id:'kamsdkaioasd21299304',text:' قرار داد. و باقی مانده ساندویچ خود را در سطل زباله',dialog:null},
      {id:'kyjyiluoklieraei48284924yy264',text:null,dialog:{choices:['آبی','زرد','سبز'],trueAnswer:2,isOpen:false}},
      {id:'kamsdkaisadaww2314124oasd21299304',text:'گذاشت. سارا در گروه پاک سازی محیط زیست شرکت کرده است و در این کلاسها به او آموخته‌اند که روزنامه باطله باید داخل سطل',dialog:null},
      {id:'kyjyiluoklieraei482asdawq1284924yy264',text:null,dialog:{choices:['آبی','زرد','قرمز'],trueAnswer:1,isOpen:false}},
      {id:'kamsdkaioasd2129asdety54yfdg9304',text:' قرار بگیرد.',dialog:null},
    ],
    caretPosition:0,
    currentItemPosition:0
  },
  time:30,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'کشیدن و رها کردن',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  dragAndDrop:{
    image:'/images/cover6.png',
    music:null,
    video:null,
    question:'ترتیب جمله به هم ریخته زیر را درست کنید',
    answers:[{id:'ksdfjpieesfjijweio8373',text:'اتومبیل ها'},{id:'jasndajscinaaenoiiowda',text:' گاز'},{id:'jasasdaete44aaenoiiowda',text:'الاینده'},{id:'jasasdaetasd2i838247',text:' سمی'},{id:'jasasdasaasdasetasd2i838247',text:' تولید'},{id:'jasasdaetasdsarw32423wwds2i838247',text:' می کنند'}]
},
  time:60,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'جفت سازی',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  pairing:{
    question:'مترادف هر عبارت را پیدا کن',
    image:null,
    music:null,
    video:null,
    arrangeModel:'4 دسته 2 تایی',
    pairingItems:[
      {
        color: "bg-[#FFE2AA]",
        id:'asdkmawiiiqw8qwio932ujfbscxzczassadsdfnkxckcx',
        innerItems: [
          {
            id: 'sasaww4tw6tqweqweqweqwehhy',
            text: "بوق",
            image: null,
            color: "bg-[#FFB72A]",
          },
          {
            id: 'hgkoytr905rqweqweqweqwe5io7ty',
            text: 'آلودگی صوتی',
            image: null,
            color: "bg-[#FFB72A]",
          },
        ],
      },
      {
        color: "bg-[#E2C9FF]",
        id:'askdniaoi8we820ewkiasdeaqweqweqwedsasas',
        innerItems: [
          {
            id: 'aerwe45ttynhqweqweqwesacsscagnnuyi7',
            text: "دود",
            image: null,
            color: "bg-[#7900FF]",
          },
          {
            id: 'asxcjnnnosdeiasdasdww90rw09w',
            text: " آلودگی هوا ",
            image: null,
            color: "bg-[#7900FF]",
          },
        ],
      },
      {
        color: "bg-[#D8FFEA]",
        id:'u84w9823keoisqwqwqwedj939p932kewowe',
        innerItems: [
          {
            id: 'qweqweqwe2qe2qe',
            text:  " محیط زیست",
            image: null,
            color: "bg-[#75FFB4]",
          },
          {
            id: 'ascmkascoiaeqweqwew8r0wer01',
            text:  "طبیعت",
            image: null,
            color: "bg-[#75FFB4]",
          },
        ],
      },
      {
        color: "bg-[#FFE4DF]",
        id:'93qwejiisadosmdoncdqweqweuianedniasxpoaps',
        innerItems: [
          {
            id: 'asdmcicpmiiqweqw924779430',
            text: "آشغال",
            image: null,
            color: "bg-[#FFBCB1]",
          },
          {
            id: 'mkapsopjweiuio94832792894jfjcmc',
            text: "زباله",
            image: null,
            color: "bg-[#FFBCB1]",
          },
        ],
      },
      {
        color: "bg-[#FFE2AA]",
        id:'asdkmawiiiqw8qwio932ujfbsasdwdfnkxckcx',
        innerItems: [
          {
            id: 'sasaww4twqwe6thhy',
            text: "اتوبوس ",
            image: null,
            color: "bg-[#FFB72A]",
          },
          {
            id: 'hgkoytrqweqwe905r5io7ty',
            text: ' وسیله نقلیه',
            image: null,
            color: "bg-[#FFB72A]",
          },
        ],
      },
    ]
},
  time:60,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'جای خالی',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  blank:{
    image:null,
    music:null,
    video:null,
    question:'کلمه درست را در جای خالی مناسب قرار دهید',
    phrase:[{id:'asjdanioeirwpoeripwier939202jktg',text:'الودگی هوایی وسیله نقلیه ی',blank:null},{id:'asjdaniaasdw22',text:null,blank:'موتور سیکلت'},{id:'asjdania23asd22345w22',text:' از',blank:null},{id:'asjdaniaeesfd56488asdw22',text:null,blank:'دوچرخه '},{id:'as13r43r434jdania23asd22345w22',text:'بیشتر است.',blank:null},],
    extraAnswers:[{id:'2234tdrhljppo9u',text:'قایق'},{id:'khkyrtgfdsaddas54637',text:'بادکنک'}],
    caretPosition:0,
    currentItemPosition:0
},
  time:30,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'جفت سازی',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  pairing:{
    question:'مترادف هر عبارت را پیدا کن',
    image:null,
    music:null,
    video:null,
    arrangeModel:'4 دسته 2 تایی',
    pairingItems:[
      {
        color: "bg-[#FFE2AA]",
        id:'asdkmawiiiqw8qwio932ujfbsdfnkxckcx',
        innerItems: [
          {
            id: 'sasaww4tw6thhy',
            text: "آلودگی آب",
            image: null,
            color: "bg-[#FFB72A]",
          },
          {
            id: 'hgkoytr905r5io7ty',
            text: null,
            image: '/images/aloodegiAb.png',
            color: "bg-[#FFB72A]",
          },
        ],
      },
      {
        color: "bg-[#E2C9FF]",
        id:'askdniaoi8we820ewkiasdeadsasas',
        innerItems: [
          {
            id: 'aerwe45ttynhgnnuyi7',
            text: "سطل زباله",
            image: null,
            color: "bg-[#7900FF]",
          },
          {
            id: 'asxcjnnnosdeiw90rw09w',
            text: null,
            image: '/images/satlZobale.png',
            color: "bg-[#7900FF]",
          },
        ],
      },
      {
        color: "bg-[#D8FFEA]",
        id:'u84w9823keoisdj939p932kewowe',
        innerItems: [
          {
            id: 'mkaskcmoioa8376823rhuer',
            text:  "ماشین دودزا",
            image: null,
            color: "bg-[#75FFB4]",
          },
          {
            id: 'ascmkascoiaew8r0wer01',
            text:  null,
            image: '/images/mashinDoodza.png',
            color: "bg-[#75FFB4]",
          },
        ],
      },
      {
        color: "bg-[#FFE4DF]",
        id:'93qwejiisadosmdoncduianedniasxpoaps',
        innerItems: [
          {
            id: 'asdmcicpmii924779430',
            text: "آلودگی صوتی",
            image: null,
            color: "bg-[#FFBCB1]",
          },
          {
            id: 'mkapsopjweiuio94832792894jfjcmc',
            text: null,
            image: '/images/aloodegiSoot.png',
            color: "bg-[#FFBCB1]",
          },
        ],
      },
      {
        color: "bg-[#FFE2AA]",
        id:'asdkmawiiiqw8qwio932ujfbsdfnkxckcx',
        innerItems: [
          {
            id: 'sasaww4tw6thhy',
            text: "درخت کاشتن",
            image: null,
            color: "bg-[#FFB72A]",
          },
          {
            id: 'hgkoytr905r5io7ty',
            text: null,
            image: '/images/kashtanDerakht.png',
            color: "bg-[#FFB72A]",
          },
        ],
      },
      {
        color: "bg-[#FFE2AA]",
        id:'asdkmawiiiqw8qwio9sasdawe2212432ujfbsdfnkxckcx',
        innerItems: [
          {
            id: 'sasaww4tw6thhy',
            text: "محیط زیست",
            image: null,
            color: "bg-[#FFB72A]",
          },
          {
            id: 'hgkoytr905r5io7ty',
            text: null,
            image: '/images/mohitZist.png',
            color: "bg-[#FFB72A]",
          },
        ],
      },
    ]
},
  time:60,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'کلمه سازی',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  createWord:{
    image:null,
    music:null,
    video:null,
    question:'با این حروف کلمه بساز',
    words:[
      {id:'asdawewer3534543544f54g',chars:[{id:'jgjtasdasdawyjhtyjfdgeefawd',char:'ش'},{id:'asdwr332asdewrwet331wrdasdxZ',char:'ه'},{id:'asdwr332tewtwertte331wrdasdxZ',char:'ر'}]},
      {id:'asdawewe325345435r4f54g',chars:[{id:'jgjtyjhtyjfdgeefawd',char:'ا'},{id:'asdwr332331wrdasdxZ',char:'ب'}]},
      {id:'adhsnad43254346nsasjdnjaskd',chars:[{id:'asdawqe213t4768iuyvd',char:'ب'},{id:'asdqweq44rsfddfasd',char:'ا'},{id:'asdopwq8q3924wiekmad',char:'ر'},{id:'asdopwq8q3asdxczxcvgfd924wiekmad',char:'ش'}]},
      {id:'adawiw8e50r234234234ekwmvckds',chars:[{id:'jnscioiasioqw89e923',char:'ش'},{id:'3we32eder5t54ry6yj',char:'ی'},{id:'qsdwer43y76kyu8',char:'ر'},{id:'jnscioiaasdasdasdsioqw89e923',char:'ا'},{id:'3we32eder5t54w3qqerwrery6yj',char:'ب'},{id:'qsdwfsdvcxcxvcer43y76kyu8',char:'ه'}]},
      {id:'asdwqe234324324awewer4f54g',chars:[{id:'jgjasdasdwqqetasdasdawyjhtyjfdgeefawd',char:'ش'},{id:'asdwr332asdewrwet331wrdasqweqwedxZ',char:'ی'},{id:'asdwr332tewtwertqwe21eqte331wrdasdxZ',char:'ر'}]},
      {id:'askldjiwoa2342342joeqwqwdj',chars:[{id:'asdwwq434556',char:'ز'},{id:'cmklkosdniwio92191424',char:'ب'},{id:'kopdaopw9948392984234',char:'ا'},{id:'cmklkosdniwio9219asdacx2qw41424',char:'ل'},{id:'kopdaopwasdasdwrretgfds9948392984234',char:'ه'}]},

    ]
},
  time:120,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'تشریحی',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  descriptive:{
    question:'محیط زیست را تعریف کنید و چند مورد الوده کننده هوا را نام ببرید. ',
    image:'/images/cover11.png',
    music:null,
    video:null,
    mainAnswer:'محیط زیست عبارت است از مجموعه شرایط بیرونی که در طول عمر یا زندگی یک موجود زنده اثر میگذارد. ',
    otherAnswers:[' دود ماشین','کارخانجات','وسایل نقلیه شخصی ']
},
  time:60,
  score:5,
  hardship:'آسون'
},
{
  id:'',
  type:'کلمه سازی',
  icon:'/images/4gozineLevelIcon.svg',
  isSelected:false,
  createWord:{
    image:'/images/cover12.png',
    music:null,
    video:null,
    question:'کلمه مربوط به تصویر را بسازید',
    words:[
      {id:'adawiw8e50r234234234ekwfvvcvcmvckds',chars:[{id:'jnscioiasiasdawqweoqw89e923',char:'ت'},{id:'3we32ederaweqweq5t54ry6yj',char:'ف'},{id:'qsdwer43y76jgjhghjkyu8',char:'ک'},{id:'jnscioiaasdasdasdsionfgfqw89e923',char:'ی'},{id:'3we32eder5t54bvcbfgbw3qqerwrery6yj',char:'ک'},{id:'qsdwfsdvcxcxvvdfgdfcer43y76kyu8',char:'ز'},{id:'jnscioiaasdasdasdsisdfdtyoqw89e923',char:'ب'},{id:'3we32eder5t54w3ddddsdvtgdjhqqerwrery6yj',char:'ا'},{id:'qsdwfsdvcxcxvcer43ydssssssdafadsfasf76kyu8',char:'ل'},{id:'qsdwer4sas3y76asasdqwrrtgdfkyu8',char:'ه'},]},
   

    ]
},
  time:120,
  score:5,
  hardship:'آسون'
},






//   {
//     id:'',
//     type:'اسلاید',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     slide:{
//       image:'/images/1.jpg',
//       music:null,
//       video:null,
//       question:'این یه اسلایده'
//     },
//     time:20,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'کلمه سازی',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     createWord:{
//       image:null,
//       music:'/musics/1.mp3',
//       video:null,
//       question:'با این حروف کلمه بساز',
//       words:[
//         {id:'adawiw8e50rekwmvckds',chars:[{id:'jnscioiasioqw89e923',char:'ت'},{id:'3we32eder5t54ry6yj',char:'و'},{id:'qsdwer43y76kyu8',char:'پ'}]},
//         {id:'asdawewer4f54g',chars:[{id:'jgjtyjhtyjfdgeefawd',char:'س'},{id:'asdwr332331wrdasdxZ',char:'و'},{id:'drfwy6575y89hadasx',char:'پ'}]},
//         {id:'adhsnadnsasjdnjaskd',chars:[{id:'asdawqe213t4768iuyvd',char:'پ'},{id:'asdqweq44rsfddfasd',char:'ت'},{id:'asdopwq8q3924wiekmad',char:'و'}]},
//         {id:'askldjiwoajoeqwqwdj',chars:[{id:'asdwwq434556',char:'س'},{id:'cmklkosdniwio92191424',char:'و'},{id:'kopdaopw9948392984234',char:'ت'}]},
      
//       ]
//   },
//     time:120,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'جفت سازی',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     pairing:{
//       question:'کلمات مترادف را پیدا کنید',
//       image:null,
//       music:null,
//       video:'video',
//       arrangeModel:'4 دسته 2 تایی',
//       pairingItems:[
//         {
//           color: "bg-[#FFE2AA]",
//           id:'asdkmawiiiqw8qwio932ujfbsdfnkxckcx',
//           innerItems: [
//             {
//               id: 'sasaww4tw6thhy',
//               text: "خوش قلب",
//               image: null,
//               color: "bg-[#FFB72A]",
//             },
//             {
//               id: 'hgkoytr905r5io7ty',
//               text: null,
//               image: '/images/1.jpg',
//               color: "bg-[#FFB72A]",
//             },
//           ],
//         },
//         {
//           color: "bg-[#E2C9FF]",
//           id:'askdniaoi8we820ewkiasdeadsasas',
//           innerItems: [
//             {
//               id: 'aerwe45ttynhgnnuyi7',
//               text: "خوش قول ",
//               image: null,
//               color: "bg-[#7900FF]",
//             },
//             {
//               id: 'asxcjnnnosdeiw90rw09w',
//               text: "روی حرف هایش میشه حساب کرد",
//               image: null,
//               color: "bg-[#7900FF]",
//             },
//           ],
//         },
//         {
//           color: "bg-[#D8FFEA]",
//           id:'u84w9823keoisdj939p932kewowe',
//           innerItems: [
//             {
//               id: 'mkaskcmoioa8376823rhuer',
//               text:  " با خدا ",
//               image: null,
//               color: "bg-[#75FFB4]",
//             },
//             {
//               id: 'ascmkascoiaew8r0wer01',
//               text:  "با ایمان",
//               image: null,
//               color: "bg-[#75FFB4]",
//             },
//           ],
//         },
//         {
//           color: "bg-[#FFE4DF]",
//           id:'93qwejiisadosmdoncduianedniasxpoaps',
//           innerItems: [
//             {
//               id: 'asdmcicpmii924779430',
//               text: " آچار فرانسه",
//               image: null,
//               color: "bg-[#FFBCB1]",
//             },
//             {
//               id: 'mkapsopjweiuio94832792894jfjcmc',
//               text: "همه فن حریف",
//               image: null,
//               color: "bg-[#FFBCB1]",
//             },
//           ],
//         },
//         {
//           color: "bg-[#FFE2AA]",
//           id:'asdkmawiiiqw8qwio932ujfbsdfnkxckcx',
//           innerItems: [
//             {
//               id: 'sasaww4tw6thhy',
//               text: "خوش قلب",
//               image: null,
//               color: "bg-[#FFB72A]",
//             },
//             {
//               id: 'hgkoytr905r5io7ty',
//               text: null,
//               image: '/images/1.jpg',
//               color: "bg-[#FFB72A]",
//             },
//           ],
//         },
//         {
//           color: "bg-[#E2C9FF]",
//           id:'askdniaoi8we820ewkiasdeadsasas',
//           innerItems: [
//             {
//               id: 'aerwe45ttynhgnnuyi7',
//               text: "خوش قول ",
//               image: null,
//               color: "bg-[#7900FF]",
//             },
//             {
//               id: 'asxcjnnnosdeiw90rw09w',
//               text: "روی حرف هایش میشه حساب کرد",
//               image: null,
//               color: "bg-[#7900FF]",
//             },
//           ],
//         },
//       ]
//   },
//     time:60,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'تشریحی',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     descriptive:{
//       question:'یکی از جهت های اصلی جغرافیایی',
//       image:null,
//       music:null,
//       video:null,
//       mainAnswer:'شمال',
//       otherAnswers:['جنوب','غرب','شرق']
//   },
//     time:60,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'جای خالی',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     blank:{
//       image:null,
//       music:null,
//       video:null,
//       question:'کلمه درست را در جای خالی مناسب قرار دهید',
//       phrase:[{id:'asjdanioeirwpoeripwier939202jktg',text:'هر مولکول آب حاوی یک اتم',blank:null},{id:'asjdaniaasdw22',text:null,blank:'اکسیژن'},{id:'asjdania23asd22345w22',text:'و دو اتم',blank:null},{id:'asjdaniaeesfd56488asdw22',text:null,blank:'هیدروژن'},{id:'as13r43r434jdania23asd22345w22',text:'است',blank:null},],
//       extraAnswers:[{id:'2234tdrhljppo9u',text:'نیتروژن'},{id:'khkyrtgfdsaddas54637',text:'هلیوم'},{id:'asdhw1781903sa',text:'کربن'}],
//       caretPosition:0,
//       currentItemPosition:0
//   },
//     time:30,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'دیالوگ باکس',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     dialogBox:{
//       image:null,
//       music:null,
//       video:null,
//       question:'گزینه صحیح رو انتخاب کن',
//       phrase:[
//         {id:'kamsdkaiowdioeiowaioei299304',text:'من دیروز از مسافرت',dialog:null},
//         {id:'kamsdksaweraei48284924yy264',text:null,dialog:{choices:['برمیگردم','برخواهم گشت','برگشتم','برگشتی'],trueAnswer:2,isOpen:false}},
//         {id:'kamsdkaioasd21299304',text:'و به دیدن دوستم',dialog:null},
//         {id:'kyjyiluoklieraei48284924yy264',text:null,dialog:{choices:['رفت','رفتم','برگشنم','خواهم رفت'],trueAnswer:1,isOpen:false}},
//       ],
//       caretPosition:0,
//       currentItemPosition:0
//     },
//     time:30,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'کشیدن و رها کردن',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     dragAndDrop:{
//       image:null,
//       music:null,
//       video:null,
//       question:'ترتیب جمله به هم ریخته زیر را درست کنید',
//       answers:[{id:'ksdfjpieesfjijweio8373',text:'امروز'},{id:'jasndajscinaaenoiiowda',text:'هوا'},{id:'jasasdaete44aaenoiiowda',text:'ابری'},{id:'jasasdaetasd2i838247',text:'است'}]
//   },
//     time:60,
//     score:5,
//     hardship:'آسون'
// },
//   {
//     id:'',
//     type:'توالی و ترتیب',
//     icon:'/images/4gozineLevelIcon.svg',
//     isSelected:false,
//     sequenceAndOrder:{
//       answers:[
//         {
//           id: 'askfaso289489403ksdklsdl',
//           text: null,
//           image:'/images/1.jpg',
//           color: "bg-[#ffb72a]",
//            mask:"/images/GozineMask.svg",
//           isSelected: false,
//         },
//         {
//           id: 'mfdjgkldpro9487390lesofpfs',
//           text: null,
//           image:'/images/heartIcon.svg',
//           color: "bg-[#7900FF]",
//            mask:"/images/GozineMask2.svg",
//           isSelected: false,
//         },
//         {
//           id: 'ewiw84430ksdjfsnjsdcsldcs',
//           text: null,
//           image:'/images/horses.jpg',
//           color: "bg-[#B2FFD6]",
//            mask:"/images/GozineMask3.svg",
//           isSelected: true,
//         },
//         {
//           id: '23i4949jsdinfspdfklpscpodsifndsf',
//           text: '4',
//           color: "bg-[#FFDDD1]",
//            mask:"/images/GozineMask1.svg",
//           isSelected: true,
//         },
//         {
//           id: '23i4949jsdinfsp22122dfklpscpodsifndsf',
//           text: '5',
//           color: "bg-[#FFDDD1]",
//            mask:"/images/GozineMask1.svg",
//           isSelected: true,
//         },
//         {
//           id: '23i4949jasawsdinfsp22122dfklpscpodsifndsf',
//           text: '6',
//           color: "bg-[#FFDDD1]",
//            mask:"/images/GozineMask1.svg",
//           isSelected: true,
//         },
//       ],
//       image:null,
//       music:null,
//       video:null,
//       trueSequence:[],
//       question:'اعداد زیر رو به ترتیب از کوچیک به بزرگ از چپ به راست بچین',
//       isLtr:true
//   },
//     time:60,
//     score:5,
//     hardship:'آسون'
// },
//     {
//         id:'',
//         type:'چهار گزینه ای',
//         icon:'/images/4gozineLevelIcon.svg',
//         isSelected:false,
//         extraAnswers:[
//             {
//                 color:"bg-[#FE4E13]",
//                 mask:"/images/GozineMask.svg",
//             },
//             {
//                 color:"bg-[#6BD3F1]",
//                 mask:"/images/GozineMask3.svg",
//             },
//         ],
//         fourChoice:{
//             answers:[
//                 {
//                   id: '',
//                   text: null,
//                   image:'/images/1.jpg',
//                   color: "bg-[#ffb72a]",
//                    mask:"/images/GozineMask.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: null,
//                   image:'/images/horses.jpg',
//                   color: "bg-[#7900FF]",
//                    mask:"/images/GozineMask2.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: '3',
//                   color: "bg-[#B2FFD6]",
//                    mask:"/images/GozineMask3.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: '4',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: true,
//                 },
//                 {
//                   id: '',
//                   text: '5',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: true,
//                 },
//                 {
//                   id: '',
//                   text: '6',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: true,
//                 },
//               ],
//             isMultipleChoice:false,
//             image:null,
//             music:null,
//             video:null,
//             question:'2 + 2 = ?'
//         },
//         time:30,
//         score:5,
//         hardship:'آسون'
//     },
//     {
//         id:'',
//         type:'چند گزینه ای',
//         icon:'/images/4gozineLevelIcon.svg',
//         isSelected:false,
//         extraAnswers:[
//             {
//                 color:"bg-[#FE4E13]",
//                 mask:"/images/GozineMask.svg",
//             },
//             {
//                 color:"bg-[#6BD3F1]",
//                 mask:"/images/GozineMask3.svg",
//             },
//         ],
//         fourChoice:{
//             answers:[
//                 {
//                   id: '',
//                   text: '1',
//                   color: "bg-[#ffb72a]",
//                    mask:"/images/GozineMask.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: '2',
//                   color: "bg-[#7900FF]",
//                    mask:"/images/GozineMask2.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: '3',
//                   color: "bg-[#B2FFD6]",
//                    mask:"/images/GozineMask3.svg",
//                   isSelected: true,
//                 },
//                 {
//                   id: '',
//                   text: '4',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: true,
//                 },
//               ],
//             isMultipleChoice:true,
//             image:null,
//             music:null,
//             video:null,
//             question:'این اعداد رو انتخاب کن : 3 - 4'
//         },
//         time:60,
//         score:5,
//         hardship:'آسون'
//     },
//     {
//         id:'',
//         type:'چند گزینه ای',
//         icon:'/images/4gozineLevelIcon.svg',
//         isSelected:false,
//         extraAnswers:[
//             {
//                 color:"bg-[#FE4E13]",
//                 mask:"/images/GozineMask.svg",
//             },
//             {
//                 color:"bg-[#6BD3F1]",
//                 mask:"/images/GozineMask3.svg",
//             },
//         ],
//         fourChoice:{
//             answers:[
//                 {
//                   id: '',
//                   text: 'سه',
//                   color: "bg-[#ffb72a]",
//                    mask:"/images/GozineMask.svg",
//                   isSelected: true,
//                 },
//                 {
//                   id: '',
//                   text: 'دو',
//                   color: "bg-[#7900FF]",
//                    mask:"/images/GozineMask2.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: 'چهار',
//                   color: "bg-[#B2FFD6]",
//                    mask:"/images/GozineMask3.svg",
//                   isSelected: true,
//                 },
//                 {
//                   id: '',
//                   text: 'پنج',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: '3',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: false,
//                 },
//                 {
//                   id: '',
//                   text: '4',
//                   color: "bg-[#FFDDD1]",
//                    mask:"/images/GozineMask1.svg",
//                   isSelected: false,
//                 },
//               ],
//             isMultipleChoice:true,
//             image:null,
//             music:null,
//             video:null,
//             question:'عدد 3 و 4 رو به حروف انتخاب کن'
//         },
//         time:60,
//         score:5,
//         hardship:'آسون'
//     },
//     {
//         id:'',
//         type:'درست و غلط',
//         icon:'/images/4gozineLevelIcon.svg',
//         isSelected:false,
//         trueFalse:{
//           answer:'غلط',
//           image:null,
//           music:null,
//           video:null,
//           question:'لاک پشت ها پرواز میکنند',
//       },
//         time:30,
//         score:5,
//         hardship:'آسون'
//     } 
];

module.exports = {
    generateFakeGameLevels,
};