import { useRef, useLayoutEffect, useState } from "react";

const IframePreview = ({ url }: { url: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const resize = () => {
            const rect = containerRef.current!.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            const scaleX = width / 1440;
            const scaleY = height / 900;

            // COVER behavior
            setScale(Math.max(scaleX, scaleY));
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            <div
                style={{
                    width: 1440,
                    height: 900,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left"
                }}
            >
                <iframe
                    src={url}
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="project url"
                //   scrolling="no"
                />
            </div>
        </div>
    );
};

export default IframePreview;
