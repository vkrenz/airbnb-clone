'use client'

import { IconType } from "react-icons";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    description: string;
    selected?: boolean;
}

const CategoryBox : React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    description,
    selected
}) => {
    return (
        <div
            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <h1>{label}</h1>
            <h2>{description}</h2>
        </div>
    );
}
 
export default CategoryBox;