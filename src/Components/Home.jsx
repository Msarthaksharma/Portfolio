import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-[--primary-color] p-4'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-2xl sm:text-6xl font-bold text-[#ccd6f6]'>Sarthak Sharma</h1>
            <h2 className='text-2xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate full-stack developer dedicated to crafting exceptional digital experiences. With expertise in both front-end design and back-end development, I specialize in creating responsive, user-friendly web applications. Let's collaborate to bring your ideas to life!</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home