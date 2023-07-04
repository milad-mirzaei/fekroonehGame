import React, { useRef } from 'react'
import useLevelsStatus from '../hooks/useLevelsStatus';
import Image from 'next/image';



const mediaBoxView = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {levels} = useLevelsStatus();

    const selectedLevelIndex = levels?.findIndex(
      (level) => level.isSelected == true
    );
    const currentLevel = levels[selectedLevelIndex];

    const image =
currentLevel.type == 'چهار گزینه ای' ? currentLevel.fourChoice.image:
currentLevel.type == 'چند گزینه ای' ? currentLevel.fourChoice.image:
currentLevel.type =='درست و غلط' ? currentLevel.trueFalse.image:
currentLevel.type == 'توالی و ترتیب' ? currentLevel.sequenceAndOrder.image:
currentLevel.type == 'دیالوگ باکس' ? currentLevel.dialogBox.image:
currentLevel.type == 'کشیدن و رها کردن' ? currentLevel.dragAndDrop.image:
currentLevel.type == 'جای خالی' ? currentLevel.blank.image:
currentLevel.type == 'جفت سازی' ? currentLevel.pairing.image:
currentLevel.type == 'تشریحی' ? currentLevel.descriptive.image:
currentLevel.type == 'اسلاید' ? currentLevel.slide.image:
currentLevel.createWord.image
;

const music =
currentLevel.type == 'چهار گزینه ای' ? currentLevel.fourChoice.music:
currentLevel.type == 'چند گزینه ای' ? currentLevel.fourChoice.music:
currentLevel.type =='درست و غلط' ? currentLevel.trueFalse.music:
currentLevel.type == 'توالی و ترتیب' ? currentLevel.sequenceAndOrder.music:
currentLevel.type == 'دیالوگ باکس' ? currentLevel.dialogBox.music:
currentLevel.type == 'کشیدن و رها کردن' ? currentLevel.dragAndDrop.music:
currentLevel.type == 'جای خالی' ? currentLevel.blank.music:
currentLevel.type == 'جفت سازی' ? currentLevel.pairing.music:
currentLevel.type == 'تشریحی' ? currentLevel.descriptive.music:
currentLevel.type == 'اسلاید' ? currentLevel.slide.music:
currentLevel.createWord.music
;

const video =
currentLevel.type == 'چهار گزینه ای' ? currentLevel.fourChoice.video:
currentLevel.type == 'چند گزینه ای' ? currentLevel.fourChoice.video:
currentLevel.type =='درست و غلط' ? currentLevel.trueFalse.video:
currentLevel.type == 'توالی و ترتیب' ? currentLevel.sequenceAndOrder.video:
currentLevel.type == 'دیالوگ باکس' ? currentLevel.dialogBox.video:
currentLevel.type == 'کشیدن و رها کردن' ? currentLevel.dragAndDrop.video:
currentLevel.type == 'جای خالی' ? currentLevel.blank.video:
currentLevel.type == 'جفت سازی' ? currentLevel.pairing.video:
currentLevel.type == 'تشریحی' ? currentLevel.descriptive.video:
currentLevel.type == 'اسلاید' ? currentLevel.slide.video:
currentLevel.createWord.video
;

// eslint-disable-next-line react-hooks/rules-of-hooks
const audioRef = useRef<HTMLAudioElement>(null);

console.log(image);
  return (
    <div className='w-[350px] h-[350px] mb-[50px] flex justify-center items-center rounded-[20px] bg-white bg-opacity-50 backdrop-blur-3xl drop-shadow-2xl'>
        {image !== null && <Image src={image} alt='image' layout='fill' objectFit='contain' />}
        {music !== null && <div className='flex flex-col items-center justify-center gap-[20px]'>
            <Image src='/images/playIcon.png' alt='play' width={150} height={150} objectFit='contain'
            className='cursor-pointer'
            onClick={()=>{audioRef.current?.play()}}
            />
            <p className='text-[25px] font-[700]'>پخش صدا</p>
            <audio src={music} ref={audioRef} />
            </div>}
        {video !== null && <div>video</div>}
    </div>
  )
}

export default mediaBoxView