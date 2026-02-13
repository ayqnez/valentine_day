import { CSSProperties } from 'react'

import clsx from 'clsx'
import styles from './styles.module.scss'

import Link from 'next/link'

type BoxGridProps = {
    title?: string;
    subtitle?: string;
    style?: CSSProperties;
    boxes: BoxItemProps[];
}

type BoxItemProps = {
    href: string,
    img: {
        src: string,
        alt: string
    }
}

export function BoxItem(props: BoxItemProps) {
    const { href, img } = props

    return (
        <Link href={href}>
            <div className={clsx(styles.boxItem, 'border-red', 'bg-white bg-hover-white transition-m')}>
                <img src={img.src} alt={img.alt || 'Box Img'} width={180} height={180} />
            </div>
        </Link>
    )
}

export default function BoxGrid(props: BoxGridProps) {
    const { boxes, title, subtitle, style } = props

    return (
        <div className={clsx('bs-flex-container', styles.boxWrapper)}>
            <div className={styles.boxContainer}>
                <div className={styles.boxContent}>
                    <h1 className='color-red'>{title}</h1>
                    <p className='color-grey'>{subtitle}</p>
                </div>
                <div className={styles.boxGrid} style={style}>
                    {boxes.map((box, index) => (
                        <BoxItem href={box.href} img={box.img} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}