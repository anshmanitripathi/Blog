import React from 'react'
import logo from "../assets/penp.png"
import { Card } from '../components/ui/card'


const Signup = () => {
  return (
    <div className='flex h-screen md:pt-14 md:h-[760px]'>
      <div className='hidden md:block'>
        <img src={logo} alt="" className='h-[600px] px-12 mt-4'/>
      </div>

      <div className='flex justify-center items-center flex-1 px-4 md:px-0'>
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gray-600">

        </Card>

      </div>
    </div>
  )
}

export default Signup