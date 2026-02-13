import pageStyles from '@/styles/pages/index.module.css'

import Promo from "@/components/Promo";
import BackgroundImage from '@/components/BackgroundImage';

import clsx from 'clsx';

import bgMain from '@/images/bg.png'
import bunnyLove from '@/images/bunny-love.gif'

export const metadata = {
  title: "For my love | Main page",
  description: "Main page",
}

export default function Index() {
  return (
    <>
      <BackgroundImage src={bgMain.src} bgClassName='bg-black'>
        <Promo
          info={
            <>
              <img src={bunnyLove.src} alt="Bunny Love" />
            </>
          }
          style={{ maxWidth: '820px' }}
          title={
            <>
              Hello <br />
              <span className='color-red'>
                My Love !
              </span>
            </>
          }
          description="will you be my valentine?"
          buttons={[
            {
              href: '/home',
              caption: 'Yes',
              className: 'color-dark border-red bg-hover-white transition-m'
            },
            {
              href: '/sad',
              caption: 'No',
              className: 'color-dark border-red bg-hover-white transition-m'
            }
          ]}
          childrenClassNames={{
            info: clsx('color-white'),
            title: clsx('color-black'),
            description: clsx('color-grey'),
            buttons: pageStyles.buttons
          }}
          secondButtonEscapes={true}
        />
      </BackgroundImage>
    </>
  );
}