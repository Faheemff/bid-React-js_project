// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='px-10 py-6 bg-red-800 px-'>
                <div><h1>Fah</h1></div>
                <ul>
                    <Link to="./Login.jsx" className='text-green-600 font-semibold'>Log in</Link>
                    <Link to="./CreateAccount.jsx" className='text-green-600 font-semibold'>Sign up</Link>
                </ul>
            </header>
        </>
    )
}

export default Header
