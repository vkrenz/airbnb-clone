'use client'

import { IconType } from "react-icons";

interface CategoryInputProps {
    onClick: () => void;
    selected?: boolean;
    label: string;
    icon: IconType
}

const CategoryInput : React.FC<CategoryInputProps> = ({
    onClick,
    selected,
    label,
    icon: Icon
}) => {
    return (
        <div>
            <Icon size={26} />
            {label}
        </div>
    );
}
 
export default CategoryInput;