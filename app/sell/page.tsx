import { EnquireForm } from '@/app/components'
import Image from 'next/image'

export default async function SellPage() {
    return (
        <div className='mb-[30px] sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px] w-full mx-auto'>
            <div className='mb-[82px] relative'>
                <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                    <h2>Sell Your<br/>Property</h2>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-30%] msm:translate-y-[-55%] sm:translate-y-[-60%] md:translate-y-[-60%] xl:translate-y-[-80%]  mdlap:translate-y-[-70%] scale-[1.4] md:scale-[1.3] lg:scale-[1.3] 2xl:scale-[1.4] pointer-events-none'>
                        <Image src='/images/sell_hero.webp' alt='Home' width={1384} height={736} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-[30px]'>
                <p className='text-xs leading-[162%] lg:w-[calc(50%-15px)]'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </p>
                <p className='text-xs leading-[162%] lg:w-[calc(50%-15px)]'>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-[0px] lg:gap-[30px]'>
                <Image src='/images/sell1.webp' alt='Building in snow' width={790} height={480} className='mt-[50px] w-full lg:w-[calc(70%-15px)]' />
                <Image src='/images/sell2.webp' alt='Building in snow' width={395} height={480} className='mt-[50px] w-full lg:w-[calc(30%-15px)]' />
            </div>
            <div className='mt-[72px]'>
            <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                <h2>Enquire<br/>Now</h2>
                </div>
                <EnquireForm />
            </div>
        </div>
    )
}
