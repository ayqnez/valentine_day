import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const body = await req.json()

    const message = `
    ❤️ Дарина составила свидание!

    🎨 Тип:
    ${body.dateType}

    🍽️ Ресторан:
    ${body.kitchen}

    🌙 Вечер:
    ${body.evening}
    `

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message
        })
    })
    return NextResponse.json({ success: true })
}