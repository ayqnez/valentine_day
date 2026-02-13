import { CSSProperties } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ButtonProps } from '../Promo'

type CoverItem = {
    href?: string
    title?: string
    type?: 'image' | 'video'
    preview?: {
        src: string
        alt?: string
    }
    videoUrl?: string
}

type CoverRowProps = {
    title?: string
    subtitle?: string
    style?: CSSProperties
    covers: CoverItem[]
    button: ButtonProps
}

function CoverCard(props: CoverItem) {
    const { title, type = 'image', preview, videoUrl } = props

    return (
        <div className={clsx(styles.card, 'border-red', 'bg-white bg-hover-white transition-m')}>
            <div className={styles.media}>
                {type === 'video' && videoUrl ? (
                    <video
                        className={styles.preview}
                        src={videoUrl}
                        controls
                        preload='metadata'
                        playsInline
                    />
                ) : preview?.src ? (
                    <img
                        src={preview.src}
                        alt={preview.alt || title || 'Cover'}
                        className={styles.preview}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>{type === 'video' ? 'VIDEO' : 'PHOTO'}</span>
                    </div>
                )}

                {type === 'video' && <span className={styles.badge}>▶</span>}
            </div>

            {title && <p className={styles.cardTitle}>{title}</p>}
        </div>
    )
}

export default function CoverRow(props: CoverRowProps) {
    const { title, subtitle, covers, style, button } = props

    return (
        <section className={clsx('bs-flex-container', styles.wrapper)}>
            <div className={styles.container} style={style}>
                {(title || subtitle) && (
                    <div className={styles.content}>
                        {title && <h1 className='color-red'>{title}</h1>}
                        {subtitle && <p className='color-grey'>{subtitle}</p>}
                    </div>
                )}

                <div className={styles.row}>
                    {covers.map((cover, index) => (
                        <CoverCard key={index} {...cover} />
                    ))}
                </div>

                <div className={styles.button}>
                    {button &&
                        <Link href={button.href} className={button.className}>{button.caption}</Link>
                    }
                </div>
            </div>
        </section>
    )
}
