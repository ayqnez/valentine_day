'use client'

import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

type Variant = 'flowers' | 'lips' | 'song' | 'hearts'

export default function HeartsRain({ variant = 'hearts' }: { variant?: Variant }) {
    const { width, height } = useWindowSize()

    const drawShape = (ctx: CanvasRenderingContext2D) => {
        if (variant === 'flowers') return drawFlower(ctx)
        if (variant === 'lips') return drawKissMark(ctx)
        if (variant === 'song') return drawNote(ctx)
        return drawHeart(ctx)
    }

    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={70}
            gravity={0.04}
            wind={0}
            recycle
            run
            drawShape={drawShape}
        />
    )
}

const drawHeart = (ctx: CanvasRenderingContext2D, x = 0, y = 0, s = 1, color = 'rgba(255, 0, 90, 0.9)') => {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.bezierCurveTo(x - 3 * s, y - 3 * s, x - 6 * s, y + 3 * s, x, y + 9 * s)
    ctx.bezierCurveTo(x + 6 * s, y + 3 * s, x + 3 * s, y - 3 * s, x, y)
    ctx.fillStyle = color
    ctx.fill()
}

const drawFlower = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5
        const x = Math.cos(angle) * 4
        const y = Math.sin(angle) * 4

        ctx.beginPath()
        ctx.ellipse(x, y, 3.8, 2.8, angle, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 140, 180, 0.88)'
        ctx.fill()
    }

    ctx.beginPath()
    ctx.arc(0, 0, 2.4, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 210, 80, 0.95)'
    ctx.fill()
}

const drawKissMark = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.moveTo(-9, 0)
    ctx.bezierCurveTo(-7.5, -6.2, -2.8, -6.8, 0, -2.2)
    ctx.bezierCurveTo(2.8, -6.8, 7.5, -6.2, 9, 0)
    ctx.bezierCurveTo(6.2, 1.2, 3.6, 1.6, 0, 0.6)
    ctx.bezierCurveTo(-3.6, 1.6, -6.2, 1.2, -9, 0)
    ctx.closePath()
    ctx.fillStyle = 'rgba(200, 18, 66, 0.96)'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(-9.2, 0.3)
    ctx.bezierCurveTo(-5.8, 7.2, 5.8, 7.2, 9.2, 0.3)
    ctx.bezierCurveTo(6.6, 1.8, 3.8, 2.8, 0, 3.0)
    ctx.bezierCurveTo(-3.8, 2.8, -6.6, 1.8, -9.2, 0.3)
    ctx.closePath()
    ctx.fillStyle = 'rgba(233, 30, 99, 0.97)'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, -1.6)
    ctx.bezierCurveTo(-0.8, -0.8, -0.9, 0.6, 0, 2.4)
    ctx.bezierCurveTo(0.9, 0.6, 0.8, -0.8, 0, -1.6)
    ctx.closePath()
    ctx.fillStyle = 'rgba(160, 8, 48, 0.65)'
    ctx.fill()

    ctx.beginPath()
    ctx.ellipse(-3.2, -1.2, 2.3, 0.95, -0.25, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 180, 205, 0.45)'
    ctx.fill()
}

const drawNote = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.rect(2, -8, 2, 12)
    ctx.fillStyle = 'rgba(30,30,30,0.9)'
    ctx.fill()

    ctx.beginPath()
    ctx.ellipse(0, 4, 4, 3, -0.35, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(30,30,30,0.9)'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(4, -8)
    ctx.quadraticCurveTo(10, -6, 8, -1)
    ctx.quadraticCurveTo(7, -4, 4, -4)
    ctx.fillStyle = 'rgba(30,30,30,0.9)'
    ctx.fill()
}
