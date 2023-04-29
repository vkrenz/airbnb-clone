'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined
};

const Avatar : React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image 
            className="rounded-full min-h-[30px] min-w-[30px]"
            height="30"
            width="30"
            alt="Avatar"
            src={src || "/images/placeholder.jpg"}
        />
    );
}

export default Avatar;