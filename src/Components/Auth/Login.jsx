// eslint-disable-next-line no-unused-vars
import React from 'react'
import Google from '../../ButtonsIcon/Google'
import Facebook from '../../ButtonsIcon/Facebook'
import Github from '../../ButtonsIcon/Github'
import Feide from '../../ButtonsIcon/Feide'
import Inputfeild from '../../Input/Inputfeild'

const Login = () => {
    return (
        <>
            <main className='h-screen w-full bg-black text-white'>
                <header className='px-10 py-6 bg-red-800 px-'>
                    <div><h1>Fah</h1></div>
                </header>
                <section className='flex justify-between w-full bg-red-500 px-10'>
                    <div className='h-[500px] bg-green-600 w-[500px]'></div>
                    <div className='h-[550px] bg-white text-black px-16 py-8 w-[500px] rounded-[10px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[30px] font-semibold'>Log In</h1>
                            <i className="ri-close-line text-[25px]"></i>
                        </div>
                        <div className='flex justify-end items-center py-8'>
                            <div>Don`t have an account? <a href="#" className='text-green-600 font-semibold'>Sign up</a></div>
                        </div>
                        <div className='grid items-center grid-cols-2 gap-3'>
                            <button className='flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-md' type='button'><span className='font-semibold '>Google</span><Google /></button>
                            <button className='flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-md' type='button'><span className='font-semibold '>Facebook</span><Facebook /></button>
                            <button className='flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-md' type='button'><span className='font-semibold '>Github</span><Github /></button>
                            <button className='flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-md' type='button'><span className='font-semibold '>Feide</span><Feide /></button>
                        </div>
                        <div className='py-5 flex justify-center items-center'>
                            <span className='text-gray-500 font-semibold'>OR</span>
                        </div>
                        <Inputfeild />
                    </div>
                </section>
                <footer></footer>
            </main>

        </>
    )
}

export default Login
