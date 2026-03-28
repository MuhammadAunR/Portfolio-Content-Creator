import video1 from '../assets/p1.webm'
import video2 from '../assets/p2.webm'
import video3 from '../assets/p3.webm'
import video4 from '../assets/p4.webm'

const Projects = () => {
    const videos = [
        { src: video1, type: "Vloging" },
        { src: video2, type: "Landscape" },
        { src: video3, type: "Cash Cow" },
        { src: video4, type: "Podcast" },
    ];
    return (
        <>
            <div className="min-h-fit w-full bg-black relative">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#000000",
                        backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
                        backgroundSize: "20px 20px, 30px 30px, 25px 25px",
                        backgroundPosition: "0 0, 10px 10px, 15px 5px",
                    }}
                />
                <section className='relative z-50 mx-10 space-y-15 py-20'>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-5xl uppercase'>My best edits</h2>
                        <div className="h-px w-1/3 bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
                    </div>

                    <div className='flex items-center justify-center gap-7 flex-wrap'>
                        {videos.map((video, index) => (
                            <div key={index} className='flex flex-col gap-4 items-center'>
                                <video controls muted loop autoPlay className='w-100 h-auto'>
                                    <source src={video.src} type="video/webm" />
                                </video>
                                <h4 className='text-2xl font-semibold uppercase'>{video.type}</h4>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects
