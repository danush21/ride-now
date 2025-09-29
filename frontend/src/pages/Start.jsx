import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className="bg-cover bg-center bg-[url(https://images.stockcake.com/public/0/0/9/009e6881-cd84-498e-9f05-218d071bfd6c_large/sunset-traffic-light-stockcake.jpg)] pt-182 h-screen w-full flex justify-between flex-col">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber Logo" className="w-30 h-30 m-2 pl-5" /> */}
            <div className="bg-white py-10 px-3">
                <h2 className='text-3xl font-bold pb-2'>Get started with RideNow</h2>
                <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start