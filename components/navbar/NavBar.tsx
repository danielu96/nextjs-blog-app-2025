import React from 'react'
import Logo from './Logo';
import Frame14122 from './Frame141222';
import Line1 from './Line1';


function Navbar() {
    return (
        <>
            <Logo />
            <div className="hideOnSmall"> {/* Hide on small screens */}
                <Frame14122 />
                <Line1 />
            </div>
        </>
    )

}
export default Navbar;