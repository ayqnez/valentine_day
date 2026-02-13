import BackgroundImage from "@/components/BackgroundImage"
import CoverRow from "@/components/CapturedMemories"

import bgMusic from '@/images/bgMusic.png'

export const metadata = {
    title: "For my love | Memories page",
    description: "Memories page",
}

export default function Index() {
    return (
        <>
            <BackgroundImage
                src={bgMusic.src}
                bgClassName="bg-black"
            >
                <CoverRow
                    title='Captured Memories'
                    subtitle='Photos & videos'
                    button={{
                        href: '/home',
                        caption: 'Return',
                        className: 'button border-red bg-hover-white transition-m'
                    }}
                    covers={[
                        {
                            title: 'Test',
                            type: 'video',
                            videoUrl: '/videos/home.mp4',
                        },
                        // {
                        //     title: 'Test',
                        //     type: 'video',
                        //     videoUrl: '/videos/ala1.mp4',
                        // },
                        {
                            title: 'Test',
                            type: 'video',
                            videoUrl: '/videos/ala2.mp4',
                        }
                    ]}
                />

            </BackgroundImage>
        </>
    )
}