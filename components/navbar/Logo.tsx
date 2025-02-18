import React from 'react'
import Image from 'next/image'

function Logo() {
    const defaultImage = '/images/Frame 14365.png';
    const smallImage = '/images/Logo mobile.png'; // Path to the smaller logo

    return (
        <div className="logoContainer">
            <Image
                src={defaultImage}
                width={322}
                height={64}
                alt="Logo"
                className="hidden md:block" // Hide on small screens
            />
            <Image
                src={smallImage}
                width={185}
                height={58}
                alt="Small Logo"
                className="block md:hidden" // Show on small screens
            />
        </div>
    );
}
export default Logo;