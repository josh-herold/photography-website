import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ShiftIn({ children, delay = 0, direction = "up" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: 60, x: 0 };
            case "down":
                return { y: -60, x: 0 };
            case "left":
                return { x: 60, y: 0 };
            case "right":
                return { x: -60, y: 0 };
            default:
                return { y: 60, x: 0 };
        }
    };

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay,
                },
            });
        }
    }, [isInView, controls, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ ...getInitialPosition(), opacity: 0 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
}
