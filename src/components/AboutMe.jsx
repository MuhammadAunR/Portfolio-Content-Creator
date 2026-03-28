import React from 'react'

const AboutMe = () => {
    return (
        <>
            <section id='about' className='min-h-120 h-fit py-20 bg-black/95 flex flex-col gap-5 items-center justify-center'>
                <div className='pb-7'>
                    <h2 className='font-bold text-5xl uppercase'>About Me</h2>
                    <div className="h-px w-full bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                </div>

                <p className='w-1/2 text-center'>Welcome to the cinematic realm of Jimmy, where creativity meets technology to craft visually stunning narratives. With a passion for storytelling and a keen eye for detail, I embark on a journey to transform ordinary footage into extraordinary visual experiences.</p>

                <div className='space-y-5'>
                    <div className='flex flex-col items-center'>
                        <h4 className='font-semibold text-2xl text-center'>Services</h4>
                        <div className="h-px w-1/5 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                    </div>
                    <ul className='flex gap-5 items-center justify-center'>
                        {["Cash Cow Editing", "Reels Editing", "Logo Animation", "Podcast Edit"].map((skill) => (
                            <li key={skill} className="flex items-center gap-2 text-xl">
                                <div className="h-3 w-3 rounded-full bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 shrink-0"></div>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='space-y-5'>
                    <div className='flex flex-col items-center'>
                        <h4 className='font-semibold text-2xl text-center'>Tools</h4>
                        <div className="h-px w-1/4 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                    </div>
                    <ul className='flex gap-5 items-center justify-center'>
                        <li className='hover:scale-110 transition-transform ease-linear duration-300'>   <img src="https://skillicons.dev/icons?i=ae" /></li>
                        <li className='hover:scale-110 transition-transform ease-linear duration-300'>   <img src="https://skillicons.dev/icons?i=ps" /></li>
                        <li className='hover:scale-110 transition-transform ease-linear duration-300'>   <img src="https://skillicons.dev/icons?i=pr" /></li>
                        <li className='hover:scale-110 transition-transform ease-linear duration-300'>   <img src="https://skillicons.dev/icons?i=xd" /></li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default AboutMe
