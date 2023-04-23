'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import { FiGlobe } from 'react-icons/fi'
import Avatar from '../Avatar';
import { useState, useCallback } from 'react'
import MenuItem from './MenuItem';

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(val => !val);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center">
                <div
                    onClick={() => {}}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                        whitespace-nowrap
                    "
                >
                    Airbnb your home
                </div>
                <div className="hidden md:block">
                    <div 
                        className="
                            p-4
                            mr-2
                            rounded-full 
                            hover:bg-neutral-100
                            cursor-pointer 
                            transition
                        "
                    >
                        <FiGlobe size={18} />
                    </div>
                </div>
                <div
                    onClick={ toggleOpen }
                    className={`
                        p-4
                        md:p-1.5
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        ${isOpen ? 'shadow-md' : ''}
                        transition
                    `}
                >
                    <AiOutlineMenu className="md:ml-2" />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        mt-3
                        absolute
                        rounded-xl
                        shadow-xl
                        ring-4
                        ring-gray-100
                        ring-opacity-30
                        w-[40vw]
                        md:w-[28vw]
                        bg-white
                        overflow-hidden
                        right-0
                        text-sm
                        py-2
                    "
                >
                    <div className="flex flex-col cursor-pointer ">
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label="Sign Up"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Login"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;