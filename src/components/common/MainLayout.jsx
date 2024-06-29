import React, { useState } from 'react'
import AppBar from './AppBar';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [showToggle, setShowToggle] = useState(false);
    const [openNav, setOpenNav] = useState(true)
    return (
        <div className="flex h-screen overflow-hidden bg-[#F8F9FA]">
            <NavBar showToggle={showToggle} setShowToggle={setShowToggle} openNav={openNav} setOpenNav={setOpenNav} />
            <div className="flex flex-col flex-grow overflow-auto">
                <AppBar showToggle={showToggle} setShowToggle={setShowToggle} setOpenNav={setOpenNav} openNav={openNav} />
                <main className="flex-grow" onClick={() => { if (window.innerWidth <= 900) { setShowToggle(true); setOpenNav(false) } }}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout
