'use client'

import router from "next/router";
import Container from "../Container";
import Categories from "./Categories";
import Logo from './Logo'
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from '@/app/types';
import Image from "next/image";

// import { useState, useEffect } from 'react';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar : React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log({currentUser});

    // const [isOnListingsPage, setIsOnListingsPage] = useState(false);

    // useEffect(() => {
    //   if (window.location.href.includes('/listings/')) {
    //     setIsOnListingsPage(true);
    //   } else {
    //     setIsOnListingsPage(false);
    //   }
    // }, []);

    return (
        <div className="fixed w-full bg-white z-10">
            <div
                className="
                    py-4
                    border-b-[1px]
                "
            >
                {/* <Container navbarListings={isOnListingsPage}> */}
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        {/* { isSmallScreen ? (<SmallScreenLogo />) : (<BigScreenLogo />) } */}
                        {/* <Logo /> */}
                        <Image
                            onClick={() => router.push('/')} 
                            alt="Logo"
                            className="hidden md:block cursor-pointer mr-5 max-h-md"
                            width="100"
                            height="100"
                            src="/images/logo.png"
                        />
                        <Search />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    );
}

export default Navbar;