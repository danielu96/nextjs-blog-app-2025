import React from 'react'
import Logo from './Logo';
import Frame14122 from './Frame141222';


function Navbar() {
    return (
        <>
            <Logo />
            <div className="hideOnSmall"> {/* Hide on small screens */}
                <Frame14122 />
            </div>
        </>
    )

}
export default Navbar;