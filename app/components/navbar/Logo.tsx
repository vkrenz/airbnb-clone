'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'

// const SmallScreenLogo = () => {
//     const router = useRouter();

//     return (
//         <Image 
//             alt="Logo"
//             className="hidden md:block cursor-pointer"
//             height="100"
//             width="100"
//             src="/images/SmallScreenLogo.png"
//         />
//     );
// }

const Logo = () => {
    const router = useRouter();

    return (
        <Image 
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="/images/BigScreenLogo.png"
        />
    );
}

export default Logo;