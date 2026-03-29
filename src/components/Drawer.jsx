import { SquareChevronUp } from 'lucide-react'
import React, { useContext } from 'react'
import { ContextProvider } from './ContextWrapper'

const Drawer = () => {
    const { toggleDrawer, openDrawer } = useContext(ContextProvider)

    const handleScroll = (e, target) => {
        e.preventDefault();

        const element = document.getElementById(target);

        window.lenis.scrollTo(element, {
            offset: -80,
            duration: 1.2,
        });
    };

    return (
        <>
            <section className={`bg-black/60 backdrop-blur-md min-h-70 w-full fixed z-5000 transition-transform ease-linear duration-300 ${openDrawer ? 'translate-y-0' : '-translate-y-full'}`}>
                <span onClick={toggleDrawer} className='absolute right-5 top-5'><SquareChevronUp /></span>

                <section className='px-5 md:px-10 py-10'>
                    <div className="logo font-bold text-2xl">
                        <h2>VideoAlchemist</h2>
                    </div>

                    <ul className='flex flex-col gap-5 bg-(--color-primary-light)/10 backdrop-blur-3xl mt-5 py-3 px-7'>
                        <a href='#home' onClick={(e) => { handleScroll(e, "home"), toggleDrawer() }} className='text-lg hover:text-(--color-primary-light) transition-colors ease-linear'>
                            <li>Home</li>
                        </a>
                        <a href='#about' onClick={(e) => { handleScroll(e, "about"), toggleDrawer() }} className='text-lg hover:text-(--color-primary-light) transition-colors ease-linear'>
                            <li>About</li>
                        </a>
                        <a href='#portfolio' onClick={(e) => { handleScroll(e, "portfolio"), toggleDrawer() }} className='text-lg hover:text-(--color-primary-light) transition-colors ease-linear'>
                            <li>Portfolio</li>
                        </a>
                        <a href='#contact' onClick={(e) => { handleScroll(e, "contact"), toggleDrawer() }} className='text-lg hover:text-(--color-primary-light) transition-colors ease-linear'>
                            <li>Contact</li>
                        </a>
                    </ul>
                </section>
            </section>

        </>
    )
}

export default Drawer
