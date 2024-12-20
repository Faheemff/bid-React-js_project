// eslint-disable-next-line no-unused-vars
import React from 'react'
import Google from '../../ButtonsIcon/Google'
import Facebook from '../../ButtonsIcon/Facebook'
import Github from '../../ButtonsIcon/Github'
import Feide from '../../ButtonsIcon/Feide'
import Inputfield from '../../Input/Inputfeild'
import Forgot from '..//../Button/Forgot'
import Log from '..//../Button/Login'
import { Link } from 'react-router-dom'


const Login = () => {

    return (
        <>
            <main className='h-screen w-full'>
                                    <Link to="/createAccount" className='text-green-600 font-semibold'>Sign up</Link>
                <section className='flex justify-between w-full px-10'>
                    <div className='h-[500px] w-[500px] p-14'>
                        <div className='heading-for-login text-4xl font-semibold pb-2 text-black'>
                            <h1>Welcome Back : )</h1>
                        </div>
                        <p className='text-[17px] text-black'>
                            Welcome back! Stay connected with us by logging in using your email address and password. We’re excited to have you with us!
                        </p>
                    </div>
                    <div className='h-[550px] bg-white text-black px-16 py-8 w-[500px] rounded-[10px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[30px] font-semibold'>Log In</h1>
                            <i className="ri-close-line text-[25px]"></i>
                        </div>
                        <div className='flex justify-end items-center py-8'>
                            <div>Don`t have an account? <Link to="/createAccount" className='text-green-600 font-semibold'>Sign up</Link></div>
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
                        <form>
                            <Inputfield />
                            <div className='flex gap-2 items-center mt-3'>
                                <Forgot />
                                <Log />
                            </div>
                        </form>
                    </div>
                </section>
                <footer></footer>
            </main>

        </>
    )
}

export default Login
