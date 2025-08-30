import React from 'react'
import type { HotelCardType } from './types'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function HotelCard({room, index}: HotelCardType) {
  return (
    <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id} className='max-w-70 relative w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0, 0, 0, 0.05)]'>
      <img src={room.images[0]} alt='image1'/>

      {index % 2 === 0 && <p className='bg-white px-3 py-1 absolute top-3 left-3 text-xs text-gray-800 font-medium rounded-full'>
        Best Seller
      </p> }

      <div className='py-5 px-4'>
        <div className='flex items-center justify-between'>
          <p className='font-[playfair] text-xl font-medium text-gray-800'>{room.hotel.name}</p>

          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt="star-icon" />
            <span className='text-gray-500'>4.5</span>
          </div>
        </div>

        <div className='flex text-gray-500 text-sm gap-1 items-center'>
          <img src={assets.locationIcon} alt="" />
          <span>{room.hotel.address}</span>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <p>${room.pricePerNight}<span className='text-gray-500'>/night</span></p>

          <button className='text-gray-500 px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all'>Book Now</button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
