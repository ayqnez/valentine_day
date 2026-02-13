import BackgroundImage from '@/components/BackgroundImage';

import bgMusic from '@/images/bgMusic.png'
import Letter from '@/components/Letter';
import HeartsRain from '@/components/HeartsRain';

export const metadata = {
    title: "For my love | Letter page",
    description: "Letter page",
}

export default function Index() {
    return (
        <>
            <HeartsRain variant='letter' />
            <BackgroundImage src={bgMusic.src} bgClassName='bg-black'>
                <Letter
                    title='Message for my love'
                    button={{
                        href: '/home',
                        caption: 'Return',
                        className: 'button border-red bg-hover-white transitition-m'
                    }}
                />
            </BackgroundImage>
        </>
    )
}