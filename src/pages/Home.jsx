import AboutMe from "../components/AboutMe"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"


const Home = () => {
    return (
        <>
            <main>
                <HeroSection />
                <AboutMe />
                <Projects />
                <Testimonials />
                <ContactUs />
            </main>
        </>
    )
}

export default Home
