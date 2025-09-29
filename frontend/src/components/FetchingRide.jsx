import React from 'react'

const FetchingRide = (props) => {
  return (
    <div>
        <h5 className='absolute right-6 top-5 text-2xl' onClick={() => props.setVehicleFound(false)}><i className="ri-arrow-down-wide-line"></i></h5>
        <div className='flex flex-col mb-3 items-center justify-between'>
            <img src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="Car Logo" className="mb-5 items-center pl-10" />
            <div className='w-full mb-5'>
                <div className='flex items-center gap-5 p-3'>
                    <h5 className='text-2xl'><i className="ri-map-pin-user-fill"></i></h5>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>ABC</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <h5 className='text-2xl'><i className="ri-map-pin-2-fill"></i></h5>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>XYZ</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <h5 className='text-2xl'><i className="ri-bank-card-line"></i></h5>
                    <div>
                        <h3 className='text-lg font-medium'>$10.29</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Apple Pay</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FetchingRide