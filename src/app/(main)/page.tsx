import pageStyles from '@/styles/pages/index.module.css'

import Promo from "@/components/Promo";
import BackgroundImage from '@/components/BackgroundImage';

import clsx from 'clsx';

import bgMain from '@/images/bg.png'
import bunnyLove from '@/images/bunny-love.gif'
import dog from '@/images/dog.gif'

export const metadata = {
  title: "For my love | Main page",
  description: "Main page",
}

export default function Index() {
  return (
    <>
      <BackgroundImage src={bgMain.src} bgClassName='bg-white'>
        <Promo
          info={
            <>
              <img src={dog.src} alt="Bunny Love" />
            </>
          }
          style={{ maxWidth: '820px' }}
          title={
            <>
              <span className='color-red'>
                Привет любимая!
              </span>
            </>
          }
          description="Проведешь со мной наши пол года?)"
          buttons={[
            {
              href: '/date',
              caption: 'ДА!!!',
              className: 'color-dark border-red bg-hover-white transition-m'
            },
            {
              href: '/sad',
              caption: 'ПНХ',
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