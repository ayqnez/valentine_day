import BackgroundImage from '@/components/BackgroundImage';

import bgMusic from '@/images/bgMusic.png'
import MusicCard from '@/components/MusicCard';
import HeartsRain from '@/components/HeartsRain';

export const metadata = {
    title: "For my love | Muisc page",
    description: "Music page",
}

export default function Index() {
    return (
        <>
            <HeartsRain variant='song' />
            <BackgroundImage src={bgMusic.src} bgClassName='bg-black'>
                <MusicCard
                    title='This song reminds me of you (>.<)'
                    video={{
                        youtubeUrl: 'https://www.youtube.com/watch?v=_3biKBDpuZo&list=RD_3biKBDpuZo&start_radio=1',
                        autoplay: false,
                        controls: true
                    }}
                    songName=''
                    subtitle='You are not a woman, you are my dream.'
                    button={{
                        caption: 'Return',
                        href: '/home',
                        className: 'button border-red bg-hover-white transition-m'
                    }}
                />
            </BackgroundImage>
        </>
    )
}