// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='px-10 py-1 flex justify-between items-center border-b-[1px] border-gray-300'>
                <div className='logo'>
                    <h1 className='font-[Kajiro] text-[55px] tracking-[0.05em]'>Faheem</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-5'>
                        <li>
                            <div>
                                <a className='font-[Rimons] text-[18px]' href="#">About</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a className='font-[Rimons] text-[18px]' href="#">Projects</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a className='font-[Rimons] text-[18px]' href="#">Contact</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/loginAccount" className='bg-black text-white px-7 font-[Rimons] py-2 rounded-[50px] font-medium'>Log in</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
