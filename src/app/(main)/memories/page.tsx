import BackgroundImage from "@/components/BackgroundImage"
import HeartsRain from "@/components/HeartsRain"
import CoverRow from "@/components/CapturedMemories"

import bgMusic from '@/images/bgMusic.png'

export const metadata = {
    title: "For my love | Memories page",
    description: "Memories page",
}

export default function Index() {
    return (
        <>
            <HeartsRain variant="photos"/>
            <BackgroundImage
                src={bgMusic.src}
                bgClassName="bg-white"
            >
                <CoverRow
                    title='Captured Memories'
                    subtitle='Photos'
                    button={{
                        href: '/home',
                        caption: 'Return',
                        className: 'button border-red bg-hover-white transition-m'
                    }}
                    covers={[
                        {
                            title: 'Love is gaming together',
                            type: 'image',
                            preview: { src: '/images/1.png', alt: '' }
                        },
                        {
                            title: 'Game',
                            type: 'image',
                            preview: { src: '/images/2.png', alt: '' }
                        },
                        {
                            title: 'Game',
                            type: 'image',
                            preview: { src: '/images/3.png', alt: '' }
                        },
                        {
                            title: 'Game',
                            type: 'image',
                            preview: { src: '/images/4.png', alt: '' }
                        },
                        {
                            title: 'Game',
                            type: 'image',
                            preview: { src: '/images/5.png', alt: '' }
                        },
                        {
                            title: 'Game',
                            type: 'image',
                            preview: { src: '/images/6.png', alt: '' }
                        }
                    ]}
                />

            </BackgroundImage>
        </>
    )
}