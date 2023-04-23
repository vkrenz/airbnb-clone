'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
            alt="Logo"
            className="hidden sm:block sm:ml-5 sm:mr-4 cursor-pointer"
            height="35"
            width="35"
            src="/images/Logo.png"
        />
    );
}

export default Logo;