import AboutMe from "../components/AboutMe"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"

const Home = () => {
    return (
        <>
            <main className="max-w-384 mx-auto">
                <Drawer />
                <Navbar />
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
