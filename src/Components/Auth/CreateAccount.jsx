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
import Footer from '../Footer'


const CreateAccount = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <main>
            <div className="px-9 py-9">
                    <h1 className="font-[Kajiro] text-4xl md:text-[55px] tracking-[0.05em]">Faheem</h1>
                </div>
                <section className="flex flex-col lg:flex-row justify-between w-full px-6 lg:px-10 py-8">
                    {/* Left Section */}
                    <div className="h-auto w-full lg:w-[500px] p-6 lg:p-14 mb-8 lg:mb-0">
                        <div className="heading-for-login text-2xl md:text-4xl font-semibold pb-2 text-black">
                            <h1>Welcome Back : )</h1>
                        </div>
                        <p className="text-sm md:text-[17px] text-black">
                            Welcome back! Stay connected with us by logging in using your email address and password. We’re excited to have you with us!
                        </p>
                    </div>

                    {/* Right Section (Sign Up Form) */}
                    <div className="h-auto w-full lg:w-[500px] border-[1px] border-gray-300 bg-white text-black px-6 py-8 lg:px-16 lg:py-8 rounded-[10px]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl md:text-[30px] font-semibold">Sign Up</h1>
                            <i className="ri-close-line text-[20px] md:text-[25px]"></i>
                        </div>

                        <div className="flex justify-end items-center py-4 md:py-8">
                            <div>
                                Don’t have an account?{" "}
                                <Link to="/loginAccount" className="text-green-600 font-semibold">
                                    Log in
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            <Google />
                            <Facebook />
                            <Github />
                            <Feide />
                        </div>

                        <div className="py-5 flex justify-center items-center">
                            <span className="text-gray-500 font-semibold">OR</span>
                        </div>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <Inputfeild />
                            <Inputs />
                        </form>

                        <div className="flex gap-2 items-center mt-4">
                            <Sigin />
                        </div>

                        <div className="text-center mt-3">
                            <span className="font-semibold">
                                By signing up you agree to our{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Privacy Policy
                                </a>
                            </span>
                            <div className="pt-2 flex items-center gap-2 justify-center">
                                <input type="checkbox" />
                                <span className="font-semibold">Email me with news and updates</span>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>

        </>
    )
}

export default CreateAccount
