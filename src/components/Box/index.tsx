'use client'

import { CSSProperties, useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type QuizOption = {
    id: string
    label: string
    isCorrect?: boolean
}

type QuizData = {
    question: string
    options: QuizOption[]
}

type BoxGridProps = {
    title?: string
    subtitle?: string
    style?: CSSProperties
    boxes: BoxItemProps[]
}

type BoxItemProps = {
    href: string
    img: {
        src: string
        alt: string
    }
    quiz: QuizData
}

type QuizModalProps = {
    open: boolean
    onClose: () => void
    onSuccessRedirect: () => void
    quiz?: QuizData
}

function QuizModal(props: QuizModalProps) {
    const { open, onClose, onSuccessRedirect, quiz } = props

    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [status, setStatus] = useState<'idle' | 'wrong' | 'correct'>('idle')

    useEffect(() => {
        if (open) {
            setSelectedId(null)
            setStatus('idle')
        }
    }, [open, quiz])

    if (!open || !quiz) return null

    const handleCheck = () => {
        if (!selectedId) return
        const selected = quiz.options.find((o) => o.id === selectedId)
        setStatus(selected?.isCorrect ? 'correct' : 'wrong')
    }

    const handleTryAgain = () => {
        setSelectedId(null)
        setStatus('idle')
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                <h3 className={clsx('color-red', styles.modalTitle)}>Question</h3>
                <p className={styles.modalQuestion}>{quiz.question}</p>

                <div className={styles.options}>
                    {quiz.options.map((option) => (
                        <label key={option.id} className={styles.optionItem}>
                            <input
                                type='radio'
                                name='quizOption'
                                checked={selectedId === option.id}
                                onChange={() => {
                                    setSelectedId(option.id)
                                    if (status !== 'idle') setStatus('idle')
                                }}
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </div>

                {status === 'wrong' && (
                    <p className={styles.wrongText}>Wrong, please try again</p>
                )}

                {status === 'correct' && (
                    <p className={styles.correctText}>Correct, I love you</p>
                )}

                <div className={styles.modalActions}>
                    <button
                        type='button'
                        className={clsx(styles.btn, styles.btnGhost)}
                        onClick={onClose}
                    >
                        Close
                    </button>

                    {status !== 'correct' ? (
                        <button
                            type='button'
                            className={clsx(styles.btn, styles.btnPrimary)}
                            onClick={handleCheck}
                            disabled={!selectedId}
                        >
                            Check
                        </button>
                    ) : (
                        <button
                            type='button'
                            className={clsx(styles.btn, styles.btnPrimary)}
                            onClick={onSuccessRedirect}
                        >
                            Next
                        </button>
                    )}

                    {status === 'wrong' && (
                        <button
                            type='button'
                            className={clsx(styles.btn, styles.btnGhost)}
                            onClick={handleTryAgain}
                        >
                            Ещё раз
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

type BoxItemViewProps = {
    box: BoxItemProps
    onClick: (box: BoxItemProps) => void
}

export function BoxItem(props: BoxItemViewProps) {
    const { box, onClick } = props
    const { img } = box

    return (
        <button
            type='button'
            onClick={() => onClick(box)}
            className={styles.boxItemButton}
            aria-label={`Open quiz for ${img.alt || 'box'}`}
        >
            <div className={clsx(styles.boxItem, 'border-red', 'bg-white bg-hover-white transition-m')}>
                <img src={img.src} alt={img.alt || 'Box Img'} width={160} height={160} />
            </div>
        </button>
    )
}

export default function BoxGrid(props: BoxGridProps) {
    const { boxes, title, subtitle, style } = props
    const router = useRouter()

    const [selectedBox, setSelectedBox] = useState<BoxItemProps | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenQuiz = (box: BoxItemProps) => {
        setSelectedBox(box)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedBox(null)
    }

    const handleSuccessRedirect = () => {
        if (!selectedBox) return
        router.push(selectedBox.href)
    }

    return (
        <>
            <div className={clsx('bs-flex-container', styles.boxWrapper)}>
                <div className={styles.boxContainer}>
                    <div className={styles.boxContent}>
                        {title && <h1 className='color-red'>{title}</h1>}
                        {subtitle && <p className='color-grey'>{subtitle}</p>}
                    </div>

                    <div className={styles.boxGrid} style={style}>
                        {boxes.map((box, index) => (
                            <BoxItem box={box} onClick={handleOpenQuiz} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <QuizModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onSuccessRedirect={handleSuccessRedirect}
                quiz={selectedBox?.quiz}
            />
        </>
    )
}
