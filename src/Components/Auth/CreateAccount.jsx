// eslint-disable-next-line no-unused-vars
import React from 'react'
import Google from '../../ButtonsIcon/Google'
import Facebook from '../../ButtonsIcon/Facebook'
import Github from '../../ButtonsIcon/Github'
import Feide from '../../ButtonsIcon/Feide'
import Inputfeild from '../../Input/Inputfeild'
import Inputs from "../../../src/Input/Inputs"
import Sigin from '../../Button/Sigin'
import { Link } from 'react-router-dom'


const CreateAccount = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <main>
                <section className='flex justify-between w-full px-10'>
                    <div className='h-[500px] w-[500px] p-14'>
                        <div className='heading-for-login text-4xl font-semibold pb-2 text-black'>
                            <h1>Welcome Back : )</h1>
                        </div>
                        <p className='text-[17px] text-black'>
                            Welcome back! Stay connected with us by logging in using your email address and password. We’re excited to have you with us!
                        </p>
                    </div>
                    <div className='h-[750px] border-[1px] border-gray-300 bg-white text-black px-16 py-8 w-[500px] rounded-[10px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[30px] font-semibold'>Sign Up</h1>
                            <i className="ri-close-line text-[25px]"></i>
                        </div>
                        <div className='flex justify-end items-center py-8'>
                            <div>Don`t have an account? <Link to="/loginAccount" className="text-green-600 font-semibold">Log in</Link></div>
                        </div>
                        <div className='grid items-center grid-cols-2 gap-3'>
                            <Google />
                            <Facebook />
                            <Github />
                            <Feide />
                        </div>
                        <div className='py-5 flex justify-center items-center'>
                            <span className='text-gray-500 font-semibold'>OR</span>
                        </div>
                        <form onSubmit={(e) => {
                            onSubmit(e)
                        }}>
                            <Inputfeild />
                            <Inputs />
                        </form>
                        <div className='flex gap-2 items-center mt-4'>
                            <Sigin />
                        </div>
                        <div className='text-center mt-3'>
                            <span className='font-semibold'>By signing up you agree to our <a href="#" className='text-blue-600 underline'>Terms of Service</a> and <a href="#" className='text-blue-600 underline'>Privacy Policy</a></span>
                            <div className='pt-2 flex items-center gap-2 justify-center'>
                                <input type="checkbox" />
                                <span className='font-semibold'>Email me with news and updates</span>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <p className='text-gray-500 text-center'>�� 2023 All rights reserved</p>
                    <div className='flex justify-center'>
                        <Link to="/home" className='text-blue-600 font-semibold'>Home</Link>
                        <span className='mx-4'>|</span>
                        <Link to="/about" className='text-blue-600 font-semibold'>About</Link>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default CreateAccount
