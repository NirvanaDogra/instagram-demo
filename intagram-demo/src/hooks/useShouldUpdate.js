import { forwardRef, useEffect, useRef, useState } from "react";

const useShouldUpdate = () => {
    const [isInView, setIsInView] = useState(false)
    const parentRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
            const postEl = parentRef.current;
            if (!postEl) return;
            const rect = postEl.getBoundingClientRect();
            setIsInView(rect.top < window.innerHeight && rect.bottom >= 0)
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return [isInView, parentRef]
}

export default useShouldUpdate;