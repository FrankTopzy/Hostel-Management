import React, { useState, type JSX } from 'react'
import Title from '../../components/Title'

type Images = {
  1: null | string;
  2: null | string;
  3: null | string;
  4: null | string;
}

type Inputs = {
  roomType: string;
  pricePerNight: number;
  amenities: {
    'Free Wifi': boolean;
    'Free Breakfast': boolean;
    'Room Service': boolean;
    'Mountain View': boolean;
    'Pool Access': boolean;
  }
}

function AddRoom() {

  const [images, setImages] = useState<Images>({
    1: null,
    2: null,
    3: null,
    4: null,
  })

  const [inputs, setInputs] = useState<Inputs>({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false
    }
  })

  return (
    <form>
      <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience'/>

      {/* Upload Area for Images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImages${key}`} key={key}>
            <img src={images[key]} alt="" />
          </label>
        ))}
      </div>
    </form>
  )
}

export default AddRoom
