'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
    large?: boolean;
};

const Avatar : React.FC<AvatarProps> = ({
    src,
    large
}) => {
    return (
        <Image 
            className="rounded-full min-h-[30px] min-w-[30px]"
            height={large ? '40' : '30'}
            width={large ? '40' : '30'}
            alt="Avatar"
            src={src || "/images/placeholder.jpg"}
        />
    );
}

export default Avatar;