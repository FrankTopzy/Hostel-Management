//import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

function ExclusiveOffers() {
  return (
    <div className='flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title 
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
          align='left'
        />

        <button className='group flex items-center gap-2 font-medium max-md:mt-12'>
          View All Offers
          <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {exclusiveOffers.map((item, index) => (
          <div key={index} className={`group relative py-4 px-4 rounded-xl flex flex-col items-start gap-1 pt-12 md:pt-18 justify-between text-white bg-no-repeat bg-cover bg-center`} style={{backgroundImage: `url(${item.image})`}}>
            <p className='absolute bg-white top-4 left-4 text-xs font-medium text-gray-800 px-3 rounded-full'>{item.priceOff}% OFF</p>

            <div>
              <p className='text-2xl font-medium font-[playfair]'>{item.title}</p>
              <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
            </div>
            
            <button className='flex items-center gap-2 font-medium mt-4 mb-5'>
              View Offers 
              <img src={assets.arrowIcon} alt="arrowIcon" className='invert group-hover:translate-x-1 transition-all'/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers
