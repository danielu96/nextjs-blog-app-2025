import React from 'react'
import Image from 'next/image'

function Line1() {
    const image = '/images/Line 1.png'; // Replace with your image path
    return (
        <div className='Line1'>
            <Image
                src={image}
                width={1631}
                height={1}
                alt="Line1"
                priority
                style={{ height: 'auto' }}

            />
        </div>
    )
}
export default Line1;