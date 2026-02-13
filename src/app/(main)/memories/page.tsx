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
            <HeartsRain variant="lips" />
            <BackgroundImage
                src={bgMusic.src}
                bgClassName="bg-white"
            >
                <CoverRow
                    title='Captured Memories'
                    subtitle='Photos (We will add photos in the future)'
                    button={{
                        href: '/home',
                        caption: 'Return',
                        className: 'button border-red bg-hover-white transition-m'
                    }}
                    covers={[
                        {
                            title: 'Love is playing CS:GO together.',
                            type: 'image',
                            preview: { src: '/images/1.png', alt: '' }
                        },
                        {
                            title: 'Love is a walk through the village corners.',
                            type: 'image',
                            preview: { src: '/images/2.png', alt: '' }
                        },
                        {
                            title: 'Love is cozzy evenings together.',
                            type: 'image',
                            preview: { src: '/images/3.png', alt: '' }
                        },
                        {
                            title: 'Love is winning a 1 on 5 clutch match while she watches.',
                            type: 'image',
                            preview: { src: '/images/4.png', alt: '' }
                        },
                        {
                            title: 'Love is camping together in the mouintains.',
                            type: 'image',
                            preview: { src: '/images/5.png', alt: '' }
                        },
                        {
                            title: 'Love is when IT and healthcare make the perfect combination.',
                            type: 'image',
                            preview: { src: '/images/6.png', alt: '' }
                        },
                        {
                            title: "Love is coding a website for her on Valentine's.",
                            type: 'image',
                            preview: { src: '/images/7.png', alt: '' }
                        },
                        {
                            title: "Love is watching her do her makeup with admiraion.",
                            type: 'image',
                            preview: { src: '/images/8.png', alt: '' }
                        }
                    ]}
                />

            </BackgroundImage>
        </>
    )
}