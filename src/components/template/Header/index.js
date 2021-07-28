import React from 'react'

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Apindo, ApindoText } from '../../../configs/Images';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../atom/Button';
import { Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';



const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Berita', href: 'berita' },
    { name: 'Mitra', href: 'mitra' },
    { name: 'Tentang Kami', href: 'menu' },
    { name: 'Kontak', href: 'kontak' },
    { name: 'Peluang Investasi', href: '#' },
]

function Header() {
    let history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="max-w-full mx-auto md:px-14  mt-8">
            <div className="relative z-10 pb-4 bg-white sm:pb-8 md:pb-10 lg:max-w-full lg:w-full lg:pb-10 xl:pb-10">
                <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <Popover>
                    {({ open }) => (
                        <>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav
                                    className="relative flex items-center justify-between sm:h-10"
                                    aria-label="Global"
                                >
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <Link to={'/'}>
                                                <span className="sr-only">Workflow</span>
                                                <img
                                                    className="h-9 w-auto sm:h-9 md:h-16"
                                                    src={ApindoText}
                                                />
                                            </Link>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-16">
                                        {navigation.map((item) =>
                                            item.href == 'menu' ?
                                                (
                                                    <a key={item.name} onClick={handleClick} className="font-medium text-black hover:text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">
                                                        {item.name}
                                                    </a>
                                                )
                                                :
                                                (
                                                    <Link key={item.name} to={item.href} className="font-medium text-black hover:text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">
                                                        {item.name}
                                                    </Link>
                                                )
                                        )}
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={() => history.push('/profile')}>Profil</MenuItem>
                                            <MenuItem onClick={() => history.push('/direksi')}>Direksi</MenuItem>
                                        </Menu>
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute h-1 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg  shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src={Apindo}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item) =>
                                                item.href == 'menu' ?
                                                    (
                                                        <a key={item.name} onClick={handleClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700hover:text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">
                                                            {item.name}
                                                        </a>
                                                    )
                                                    :
                                                    (
                                                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">
                                                            {item.name}
                                                        </Link>
                                                    )
                                            )}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </div>
    )
}


export default Header;
