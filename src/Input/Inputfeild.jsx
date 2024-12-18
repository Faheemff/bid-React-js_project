// eslint-disable-next-line no-unused-vars
import React from 'react'
import Forgot from '../Button/Forgot'
import Login from '../Button/Login'

const Inputfeild = () => {
    return (
        <>
            <form>
                <input className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3 mb-4' type="email" placeholder='Enter your email' />
                <br />
                <input className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3' type="password" placeholder='Enter your password' />
                <div className='flex gap-2 items-center mt-3'>
                    <Forgot />
                    <Login />
                </div>
            </form>
        </>
    )
}

export default Inputfeild
