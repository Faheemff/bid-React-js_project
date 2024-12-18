// eslint-disable-next-line no-unused-vars
import React from 'react'


const Input = () => {
    return (
        <>
            <input className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3 mb-1 mt-1' type="name" placeholder='Enter your name' />
            <br />
            <input className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3' type="lastName" placeholder='Enter your lastName' />
        </>
    )
}

export default Input
