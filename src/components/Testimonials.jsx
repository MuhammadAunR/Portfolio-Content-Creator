import { Quote } from 'lucide-react'
import reviewImg from '../assets/testimonials.webp'

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Smith",
            review: "Working with this editor was an absolute game changer for my channel. The attention to detail, the pacing, the color grading — everything was handled with such professionalism. My videos went from average to cinematic and my audience noticed immediately. I gained over 10k subscribers within a month of posting the edited content.",
            img: reviewImg,
        },
        {
            name: "Sarah Johnson",
            review: "I was struggling to grow my Instagram until I got my reels edited here. The transitions were so smooth and the energy of each video matched my brand perfectly. Within two weeks my reel hit 500k views and my DMs were flooded with people asking who edited my content. I will never go back to editing myself.",
            img: reviewImg,
        },
        {
            name: "David Lee",
            review: "I hired this editor for my podcast and the results were outstanding. The audio cleanup, the captions, the b-roll — everything was handled without me having to explain twice. My listeners gave so much positive feedback about the new format and production quality. This is the kind of editor every content creator dreams of working with.",
            img: reviewImg,
        },
    ];

    return (
        <>
            <section className='h-fit py-20 bg-black'>
                <div className='flex flex-col items-center'>
                    <h2 className='font-bold text-5xl uppercase'>Testimonials</h2>
                    <div className="h-px w-1/2 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                </div>
                <h3 className='text-center text-2xl py-7'>What our clients says about us.</h3>

                <div className='flex gap-5 items-center justify-center my-7 flex-wrap px-5'>
                    {testimonials.map((test, i) => {
                        return <div key={i} className='w-100 min-h-100 h-fit bg-(--color-primary) flex flex-col items-center justify-center gap-3 p-7'>
                            <span className=''><Quote color='yellow' /></span>
                            <p className='text-center'>{test.review}</p>
                            <img src={test.img} alt={test.name} className='w-15 rounded-full' />
                            <h6>{test.name}</h6>
                        </div>
                    })}
                </div>
            </section>
            <div className="h-10 w-full bg-linear-to-r from-red-800 via-yellow-800 via-green-800 via-blue-800 via-indigo-800 to-purple-800"></div>
        </>
    )
}

export default Testimonials
