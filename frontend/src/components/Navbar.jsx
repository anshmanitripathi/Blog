import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import logo from "../assets/kg.png"
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import {FaMoon} from 'react-icons/fa'


const Navbar = () => {
    const user =false;
    return (
        <div className='py-2 px-4 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white z-50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-4'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}>
                        <div className='flex gap-2 items-center'>
                            <img src={logo} alt="Kavita Ghar" className='w-7 h-7 md:w-10 md:h-10 dark:invert ml-4' />
                            <h1 className='font-bold text-xl'>Kavita Ghar</h1>
                        </div></Link>
                        <div className='relative hidden md:block'>
                            <Input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-700 dark:bg-gray-900 bg-gray-300 w-[300px] hidden md:block"
                            />
                            <Button className='absolute right-0 top-0' ><Search/></Button>


                        </div>
                </div>
                {/* nav section */}
                <nav className='flex md:gap-7 items-center'></nav>
                    <ul className='hidden md:flex gap-7 items-center text-xl font-semibold'>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/blogs"}><li>Blogs</li></Link>
                        <Link to={"/about"}><li>About</li></Link>

                    </ul>
                    <div className='flex '>
                        <Button><FaMoon/></Button>
                        {
                            user ? <div></div> : 
                            
                            <div className='ml-7 md:flex gap-2'>
                                <Link to={"/login"}><Button>Login</Button></Link>
                                <Link className='hidden md:block' to={"signup"}><Button>Signup</Button></Link>
                            </div>
                        }
                    </div>

            </div>

        </div>
    )
}

export default Navbar