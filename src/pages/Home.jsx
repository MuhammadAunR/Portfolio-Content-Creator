import AboutMe from "../components/AboutMe"
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
            </main>
        </>
    )
}

export default Home
