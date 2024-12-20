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
import Footer from '../Footer'


const Login = () => {

    return (
        <>
            <main className="h-screen w-full">
                <div className="px-9 py-9">
                    <h1 className="font-[Kajiro] text-4xl md:text-[55px] tracking-[0.05em]">Faheem</h1>
                </div>

                <section className="flex flex-col lg:flex-row justify-between w-full mt-6 px-6 md:px-10">
                    {/* Left Section */}
                    <div className="h-auto w-full md:w-[500px] p-6 md:p-14 mb-6 lg:mb-0">
                        <div className="heading-for-login text-2xl md:text-4xl font-semibold pb-2 text-black">
                            <h1>Welcome Back : )</h1>
                        </div>
                        <p className="text-[14px] md:text-[17px] text-black">
                            Welcome back! Stay connected with us by logging in using your email address and password. We’re excited to have you with us!
                        </p>
                    </div>

                    {/* Right Section (Log In Form) */}
                    <div className="h-auto w-full md:w-[500px] border-[1px] border-gray-300 bg-white text-black px-8 py-6 md:px-16 md:py-8 rounded-[10px]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl md:text-[30px] font-semibold">Log In</h1>
                            <i className="ri-close-line text-[20px] md:text-[25px]"></i>
                        </div>

                        <div className="flex justify-end items-center py-4 md:py-8">
                            <div>
                                Don’t have an account?{" "}
                                <Link to="/createAccount" className="text-green-600 font-semibold">
                                    Sign up
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Login Icons */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            <Google />
                            <Facebook />
                            <Github />
                            <Feide />
                        </div>

                        <div className="py-5 flex justify-center items-center">
                            <span className="text-gray-500 font-semibold">OR</span>
                        </div>

                        <form>
                            <Inputfield />
                            <div className="flex gap-2 items-center mt-3">
                                <Forgot />
                                <Log />
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer />
            </main>


        </>
    )
}

export default Login
