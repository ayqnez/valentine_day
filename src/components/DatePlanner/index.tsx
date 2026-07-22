'use client'

import { useMemo, useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { STEPS } from './data'

export default function DatePlanner() {
    const [started, setStarted] = useState(false)
    const [stepIndex, setStepIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [answers, setAnswers] = useState<Record<string, string>>({})

    const currentStep = STEPS[stepIndex]

    const selectedOption = answers[currentStep?.id]

    const isFinished = stepIndex >= STEPS.length

    const result = useMemo(() => {
        return STEPS.map((step) => {
            const option = step.options.find(
                (item) => item.id === answers[step.id]
            )

            return {
                title: step.title,
                value: option?.label
            }
        })
    }, [answers])

    const handleSelect = (optionId: string) => {
        setAnswers((prev) => ({
            ...prev,
            [currentStep.id]: optionId
        }))
    }

    const handleNext = async () => {
        if (!selectedOption) return

        if (stepIndex === STEPS.length - 1) {
            setIsLoading(true)

            await fetch('/api/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dateType: result.find(r => r.title.includes('тип'))?.value,
                    kitchen: result.find(r => r.title.includes('кухню'))?.value,
                    evening: result.find(r => r.title.includes('вечер'))?.value
                })
            })
            await new Promise(resolve => setTimeout(resolve, 3500))

            setIsLoading(false)
            setStepIndex(prev => prev + 1)

            return
        }

        setStepIndex(prev => prev + 1)
    }

    const handleBack = () => {
        if (stepIndex === 0) return

        setStepIndex((prev) => prev - 1)
    }

    if (!started) {
        return (
            <section className={styles.wrapper}>
                <div className={styles.card}>
                    <h1 className='color-red'>
                        Ты реально согласна? ❤️
                    </h1>

                    <p className='color-grey'>
                        Я очень хочу сделать этот день особенным и постараться
                        организовать всё именно так, как понравится тебе.
                    </p>

                    <p className='color-grey'>
                        Поэтому дальше тебя ждёт небольшая подборка вопросов.
                        Выбери то, что тебе действительно хочется: какой формат
                        свидания, куда сходить покушать и как провести вечер.
                    </p>

                    <p className='color-grey'>
                        Все твои ответы отправятся только мне, чтобы я смог
                        подготовить для нас идеальное свидание. ❤️
                    </p>

                    <button
                        className='button border-red bg-hover-white transition-m'
                        onClick={() => setStarted(true)}
                    >
                        Начать ❤️
                    </button>
                </div>
            </section>
        )
    }

    if (isLoading) {
        return (
            <section className={styles.wrapper}>
                <div className={styles.card}>

                    <h1 className="color-red">
                        Подбираем наше идеальное свидание ❤️
                    </h1>

                    <p className="color-grey">
                        Это займет буквально пару секунд...
                    </p>

                    <div className={styles.loader}>
                        <div className={styles.loaderBar} />
                    </div>

                </div>
            </section>
        )
    }

    if (isFinished) {
        return (
            <section className={styles.wrapper}>
                <div className={styles.card}>
                    <h1 className='color-red'>
                        Наше идеальное свидание ❤️
                    </h1>

                    <div className={styles.result}>
                        <div className={styles.resultItem}>
                            <span className={styles.resultTitle}>
                                📅 Дата
                            </span>

                            <strong>25.07.2026</strong>
                        </div>

                        <div className={styles.resultItem}>
                            <span className={styles.resultTitle}>
                                📍 Место
                            </span>

                            <strong>г. Астана</strong>
                        </div>

                        {result.map((item) => (
                            <div
                                key={item.title}
                                className={styles.resultItem}
                            >
                                <span className={styles.resultTitle}>
                                    {item.title}
                                </span>

                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>

                    <button
                        className='button border-red bg-hover-white transitition-m'
                        onClick={() => {
                            setStarted(false)
                            setStepIndex(0)
                            setAnswers({})
                        }}
                    >
                        Пройти ещё раз
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <span className={styles.progress}>
                    {stepIndex + 1} / {STEPS.length}
                </span>

                <h2>{currentStep.title}</h2>

                <div className={styles.options}>
                    {currentStep.options.map((option) => (
                        <button
                            key={option.id}
                            className={clsx(
                                styles.option,
                                selectedOption === option.id &&
                                styles.optionActive
                            )}
                            onClick={() => handleSelect(option.id)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className={styles.actions}>
                    <button
                        className='button border-red color-black'
                        onClick={handleBack}
                        disabled={stepIndex === 0}
                    >
                        Назад
                    </button>

                    <button
                        className='button bg-red border-white color-black'
                        onClick={handleNext}
                        disabled={!selectedOption}
                    >
                        {stepIndex === STEPS.length - 1
                            ? 'Готово ❤️'
                            : 'Далее'}
                    </button>
                </div>
            </div>
        </section>
    )
}