'use client';

interface ContainerProps {
    children: React.ReactNode;
    navbarListings?: boolean;
}

const Container : React.FC<ContainerProps> = ({
    children,
    navbarListings = false,
}) => {
    return (
        <div
            className={`
                ${navbarListings ? 'max-w-[1190px]' : 'max-w-[2520px]'}
                mx-auto
                xl:px-20
                md:px-10
                sm:px-2
                px-4
            `}
        >
            {children}
        </div>
    );
}

export default Container;

