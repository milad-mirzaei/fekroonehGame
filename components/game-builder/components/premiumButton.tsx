import Image from 'next/image'
import React from 'react'

const premiumButton = () => {
  return (
    <div className='relative flex items-center  justify-center'>
        <Image src='/images/premiumeButtonBg.svg' alt='premium' width={800} height={75} />
        <div className='absolute left-[30px] top-[19px] w-[125px] h-[40px] rounded-[11px] bg-white flex justify-center items-center text-[#7119D3] text-[12px] font-[400]'>خرید اشتراک پریمیوم</div>
        <div className='absolute right-[35px] top-[28px] flex justify-center items-center gap-2'>
            <Image src='/images/premiumIcon.svg' alt='premium' width={20} height={20}/>
            <p className='text-[13px] font-[700] text-white'>برای فعال شدن تمام قابلیت های بازیساز میتونی اشتراک پریمیوم بگیری و از اونها لذت ببری.</p>
        </div>
    </div>
  )
}

export default premiumButton