import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import Link from 'next/link'

export const Instagram = () => {
    return (
        <div className="px-[3vw] sm:px-[0px] flex flex-col verticalPanelInner instagram-sec">
            <div className='home-sec_title'>
                <div className='text-[40px] small:text-[69px] leading-[94%] font-[700]'>
                    <h2>Instagram</h2>
                </div>
            </div>
            <div className='text-sm small:mt-[13px] font-[200] leading-[177%]'>
                <Link href='/' className='flex items-start'>
                    <Image src='/icons/instagram.svg' alt='Instagram icon' width={20} height={20} className='mr-[9px]' />
                    <h5 className='inline'>Slimproperties</h5>
                </Link>
            </div>
            <div className='small:mt-[30px] grid grid-cols-[repeat(2,1fr)] grid-rows-[2fr] sm:grid-cols-[repeat(4,1fr)] sm:grid-rows-[1fr] gap-x-0 max-w-[1200px]'>
                <div className='overflow-hidden'>
                    <Image src='/images/1_inst.jpg' alt='Photo of a property' width={300} height={300} className='hover:scale-110 hover:transition duration-200 ease-in-out' />
                </div>
                <div className='overflow-hidden'>
                    <Image src='/images/2_inst.jpg' alt='Photo of a property' width={300} height={300} className='hover:scale-110 hover:transition duration-200 ease-in-out' />
                </div>
                <div className='max-[639px]:hidden overflow-hidden'>
                    <Image src='/images/3_inst.jpg' alt='Photo of a property' width={300} height={300} className='hover:scale-110 hover:transition duration-200 ease-in-out' />
                </div>
                <div className={`max-[639px]:hidden ${s.lastProperty}`}>
                    <Image src='/images/property.jpg' alt='Photo of a property' width={300} height={300} />
                    <Link href='/'>
                        <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}