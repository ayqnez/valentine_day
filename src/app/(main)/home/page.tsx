import BackgroundImage from '@/components/BackgroundImage';

import bgMain from '@/images/bg.png'
import BoxGrid from '@/components/Box';

//home
import love from '@/images/home/love.png';
import flowers from '@/images/home/flowers.png';
import lock from '@/images/home/lock.png';
import letter from '@/images/home/letter.png';
import HeartsRain from '@/components/HeartsRain';

export const metadata = {
    title: "For my love | Gifts page",
    description: "Gifts page",
}

export default function Index() {
    return (
        <>
            <HeartsRain />
            <BackgroundImage src={bgMain.src} bgClassName='bg-white'>
                <BoxGrid
                    title='These are for you!'
                    subtitle='I hope you like it, I love you!'
                    boxes={[
                        {
                            href: '/memories',
                            img: {
                                src: love.src,
                                alt: 'Love'
                            }
                        },
                        // {
                        //     href: '/flowers',
                        //     img: {
                        //         src: flowers.src,
                        //         alt: 'Love'
                        //     }
                        // },
                        {
                            href: '/music',
                            img: {
                                src: lock.src,
                                alt: 'Love'
                            }
                        },
                        {
                            href: '/letter',
                            img: {
                                src: letter.src,
                                alt: 'Love'
                            }
                        }
                    ]}
                />
            </BackgroundImage>
        </>
    );
}