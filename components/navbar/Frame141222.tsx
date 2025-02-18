import React from 'react'
import Image from 'next/image'

function Frame14122() {
    const image = '/images/Frame 14122.png'; // Replace with your image path
    return (
        <div className='Frame14122Container'>
            <Image
                src={image}
                width={43}
                height={16}
                alt="Blog"
                priority
                style={{ height: 'auto' }}
            />
        </div>
    )
}
export default Frame14122;