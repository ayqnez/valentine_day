'use client'

import styles from './styles.module.css'
import clsx from 'clsx'
import Link from "next/link";
import { useState, useRef } from 'react';

export type ButtonProps = {
    href: string,
    caption: string,
    className?: string
}

type PromoProps = {
    style?: React.CSSProperties,

    info?: string | React.ReactNode,
    title?: string | React.ReactNode
    subtitle?: string,
    description?: string,
    buttons?: ButtonProps[],

    additionalContentNode?: React.ReactNode,
    secondButtonEscapes?: boolean,

    childrenClassNames?: {
        container?: string,
        content?: string,
        info?: string,
        title?: string,
        subtitle?: string,
        description?: string,
        buttons?: string,
        additionalContentNode?: string,
    }
}

export default function Promo(props: PromoProps) {
    const { style, info, title, subtitle, description, buttons = [], additionalContentNode, secondButtonEscapes = false, childrenClassNames } = props
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [escapeCount, setEscapeCount] = useState(0)
    const [isEscaping, setIsEscaping] = useState(false)
    const secondButtonRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!secondButtonRef.current || !secondButtonEscapes || escapeCount >= 10) return

        const rect = secondButtonRef.current.getBoundingClientRect()
        const buttonCenterX = rect.left + rect.width / 2
        const buttonCenterY = rect.top + rect.height / 2

        const distance = Math.sqrt(
            Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
        )

        if (distance < 150) {
            if (!isEscaping) {
                setEscapeCount(prev => prev + 1)
                setIsEscaping(true)
            }
            const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX)
            const newX = Math.cos(angle) * -100
            const newY = Math.sin(angle) * -100
            setOffset({ x: newX, y: newY })
        } else {
            setIsEscaping(false)
            setOffset({ x: 0, y: 0 })
        }
    }

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 })
        setIsEscaping(false)
    }

    return (
        <>
            <div className={clsx('bs-flex-container', styles.container, childrenClassNames?.container)}>

                <div className={clsx(styles.content)} style={style}>
                    {info && (
                        <div className={clsx(styles.promoInfo, childrenClassNames?.info)}>{info}</div>
                    )}
                    {title && (
                        <div className={clsx(styles.promoTitle, childrenClassNames?.title)}>{title}</div>
                    )}
                    {subtitle && (
                        <div className={clsx(styles.promoSubtitle, childrenClassNames?.subtitle)}>{subtitle}</div>
                    )}
                    {description && (
                        <div className={clsx(styles.promoDesc, childrenClassNames?.description)}>{description}</div>
                    )}

                    <div
                        className={clsx(styles.promoButtons, childrenClassNames?.buttons)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        {buttons.length > 0 && (
                            buttons.map((btn, index) => (
                                index === 1 && secondButtonEscapes ? (
                                    <div
                                        key={index}
                                        ref={secondButtonRef}
                                        style={{
                                            position: 'relative',
                                            transition: 'transform 0.1s ease-out',
                                            transform: `translate(${offset.x}px, ${offset.y}px)`
                                        }}
                                    >
                                        <Link href={btn.href} title={btn.caption} className={clsx('button', btn.className)}>
                                            {btn.caption}
                                        </Link>
                                    </div>
                                ) : (
                                    <Link key={index} href={btn.href} title={btn.caption} className={clsx('button', btn.className)}>
                                        {btn.caption}
                                    </Link>
                                )
                            ))
                        )}
                    </div>
                </div>

                {additionalContentNode && (
                    <div className={clsx(styles.promoAdd, childrenClassNames?.additionalContentNode)}>
                        {additionalContentNode}
                    </div>
                )}
            </div>
        </>
    )
}