import '@/app/ui/index.css';
import Link from 'next/link';
import Image from 'next/image';
import { NewsResponse, NewsItem } from '@/app/types';
import { Metadata } from 'next';
import { createSlug, fetchGeneral, formatDate } from '../constants';
import NewsCard from '../components/NewsCard';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'News & Events',
        description: 'News & Events',
        keywords: 'News & Events'
    };
}

export default async function NewsPage() {
    const newsData: NewsResponse = await fetchGeneral('news');

    const latestNews = newsData.data.length > 0 ? newsData.data[0] : null;
    const otherNews = newsData.data.length > 1 ? newsData.data.slice(1) : [];

    if (!latestNews) {
        return <div>No news available</div>;
    }

    return (
        <div className='news-events mb-[30px] w-full sm:mb-[60px] sm:mt-[-50px] lg:mt-0 xl:mb-[70px] 3xl:max-w-[1200px]'>
            <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                <h1>News & Events</h1>
            </div>
            <Link
                href={`/news/${createSlug(latestNews.heading)}`}
                className='relative mt-[50px] block h-[380px] w-full lg:h-[480px]'
            >
                <Image
                    src={latestNews.image}
                    alt={latestNews.heading}
                    width={0}
                    height={0}
                    className=''
                    fill={true}
                />
            </Link>
            <h2 className='mt-[33px] text-[25px] font-[200]'>
                {latestNews.heading}
            </h2>
            <button
                type='submit'
                className='mr-auto mt-[16px] block rounded-3xl border border-solid border-[#EDDFD0] px-[16px] py-[9px] text-xs transition
                duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
            >
                {formatDate(latestNews.created_at)}
            </button>
            <div
                className='ellipse-text-container news-desc mt-[14px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[30px] text-xs'
                dangerouslySetInnerHTML={{
                    __html: latestNews.description
                }}
            ></div>
            <div className='mt-[8px] flex flex-wrap border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[34px] md:mt-[0px] xl:flex-nowrap'>
                {otherNews.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem} />
                ))}
            </div>
        </div>
    );
}
