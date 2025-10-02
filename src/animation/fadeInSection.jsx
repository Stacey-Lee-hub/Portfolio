import React, { useEffect, useRef, useState } from "react";

function FadeInSection({children, className="", id, threshold = 0.2, once=true}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once && node) observer.unobserve(node);
                } else if (!once) {
                    setVisible(false);
                }
            }, {threshold}
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, once ])

    return(
        <div ref={ref} id={id} className={`${className} ${visible ? "visible" : ""}`.trim()} >
            {children}
        </div>
    );
}

export default FadeInSection;