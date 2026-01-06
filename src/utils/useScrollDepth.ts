import { useEffect, useState } from 'react';
import { gtmEvent, GTM_EVENTS } from './gtm';

export const useScrollDepth = (threshold: number = 75) => {
    const [hasFired, setHasFired] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (hasFired) return;

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

            if (scrollPercent >= threshold) {
                gtmEvent(GTM_EVENTS.SCROLL_DEPTH, {
                    depth: `${threshold}%`,
                    location: window.location.pathname,
                });
                setHasFired(true);
            }
        };

        // Simple throttle
        let timeoutId: NodeJS.Timeout | null = null;
        const throttledScroll = () => {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                handleScroll();
                timeoutId = null;
            }, 200);
        };

        window.addEventListener('scroll', throttledScroll);
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [hasFired, threshold]);
};
