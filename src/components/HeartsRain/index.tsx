'use client'

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function HeartsRain() {
    const { width, height } = useWindowSize();

    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={60}
            gravity={0.04}
            wind={0}
            recycle
            run
            drawShape={(ctx) => {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-6, -6, -12, 6, 0, 18);
                ctx.bezierCurveTo(12, 6, 6, -6, 0, 0);
                ctx.fillStyle = "rgba(255, 0, 90, 0.85)";
                ctx.fill();
            }}
        />
    );
}
