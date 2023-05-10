'use client';

import useSearchModal from '@/app/hooks/useSearchModal';

import { BiSearch } from 'react-icons/bi'

const Search = () => {
    const searchModal = useSearchModal();

    return (
        <div
            onClick={searchModal.onOpen}
            className="
                border-[1px]
                w-full
                md:w-auto
                py-1.5
                rounded-full
                bg-white
                drop-shadow
                hover:shadow-md
                hover:drop-shadow-0
                hover:transition
                hover:ease-in-out
                transition
                cursor-pointer
                lg:absolute
                lg:left-1/2
                lg:-translate-x-1/2
                lg:transition-none
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
                        text-sm
                        font-bold
                        px-6
                        truncate
                    "
                >
                    Anywhere
                </div>
                <div
                    className="
                        hidden
                        sm:block
                        text-sm
                        font-bold
                        px-6
                        border-x-[2px]
                        flex-1
                        text-center
                        truncate
                    "
                >
                    Any week
                </div>
                <div
                    className="
                        text-sm
                        pl-6
                        pr-2
                        text-gray-600
                        flex
                        flex-row
                        items-center
                        gap-3
                    "
                >
                    <div 
                        className="
                            hidden 
                            sm:block
                            truncate
                        "
                    >
                        Add guests
                    </div>
                    <div 
                        className="
                            p-1.5
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