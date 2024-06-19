import Image from 'next/image'
import s from '@/app/ui/main.module.css'

export const Instagram = () => {
    return (
        <div className="">
            <div className='text-[40px] sm:text-[69px] leading-[123%] font-[700]'>
                <div>Instagram</div>
            </div>
            <div className='flex items-start text-sm mt-[13px] font-[200] leading-[177%]'>
                <Image src='/icons/instagram.svg' alt='Instagram icon' width={20} height={20} className='mr-[9px]' />
                <div>Slimproperties</div>
            </div>
            <div className='mt-[30px] flex flex-wrap'>
                <div className='max-w-[50%] overflow-hidden'>
                    <Image src='/images/1_inst.jpg' alt='Photo of a property' width={305} height={307} className='hover:scale-110 hover:transition duration-200 ease-in-out' />
                </div>
                <div className='max-w-[50%] overflow-hidden'>
                    <Image src='/images/2_inst.jpg' alt='Photo of a property' width={305} height={307} className='hover:scale-110 hover:transition duration-200 ease-in-out' />
                </div>
                <div className='max-w-[50%] max-[639px]:hidden overflow-hidden'>
                    <Image src='/images/3_inst.jpg' alt='Photo of a property' width={305} height={307} className='hover:scale-110 hover:transition duration-200 ease-in-out' />
                </div>
                <div className={`max-w-[50%] max-[639px]:hidden ${s.lastProperty}`}>
                    <Image src='/images/property.jpg' alt='Photo of a property' width={304} height={293} />
                    <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                </div>
            </div>
        </div>
    )
}