import heroImage from '../assets/hero-section.png'
import currentImageLeft from '../assets/hero-current-left.png'
import currentImageRight from '../assets/hero-current-right.png'
import heroAdobeImg from '../assets/hero-ae.png'
import heroPremImg from '../assets/hero-pr.png'

const HeroSection = () => {
    return (
        <div className="min-h-scree w-full relative bg-black">
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
            <header className='pt-46 flex justify-between gap-10 mx-10 px-20 relative z-50'>
                <section className='text-white flex flex-col gap-5 w-1/2'>
                    <div>
                        <h5 className='text-lg text-(--color-primary-light)'>M Aun</h5>
                        <div className="h-px w-20 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                    </div>
                    <h1 className='font-bold text-7xl uppercase'>Professional <br /> video editor</h1>
                    <h5>Making your videos look more cool.</h5>
                    <button className='bg-(--color-primary) px-10 py-2 text-xl font-semibold w-fit hover:bg-(--color-primary-light) transition-colors ease-linear duration-300 cursor-pointer'>Let's Talk</button>
                </section>
                <section className='flex justify-center relative w-1/2'>
                    <div className='w-100'>
                        <img
                            src={heroImage}
                            alt="Hero Section Image"
                            className='w-100' />
                        <img src={currentImageLeft} alt="" className='absolute -left-20 bottom-0 -z-10' />
                        <img src={currentImageRight} alt="" className='absolute -right-20 bottom-0 -z-10' />
                        <img src={heroAdobeImg} alt="" className='absolute -left-10 top-10 -z-10' />
                        <img src={heroPremImg} alt="" className='absolute -right-10 top-12 -z-10' />
                    </div>
                </section>
            </header>
        </div>

    )
}

export default HeroSection
