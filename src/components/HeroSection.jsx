import heroImage from '../assets/hero-section.png'
import currentImageLeft from '../assets/hero-current-left.png'
import currentImageRight from '../assets/hero-current-right.png'
import heroAdobeImg from '../assets/hero-ae.png'
import heroPremImg from '../assets/hero-pr.png'
import { ChevronsUp } from 'lucide-react'
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [scrollToTop, setScrollToTop] = useState(false)


    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScrollToTop = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setScrollToTop(true);
            } else {
                setScrollToTop(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScrollToTop);

        return () => window.removeEventListener("scroll", handleScrollToTop);
    }, []);

    const handleScroll = (e, target) => {
        e.preventDefault();

        const element = document.getElementById(target);

        window.lenis.scrollTo(element, {
            offset: -80,
            duration: 1.2,
        });
    };
    return (
        <div id='home' className="min-h-fit w-full relative bg-black">
            {scrollToTop && <span
                onClick={(e) => handleScroll(e, "home")} className='fixed bottom-7 right-7 z-1000 bg-(--color-primary) rounded-sm hover:bg-(--color-primary-light) transition-colors ease-linear duration-300'>
                <ChevronsUp size={36} />
            </span>
            }
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
            radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 160% 130% at 10% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 160% 130% at 90% 90%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
                }}
            />
            {/* Your Content/Components */}
            <header className='pt-30 md:pt-46 flex justify-between max-xl:flex-col gap-10 px-5 md:px-10 relative z-50'>
                <section className='text-white flex flex-col gap-5 xl:w-1/2'>
                    <div className='w-fit'>
                        <h5 className='text-lg text-(--color-primary-light)'>M Aun</h5>
                        <div className="h-px w-full bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                    </div>
                    <h1 className='font-bold max-md:text-4xl max-lg:text-6xl text-7xl uppercase'>Professional <br className='max-xl:hidden'/> video editor</h1>
                    <h5>Making your videos look more cool.</h5>
                    <button onClick={(e) => handleScroll(e, "contact")} className='bg-(--color-primary) px-10 py-2 text-xl font-semibold w-fit hover:bg-(--color-primary-light) transition-colors ease-linear duration-300 cursor-pointer'>Let's Talk</button>
                </section>
                <section className='flex justify-center place-self-center relative w-1/2'>
                    <div className='max-lg:w-80 w-100'>
                        <img
                            src={heroImage}
                            alt="Hero Section Image"
                            className='max-lg:w-80 w-100' />
                        <img src={currentImageLeft} alt="" className='absolute -left-10 bottom-0 -z-10 max-xl:w-50 max-lg:-left-20' />
                        <img src={currentImageRight} alt="" className='absolute -right-10 bottom-0 -z-10 max-xl:w-50 max-lg:-right-20' />
                        <img src={heroAdobeImg} alt="" className='absolute -left-5 top-10 -z-10 max-lg:-left-20' />
                        <img src={heroPremImg} alt="" className='absolute -right-10 top-12 -z-10 max-lg:-right-30 max-lg:w-30' />
                    </div>
                </section>
            </header>
        </div >

    )
}

export default HeroSection
