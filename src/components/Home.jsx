import React from 'react'
import Img from '../assets/images/Background-Home.svg'
import Img1 from '../assets/images/Home.svg'

function Hero() {
    return (
        <>
            <section id="home" className="pt-[10rem]">
                <div className="container">
                    <div className="w-screen overflow-hidden xl:px-48 flex">
                        <div className='text-center mt-[15rem] p-14 w-[40rem] xl:mt-14'>
                            <h1 className='text-4xl font-semibold text-green-500 xl:text-7xl'>Pear kiwi & Mint</h1>
                            <p className='text-sm text-slate-500 font-extralight xl:text-lg'>They say that home is where the heart is. Perhaps that’s why a feeling of loss is so apparent when you are far from the ones you love. </p>
                        </div>
                        <div className="absolute xl:right-1 right-32 top-60  xl:scale-[200%]">
                            <img src={Img} alt="bg-icon-home" className="absolute scale-150 -z-40 xl:scale-[280%]" />
                            <img src={Img1} alt="icon-home" className="scale-110" />

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero