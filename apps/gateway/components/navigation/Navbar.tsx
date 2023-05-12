/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex flex-row w-full h-16 justify-between items-center max-w-7xl mx-auto'>
        <div className="logo text-sm font-semibold text-slate-700">
            LOGO
        </div>
        <div className="flex flex-row items-center space-x-16 font-semibold text-sm text-slate-700">
            <p>About</p>
            <p>Documentation</p>
            <p>Pricing</p>
            <p>Contact</p>
        </div>
        <div className="flex flex-row items-center space-x-4">
            <div className="flex cursor-pointer text-primary-original border rounded px-8 py-2 text-sm font-semibold border-primary-original">
                Login
            </div>
            <div className="flex cursor-pointer bg-primary-original text-white px-8 py-2 rounded text-sm font-semibold">
                Sign Up
            </div>
        </div>
    </div>
  )
}

export default Navbar