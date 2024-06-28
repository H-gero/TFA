'use client'
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import PeopleIcon from '@mui/icons-material/People';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Button, Drawer } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../ui/UIContext';

export default function SideMenu() {
    const {sidemenuOpen} = useContext(UIContext)
    const {closeSideMenu, openSideMenu} = useContext(UIContext)

    return (
        <div>
            { sidemenuOpen &&(
            <div
                className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
            />
        )}
            { sidemenuOpen && (
            <div
                className="fadeIn fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" 
                onClick={closeSideMenu}
                />
            )}
                <nav className={
                clsx("fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 flex flex-col justify-between",
                     {
                          'translate-x-full': !sidemenuOpen,  
                     }
                )}>
                    <div>
                    <button
                    onClick={closeSideMenu}
                    >
                    <CloseIcon 
                    sx={{position: 'absolute', right: 20 ,top: 20, cursor: 'pointer'}}
                    className='bg-gray-500 bg-opacity-10 rounded'
                    />
                    </button>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <PeopleIcon/>
                    <span className="ml-3 text-xl">Sobre nosotros</span>
                </Link>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <ContactPageIcon/>
                    <span className="ml-3 text-xl">Objetivos</span>
                </Link>
                <div className="w-full h-px bg-gray-200 my-10" />
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <PeopleIcon/>
                    <span className="ml-3 text-xl">Sobre nosotros</span>
                </Link>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <ContactPageIcon/>
                    <span className="ml-3 text-xl">Objetivos</span>
                </Link>
                </div>
                <div className='flex justify-center'>
                <Link
                    href='/login'
                >
                <Button variant='contained' className='button'>Login</Button>
                </Link>
                </div>
            </nav>
        </div>
    )
}


