import React from 'react'
import heroImg from "../assets/penp.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='px-4 md:px-4 '>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center h-[600px] my-10 md:my-4'>
        {/* text section */}
        <div className="max-w-2xl ml-2 md:ml-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">Immerse Yourself in the World of Poetry</h1>
        <p className="text-lg md:text-xl opacity-80 mb-6 ">
          Discover soulful verses, thoughtful reflections, and creative inspiration through poems, articles, and poetic journeys.
        </p>
        <div className="flex space-x-4">
          <Link to={"/dashboard/write-blog"}><Button className="text-lg ">Get Started</Button></Link>
          <Link to={"/about"}><Button variant="outline" className="border-white px-6 py-3 text-lg">Learn More</Button></Link>
        </div>
      </div>
        {/* image section */}
        <div className='flex flex-col items-center justify-center'>
            <img src={heroImg} alt="" className='md:h-[550px] md:w-[550px]'/>
        </div>
      </div>
    </div>
  )
}

export default Hero