// eslint-disable-next-line no-unused-vars
import React from 'react'

const Inputfeild = () => {
    return (
        <>
            <form>
                <input className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3 mb-4' type="email" placeholder='Enter your email' />
                <br />
                <input className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3' type="password" placeholder='Enter your password' />
                <div className='flex gap-2 items-center mt-3'>
                    <button className='bg-white border-[1.8px] border-gray-300 rounded-md text-black px-6 py-3 text-[15px] w-full font-semibold outline-0' type='button'>Forgot Password?</button>
                    <button className='bg-green-500 rounded-md text-white px-6 py-3 text-[15px] w-full font-semibold outline-0' type='button'>Login</button>
                </div>
            </form>
        </>
    )
}

export default Inputfeild
