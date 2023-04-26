'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
    isBold?: boolean;
}

const MenuItem  : React.FC<MenuItemProps> = ({
    onClick,
    label,
    isBold
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                px-4
                py-3
                hover:bg-neutral-50
                transition
                ${isBold ? 'font-semibold' : ''}
            `}
        >
            { label }
        </div>
    );
}

export default MenuItem;