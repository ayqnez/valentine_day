'use client'

import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

type Variant = 'photos' | 'song' | 'letter' | 'hearts'

export default function HeartsRain({ variant = 'hearts' }: { variant?: Variant }) {
    const { width, height } = useWindowSize()

    const drawShape = (ctx: CanvasRenderingContext2D) => {
        if (variant === 'photos') return drawPolaroid(ctx)
        if (variant === 'song') return drawNote(ctx)
        if (variant === 'letter') return drawEnvelope(ctx)
        return drawHeart(ctx)
    }

    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={60}
            gravity={0.04}
            wind={0}
            recycle
            run
            drawShape={drawShape}
        />
    )
}

const drawHeart = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.bezierCurveTo(-6, -6, -12, 6, 0, 18)
    ctx.bezierCurveTo(12, 6, 6, -6, 0, 0)
    ctx.fillStyle = 'rgba(255, 0, 90, 0.85)'
    ctx.fill()
}

const drawPolaroid = (ctx: CanvasRenderingContext2D) => {
    const w = 12
    const h = 14
    ctx.beginPath()
    ctx.rect(-w / 2, -h / 2, w, h)
    ctx.fillStyle = 'rgba(255,255,255,0.95)'
    ctx.fill()

    ctx.beginPath()
    ctx.rect(-w / 2 + 1.5, -h / 2 + 1.5, w - 3, h - 6)
    ctx.fillStyle = 'rgba(180,220,255,0.9)'
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

const drawEnvelope = (ctx: CanvasRenderingContext2D) => {
    const w = 14
    const h = 10
    ctx.beginPath()
    ctx.rect(-w / 2, -h / 2, w, h)
    ctx.fillStyle = 'rgba(255,255,255,0.95)'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(-w / 2, -h / 2)
    ctx.lineTo(0, 0)
    ctx.lineTo(w / 2, -h / 2)
    ctx.closePath()
    ctx.fillStyle = 'rgba(230,230,230,0.95)'
    ctx.fill()
}
