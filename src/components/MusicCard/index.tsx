import clsx from "clsx";
import styles from "./styles.module.scss";

import { ButtonProps } from "../Promo";
import Link from "next/link";

type MusicCardProps = {
    title?: string;
    subtitle?: string;
    video: {
        youtubeUrl: string;
        autoplay?: boolean;
        controls?: boolean;
    };
    songName?: string;
    button?: ButtonProps;
};

function getYoutubeEmbedUrl(url: string, options?: { autoplay?: boolean; controls?: boolean }) {
    try {
        const parsed = new URL(url);
        let videoId = "";

        if (parsed.hostname.includes("youtu.be")) {
            videoId = parsed.pathname.slice(1);
        }

        if (parsed.searchParams.get("v")) {
            videoId = parsed.searchParams.get("v")!;
        }

        if (!videoId) return null;

        const params = new URLSearchParams({
            autoplay: options?.autoplay ? "1" : "0",
            controls: options?.controls === false ? "0" : "1",
            modestbranding: "1",
            rel: "0",
        });

        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    } catch {
        return null;
    }
}


export default function MusicCard(props: MusicCardProps) {
    const { title, video, songName, subtitle, button } = props;

    const embedUrl = getYoutubeEmbedUrl(video.youtubeUrl, {
        autoplay: video?.autoplay,
        controls: video?.controls,
    });

    return (
        <div className={clsx("bs-flex-container", styles.wrapper)}>
            <div className={styles.container}>

                {title && <h1>{title}</h1>}

                <div className={styles.videoContainer}>
                    {embedUrl ? (
                        <iframe
                            src={embedUrl}
                            title={songName || "youtube-video"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                    ) : (
                        <div className={styles.videoFallback}>
                            Видео недоступно
                        </div>
                    )}
                </div>

                {subtitle && <h2 className="color-red" style={{ textAlign: 'center' }}>{subtitle}</h2>}

                <div className={styles.button}>
                    {button &&
                        <Link href={button.href} className={button.className}>{button.caption}</Link>
                    }
                </div>
            </div>
        </div>
    );
}
