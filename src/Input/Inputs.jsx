// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'


const Input = () => {
    const [user, setUser] = useState('');
    const [last, setlast] = useState('')
    const onChang = (event)=> {
        setUser(event.target.value)
        console.log(user)
    }
    const onC = (event) => {
        setlast(event.target.value)
        console.log(last);
    }
    return (
        <>
            <input
                value={user}
                onChange={onChang}
                className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3 mb-1 mt-1' type="name" placeholder='Enter your name' />
            <br />
            <input
            value={last}
            onChange={onC}
            className='w-full rounded-[5px] border-[1.8px] border-gray-300 px-5 py-3' type="lastName" placeholder='Enter your lastName' />
        </>
    )
}

export default Input
