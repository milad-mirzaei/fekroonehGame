import React, { ReactElement } from 'react'
import Image from 'next/image'
import useUserData from '../../hooks/useUserData'

const GameViewHeader = () => {

    const {userHearts} = useUserData();

// const heartsList = [
//     '',
//     '',
//     '',
//     '',
//     '',
// ]

const createHearts=()=>{
    const heartsList:ReactElement[]=[
        <div  key={0} className=''><Image src='/images/lightheart.svg' alt='heart' width={32} height={32} /></div>,
        <div  key={1} className=''><Image src='/images/lightheart.svg' alt='heart' width={32} height={32} /></div>,
        <div  key={2} className=''><Image src='/images/lightheart.svg' alt='heart' width={32} height={32} /></div>,
        <div  key={3} className=''><Image src='/images/lightheart.svg' alt='heart' width={32} height={32} /></div>,
        <div  key={4} className=''><Image src='/images/lightheart.svg' alt='heart' width={32} height={32} /></div>,
];
    for (let i = 0; i < userHearts! ;  i++) {
        heartsList.splice(i,1, <div key={i} className=''>
            <Image src='/images/heartIcon.svg' alt='heart' width={32} height={32} />
        </div>)
    }
    return heartsList;
}


  return (
    <div className='w-full h-[70px] bg-white flex justify-between pl-[45px] pr-[33px] items-center gap-2'>
        <div className='flex justify-center gap-4 items-center bg-white '>
            <p className='text-[18px] text-[#aaaaaa]'>نام بازی :</p>
            <p className='text-[18px] font-bold text-[#7900FF]'>پرتقال من کجاست؟!</p>
        </div>
        <div className='flex justify-center gap-[24px] items-center  border-[1px] border-[#DEDFEA] rounded-full w-[267px] h-[54px] '>
            <div className='flex justify-center items-center pt-2 gap-[3px]' dir='ltr'>
                {
createHearts()
                }
               
                </div>
            <div className='w-[36px] h-[36px] flex justify-center items-center bg-[#28DE7C] rounded-full '><p className='flex justify-center items-center mt-[7px] w-[26px] h-[26px] text-[25px] font-[700] text-white'>+</p></div>
        </div>
    </div>
  )
}

export default GameViewHeader