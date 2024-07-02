import { Outlet } from 'react-router-dom'

import "./Header.css"

const dayjs = require('dayjs')

const Header = () => {
    return (
        <>
            <div className='site-header'>
                <div style={{ height: "100%", alignContent: "center", padding: 10 }}>
                    {dayjs().format("ddd, MMMM D YYYY, hh:mm A")}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header;