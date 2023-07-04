import React from 'react'
import useLevels from '../hooks/useLevels';
import useAudioModal from '../hooks/useAudioModal';
import useAddImageModal from '../hooks/useAddImageModal';
import Image from 'next/image';
import GameDetails from '../hooks/GameDetails';

const MediaBox = () => {
    const {levels,currentLevelIndex,deleteLevelImage} = GameDetails();
  
    
    const selectedLevelIndex = levels.findIndex(
      (level) => level.isSelected == true
    );
    const currentLevel = levels[currentLevelIndex];

    const audioModal = useAudioModal();
    const addImageModal = useAddImageModal();

    const {image,music,video} = currentLevel;



  return (
    <div className='w-[402px] h-[200px] rounded-[11px] bg-[#fcfcfc]  flex flex-col  items-center justify-start '>
          
          {image == null &&
          music == null &&
          video == null ? (
            <div className="flex flex-col  items-center justify-center gap-[40px] mt-[15px]">
              <p className='text-[#7900FF] text-[19px] font-[500]'>میتونی یک تصویر , صدا یا ویدیو اضافه کنی</p>
              <div className="flex gap-2">
                  <Image onClick={() => addImageModal.onOpen("levelImage",null,null)} className='cursor-pointer hover:scale-110 transition-all duration-200' src="/images/addImage.svg" alt="image" width={55} height={55}/>
                <div
                  className="cursor-pointer relative w-[65px] h-[62px] flex items-center justify-center  border-[#FF6A03] border-[2px] rounded-[11px] hover:scale-110 transition-all duration-200"
                  
                >
                  <Image onClick={audioModal.onOpen} src="/images/sound3dIcon.svg" className='cursor-pointer hover:scale-110 transition-all duration-200' alt="voice" width={57} height={42}/>
                  <div
                    className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FF6A03] rounded-full  -bottom-[14px]"
                  >
                    <Image src="/images/premiumIconWhite.svg"  alt="plus" width={13} height={13} />
                  </div>
                </div>
                <div className="cursor-pointer relative w-[65px] h-[62px] flex items-center justify-center  border-[#FF6A03] border-[2px] rounded-[11px] hover:scale-110 transition-all duration-200">
                  <Image src="/images/video3dIcon.svg" className='cursor-pointer hover:scale-110 transition-all duration-200' alt="video" width={45} height={45}/>
                  <div
                    className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FF6A03] rounded-full  -bottom-[14px]"
                  >
                    <Image src="/images/premiumIconWhite.svg" alt="plus" width={13} height={13} />
                  </div>
                </div>
              </div>
            </div>
          ) : music == null &&
            video == null ? (
            <div className="h-full w-full  flex justify-center items-center group/levelImage  relative">
              <Image
                className="h-full rounded-[20px]"
                src={image["data_url"]}
                alt=""  
                layout='fill'
                objectFit='contain'
              />
              <div className="absolute w-full h-full rounded-[11px] bg-neutral-300 bg-opacity-40  hidden group-hover/levelImage:flex items-center  gap-2 justify-center transition-all duration-500">
                
                <button className="  rounded-[11px] px-5 py-2 bg-white  group/remove hover:bg-red-50  transition-all duration-500" onClick={deleteLevelImage}>
                  <p className="text-[20px] text-gray-400 group-hover/remove:text-red-600 transition-all duration-500">
                    پاک کردن
                  </p>
                </button>
              </div>
            </div>
          ) : image == null &&
            video == null ? (
            <p>موزیک</p>
          ) : (
            <p>ویدیو</p>
          )}
          </div>
  )
}

export default MediaBox