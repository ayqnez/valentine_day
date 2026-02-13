import Link from 'next/link'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { ButtonProps } from '../Promo'

type LetterProps = {
    title: string;
    button: ButtonProps;
}

export default function Letter(props: LetterProps) {
    const { title, button } = props;

    return (
        <div className={clsx('bs-flex-container', styles.wrapper)}>
            <h1 className='color-red'>{title}</h1>

            <div className={styles.content}>
                <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque deserunt dolores, ducimus consequuntur eligendi, eos dolor odio exercitationem illum laudantium architecto aliquam repudiandae recusandae modi aliquid fugit sunt tempora.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed aperiam quo perferendis minus enim accusantium perspiciatis placeat in illo consectetur deleniti quas at, provident mollitia, maxime eos unde aut.
                </h2>
            </div>

            <Link href={button.href} className={button.className}>
                {button.caption}
            </Link>
        </div>
    )
}