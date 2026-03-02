import BackgroundImage from "@/components/BackgroundImage"
import HeartsRain from "@/components/HeartsRain"
import CoverRow from "@/components/CapturedMemories"

import bgMusic from '@/images/bgMusic.png'

import csImg from '@/images/memories/1.png'
import walkImg from '@/images/memories/2.png'
import eveningsImg from '@/images/memories/3.png'
import clutchImg from '@/images/memories/4.png'
import campingImg from '@/images/memories/5.png'
import healthcareImg from '@/images/memories/6.png'
import codingImg from '@/images/memories/7.png'
import makeupImg from '@/images/memories/8.png'

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
                            preview: { src: csImg.src, alt: '' }
                        },
                        {
                            title: 'Love is a walk through the village corners.',
                            type: 'image',
                            preview: { src: walkImg.src, alt: '' }
                        },
                        {
                            title: 'Love is cozzy evenings together.',
                            type: 'image',
                            preview: { src: eveningsImg.src, alt: '' }
                        },
                        {
                            title: 'Love is winning a 1 on 5 clutch match while she watches.',
                            type: 'image',
                            preview: { src: clutchImg.src, alt: '' }
                        },
                        {
                            title: 'Love is camping together in the mouintains.',
                            type: 'image',
                            preview: { src: campingImg.src, alt: '' }
                        },
                        {
                            title: 'Love is when IT and healthcare make the perfect combination.',
                            type: 'image',
                            preview: { src: healthcareImg.src, alt: '' }
                        },
                        {
                            title: "Love is coding a website for her on Valentine's.",
                            type: 'image',
                            preview: { src: codingImg.src, alt: '' }
                        },
                        {
                            title: "Love is watching her do her makeup with admiraion.",
                            type: 'image',
                            preview: { src: makeupImg.src, alt: '' }
                        }
                    ]}
                />

            </BackgroundImage>
        </>
    )
}