//import React from 'react'
import { useNavigate } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

function FeaturedDestination() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 py-20 bg-slate-50'>
      <Title
        title='Featured Destination'
        subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
        align=''
        font=''
      />

      <div className='flex gap-6 mt-20 flex-wrap items-center justify-center'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard room={room} index={index} key={room._id}/>
        ))}
      </div>

      <button onClick={() => {navigate('/rooms'); scrollTo(0, 0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 transition-all'>View All Destinations</button>
    </div>
  )
}

export default FeaturedDestination
