// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="border-t-[1px] mt-16 border-gray-300 text-black py-8">
                <div className="container mx-auto px-6">
                    <div className="flex text-center flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold">M.Faheem</h2>
                            <p className="text-sm text-gray-400">Frontend Developer | Designer</p>
                        </div>
                        <div className="mb-6 md:mb-0 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 text-center">
                            <a href="#about" className="text-sm hover:text-red-500">About</a>
                            <a href="#projects" className="text-sm hover:text-red-500">Projects</a>
                            <a href="#contact" className="text-sm hover:text-red-500">Contact</a>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
                                <i className="ri-twitter-x-line text-xl"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
                                <i className="ri-linkedin-line text-xl"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
                                <i className="ri-github-line text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-6 text-sm text-gray-600">
                        <p>&copy; {new Date().getFullYear()} Faheem. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
