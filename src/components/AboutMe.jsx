import React from 'react'

const AboutMe = () => {
    return (
        <>
            <section className='min-h-120 h-fit py-20 bg-black flex flex-col gap-5 items-center justify-center'>
                <h2 className='font-bold text-6xl uppercase'>About Me</h2>
                <div className="h-px w-1/4 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                <p className='w-1/2 text-center'>Welcome to the cinematic realm of Jimmy, where creativity meets technology to craft visually stunning narratives. With a passion for storytelling and a keen eye for detail, I embark on a journey to transform ordinary footage into extraordinary visual experiences.</p>


                <div>
                    <h3 className='font-bold text-2xl'>Services</h3>
                    <ul className='flex gap-5 items-center justify-center'>
                        {["Cash Cow Editing", "Reels Editing", "Logo Animation", "Podcast Edit"].map((skill) => (
                            <li key={skill} className="flex items-center gap-2 text-xl">
                                <div className="h-3 w-3 rounded-full bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 shrink-0"></div>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AboutMe
