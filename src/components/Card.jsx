import React from 'react'
import Img from '../assets/images/Essential oils.svg'
import Img1 from '../assets/images/Natural cosmetics.svg'
import Img2 from '../assets/images/Diffusers.svg'
import Img3 from '../assets/images/Aromatherapy.svg'

function Card() {
    return (
        <>
            <section id='about'>
                <div className='mt-20 xl:flex xl:mt-[15rem] xl:p-[5rem]'>
                    <img src={Img} alt="Essential oils" className='h-[10rem] m-auto xl:h-[20rem]' />
                    <img src={Img1} alt="Natural cosmetics" className='h-[10rem] m-auto xl:h-[20rem]' />
                    <img src={Img2} alt="Diffusers" className='h-[10rem] m-auto xl:h-[20rem]' />
                    <img src={Img3} alt="Aromatherapy" className='h-[10rem] m-auto xl:h-[20rem]' />
                </div>
            </section>
        </>
    )
}

export default Card