import { Mail, MapPin, Phone } from "lucide-react"

const ContactUs = () => {


    const handleWhatsappRedirect = () => {
        window.open('https://wa.me/923286536520?text=Hi%20I%20want%20to%20consult%20with%20you', '_blank')
    }

    return (
        <>
            <footer id="contact" className='bg-black pt-20 px-10'>
                <div className='flex flex-col justify-start space-y-5'>
                    <h2 className='font-bold text-5xl uppercase'>I am ready to consult you</h2>
                    <div className="h-px w-1/2 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                </div>
                <div className='flex flex-col gap-5 py-7'>
                    <h5 className='text-xl'>“Ready to turn your ideas into cinematic visuals? Let's chat on WhatsApp.”</h5>

                    <button onClick={handleWhatsappRedirect} className='bg-(--color-primary) hover:bg-(--color-primary-light) transition-colors ease-linear duration-300 flex items-center gap-2 py-2 px-7 w-fit cursor-pointer'>
                        <span className='font-semibold text-xl'>Whatsapp</span>
                        <svg
                            className='text-green-600'
                            fill='currentColor'
                            xmlns="http://www.w3.org/2000/svg"
                            width="30" height="30"
                            viewBox="0 0 32 32">
                            <path d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" fillRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <section className="flex items-center gap-10 py-7">
                    <div className="flex items-center gap-2">
                        <span className="text-(--color-primary)"><Phone /></span>
                        <span className="text-lg">+92-xxxxxxxxxx</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-(--color-primary)"><MapPin /></span>
                        <span className="text-lg">Faisalabad, Punjab,Pakistan</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-(--color-primary)"><Mail /></span>
                        <span className="text-lg hover:text-blue-400 transition-colors cursor-pointer">videoeditor@gmail.com</span>
                    </div>
                </section>

            </footer >
            <div className="bg-gray-950 py-7 px-10 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} VideoAlchemist — Crafted with passion for visual storytelling.
            </div>
        </>
    )
}

export default ContactUs
