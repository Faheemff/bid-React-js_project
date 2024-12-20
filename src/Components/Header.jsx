// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='px-10 py-2 flex justify-between items-center'>
                <div className='logo'>
                    <h1 className='font-[Kajiro] text-[50px] tracking-[0.1em]'>Faheem</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-5'>
                        <li>
                            <div>
                                <a href="#">About</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#">Projects</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#">Contact</a>
                            </div>
                        </li>
                        <li>
                            <div className=''>
                                <Link to="/loginAccount" className='bg-black text-white px-7 py-2 rounded-[50px] font-semibold active:scale-50'>Log in</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
