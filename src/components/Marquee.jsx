import { twMerge } from "tailwind-merge";


export function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}) {
    const handleMouseEnter = (e) => {
        if (pauseOnHover) {
            const animatedDivs = e.currentTarget.querySelectorAll('[class*="animate-marquee"]');
            animatedDivs.forEach(div => {
                div.style.animationPlayState = 'paused';
            });
        }
    };

    const handleMouseLeave = (e) => {
        if (pauseOnHover) {
            const animatedDivs = e.currentTarget.querySelectorAll('[class*="animate-marquee"]');
            animatedDivs.forEach(div => {
                div.style.animationPlayState = 'running';
            });
        }
    };
    return (
        <div
            {...props}
            className={twMerge(
                `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${vertical ? "flex-col" : "flex-row"} `,
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className,
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={twMerge("flex shrink-0 justify-around [gap:var(--gap)]",
                            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
                            pauseOnHover && "group-hover:animation-play-state:paused",
                            reverse && "[animation-direction:reverse]",
                        )}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
