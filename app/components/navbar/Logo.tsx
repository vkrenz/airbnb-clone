'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
            alt="Logo"
            className="cursor-pointer mr-5 max-h-md"
            width="100"
            height="100"
            src="/images/logo.png"
        />
    );
}

export default Logo;