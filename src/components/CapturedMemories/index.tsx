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
    button?: ButtonProps
}

type FilterType = 'all' | 'image' | 'video'

function CoverCard(props: CoverItem) {
    const { href, title, type = 'image', preview, videoUrl } = props

    const cardContent = (
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
            </div>

            {title && <p className={styles.cardTitle}>{title}</p>}
        </div>
    )

    if (type === 'image' && href) {
        return <Link href={href}>{cardContent}</Link>
    }

    return cardContent
}

export default function CoverRow(props: CoverRowProps) {
    const { title, subtitle, covers, style, button } = props
    // const [filter, setFilter] = useState<FilterType>('all')

    // const imageCount = useMemo(
    //     () => covers.filter((c) => (c.type || 'image') === 'image').length,
    //     [covers]
    // )

    // const videoCount = useMemo(
    //     () => covers.filter((c) => c.type === 'video').length,
    //     [covers]
    // )

    // const filteredCovers = useMemo(() => {
    //     if (filter === 'all') return covers
    //     if (filter === 'image') return covers.filter((c) => (c.type || 'image') === 'image')
    //     return covers.filter((c) => c.type === 'video')
    // }, [covers, filter])

    return (
        <section className={clsx('bs-flex-container', styles.wrapper)}>
            <div className={styles.container} style={style}>
                {(title || subtitle) && (
                    <div className={styles.content}>
                        {title && <h1 className='color-red'>{title}</h1>}
                        {subtitle && <p className='color-grey'>{subtitle}</p>}
                    </div>
                )}

                {/* <div className={styles.toolbar}>
                    <div className={styles.selectWrap}>
                        <label htmlFor='coverFilter' className={styles.selectLabel}>
                            Select type (photos, videos):
                        </label>
                        <select
                            id='coverFilter'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as FilterType)}
                            className={styles.select}
                        >
                            <option value='all'>All ({covers.length})</option>
                            <option value='image'>Photos ({imageCount})</option>
                            <option value='video'>Videos ({videoCount})</option>
                        </select>
                    </div>
                </div> */}

                {covers.length > 0 ? (
                    <div className={styles.row}>
                        {covers.map((cover, index) => (
                            <CoverCard key={index} {...cover} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        Empty
                    </div>
                )}

                {button && (
                    <div className={styles.button}>
                        <Link href={button.href} className={button.className}>
                            {button.caption}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
