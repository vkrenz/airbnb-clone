'use client';

import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div
            className="
                border-[1px]
                w-full
                md:w-auto
                py-1.5
                rounded-full
                shadow-md
                hover:shadow-md
                transition
                cursor-pointer
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        text-md
                        font-semibold
                        px-6
                    "
                >
                    Anywhere
                </div>
                <div
                    className="
                        hidden
                        sm:block
                        text-md
                        font-semibold
                        px-6
                        border-x-[1px]
                        flex-1
                        text-center
                    "
                >
                    Any Week
                </div>
                <div
                    className="
                        text-md
                        pl-6
                        pr-2
                        text-gray-600
                        flex
                        flex-row
                        items-center
                        gap-3
                    "
                >
                    <div className="hidden sm:block">Add Guests</div>
                    <div 
                        className="
                            p-2
                            bg-rose-500
                            rounded-full
                            text-white
                        "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;