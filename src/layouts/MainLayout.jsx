import Lenis from 'lenis';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // make globally accessible
        window.lenis = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <>
            <Outlet />
        </>
    )
}

export default MainLayout
