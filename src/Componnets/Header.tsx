import React from 'react'
import './Style/Header.css'
import NavbarLeft from './NavbarLeft'
import NevbarRight from './NevbarRight'

const Header = () => {
    return (
        <>
            <div className='perfact-header' >
                <div className='main-head' >
                    <NavbarLeft />
                    <NevbarRight />
                </div>
            </div>
        </>
    )
}

export default Header