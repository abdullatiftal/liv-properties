import { EnquireForm } from '@/app/components'
import Image from 'next/image'

export default async function SellPage() {
    return (
        <div>
            <div className='mb-[82px] relative min-[1630px]:min-w-[1440px] max-[1629px]:w-full'>
                <div className='gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Sell Your</div>
                    <div>Property</div>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] pointer-events-none'>
                        <Image src='/images/sell_hero.webp' alt='Home' width={1384} height={736} />
                    </div>
                </div>
            </div>
            <div className='mt-[200px] flex flex-wrap gap-[76px]'>
                <div className='max-w-[568px] text-xs leading-[162%]'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </div>
                <div className='max-w-[568px] text-xs leading-[162%]'>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
            </div>
            <div className='my-[72px] flex flex-wrap gap-[29px]'>
                <Image src='/images/sell1.webp' alt='Building in snow' width={790} height={480} className='mt-[50px] max-w-full' />
                <Image src='/images/sell2.webp' alt='Building in snow' width={395} height={480} className='mt-[50px] max-w-full' />
            </div>
            <div className='mb-[72px]'>
                <div className='gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Enquire</div>
                    <div>Now</div>
                </div>
                <EnquireForm />
            </div>
        </div>
    )
}
