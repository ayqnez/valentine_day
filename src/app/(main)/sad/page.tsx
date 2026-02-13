import pageStyles from '@/styles/pages/sad/index.module.scss'

import Promo from "@/components/Promo";
import BackgroundImage from '@/components/BackgroundImage';

import clsx from 'clsx';

import bgMain from '@/images/bg.png'
import bunnySad from '@/images/bunny-sad.gif'

export const metadata = {
    title: "For my love | Sad page",
    description: "Sad page",
}

export default function Index() {
    return (
        <>
            <BackgroundImage src={bgMain.src} bgClassName='bg-black'>
                <Promo
                    info={
                        <>
                            <img src={bunnySad.src} alt="Bunny Love" width={150} height={150} />
                        </>
                    }
                    style={{ maxWidth: '900px' }}
                    title="I promise you'll like it"
                    buttons={[
                        {
                            href: '/',
                            caption: 'Try Again',
                            className: 'color-dark border-red bg-hover-white transition-m'
                        },
                    ]}
                    childrenClassNames={{
                        info: clsx('color-white'),
                        title: clsx('color-red', pageStyles.title),
                        description: clsx('color-grey')
                    }}
                />
            </BackgroundImage>
        </>
    )
}