'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
    large?: boolean;
    border?: boolean;
};

const Avatar : React.FC<AvatarProps> = ({
    src,
    large,
    border
}) => {
    return (
        <Image 
            className={`rounded-full min-h-[30px] min-w-[30px] ${border? 'border-gray-400 border-[1px]' : ''}`}
            height={large ? '40' : '30'}
            width={large ? '40' : '30'}
            alt="Avatar"
            src={src || "/images/placeholder.jpg"}
        />
    );
}

export default Avatar;