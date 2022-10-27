import React from 'react'
import Img from '../assets/images/Blob.svg'
import Img1 from '../assets/images/Rectangle 60.svg'

function About() {
    return (
        <>
            <section id="shoop" className="pt-[10rem]">
                <div className="container">
                    <div className="w-full xl:px-48 flex">
                        <div className='text-center mt-[15rem] p-14 w-[40rem] xl:mt-14'>
                            <h1 className='text-4xl font-semibold text-green-500 xl:text-7xl'>Improve your well-being with Aromatherapy</h1>
                            <p className='text-sm text-slate-500 font-extralight xl:text-lg'>Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation. </p>
                            <button type="button" className="mt-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase">Explore the Collection</button>
                        </div>
                        <div className="absolute xl:-left-55 right-32 top-60 scale-150 xl:scale-[120%] xl:mt-[85rem] mt-[80rem]">
                            <img src={Img} alt="bg-icon-home" className="absolute -z-40 xl:scale-[280%]" />
                            <img src={Img1} alt="icon-home" className="" />

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About