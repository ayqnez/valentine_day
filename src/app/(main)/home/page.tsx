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
                            },
                            quiz: {
                                question: 'Кто у тебя самый любимый человек на свете?',
                                options: [
                                    { id: 'a', label: 'Мой любимый', isCorrect: true },
                                    { id: 'b', label: 'Аян', isCorrect: true },
                                    { id: 'c', label: 'Рахим', isCorrect: true }
                                ]
                            }
                        },
                        {
                            href: '/music',
                            img: {
                                src: lock.src,
                                alt: 'Love'
                            },
                            quiz: {
                                question: 'Кого Аян любит больше всего на свете?',
                                options: [
                                    { id: 'a', label: 'Дариночку', isCorrect: true },
                                    { id: 'b', label: 'Свою любимую', isCorrect: true },
                                    { id: 'c', label: 'Того, кто читает этот ответ', isCorrect: true }
                                ]
                            }
                        },
                        {
                            href: '/letter',
                            img: {
                                src: letter.src,
                                alt: 'Love'
                            },
                            quiz: {
                                question: 'Будем ли мы с тобой до конца вместе, несмотря на все невзгоды и ссоры?',
                                options: [
                                    { id: 'a', label: 'Да', isCorrect: true },
                                    { id: 'b', label: 'Yes', isCorrect: true },
                                    { id: 'c', label: 'Абсолютно, да', isCorrect: true }
                                ]
                            }
                        }
                    ]}
                />
            </BackgroundImage>
        </>
    );
}