'use client'

import Container from "../Container";

import { TbBeach, TbMountain, TbPool, TbUfo } from 'react-icons/tb';
import { GiWindmill, GiIsland, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn, GiJungle, GiTreehouse, GiFlowerPot, GiPalmTree } from 'react-icons/gi'
import { MdOutlineCabin, MdOutlineVilla } from 'react-icons/md'
import { FaLandmark, FaSkiing } from 'react-icons/fa';
import { BsSnow, BsWater } from 'react-icons/bs';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { IoDiamond, IoHeartSharp } from 'react-icons/io5';

import CategoryBox from '../CategoryBox';
import { useSearchParams, usePathname } from "next/navigation";
import { BiMap } from "react-icons/bi";
// import { useState, useRef, useEffect } from "react";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
// import { IoMdSwitch } from "react-icons/io";


export const categories = [
    {
        label: 'Beachfront',
        icon: TbBeach,
        description: 'Enjoy a seaside escape with beautiful views and easy access to the beach.'
    },
    {
        label: 'Rustic',
        icon: GiWindmill,
        description: 'Experience a simpler way of life with cozy cabins and homes that evoke a bygone era.'
    },
    {
        label: 'Cabin',
        icon: MdOutlineCabin,
        description: 'Experience rustic living in a cozy cabin. Perfect for a romantic getaway or a peaceful retreat in nature.'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Stay in sleek, contemporary homes that offer style and sophistication.'
    },
    {
        label: 'Mountain',
        icon: TbMountain,
        description: 'Escape to the mountains and enjoy breathtaking views, fresh air, and outdoor activities.'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'Relax and unwind in homes with private pools, hot tubs, and luxurious amenities.'
    },
    {
        label: 'Tropical',
        icon: GiPalmTree,
        description: 'Discover our Tropical homes, a perfect escape to paradise. Relax and explore with stunning views, beaches, and exotic nature.'
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'Discover idyllic islands with crystal-clear waters, palm trees, and white sand beaches.'
    },
    {
        label: 'Lakefront',
        icon: BsWater,
        description: 'Enjoy lakefront homes with beautiful views and water activities like fishing and boating.'
    },
    {
        label: "Tiny home",
        icon: HiOutlineHomeModern,
        description: "Experience the cozy and minimalist lifestyle in a compact home, often with unique and space-saving designs."
    },
    {
        label: "OMG!",
        icon: TbUfo,
        description: "Unleash your inner weirdo and stay in a place that's as unique as you are! From treehouses to underground bunkers, these listings are anything but ordinary."
      },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'Hit the slopes and stay in cozy homes and cabins near popular ski resorts.'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'Live like royalty in grand castles and chateaux with historic architecture and lavish interiors.'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Experience luxury camping in beautiful natural settings with all the amenities of home.'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'Embark on an adventure to the icy north and see the stunning natural beauty of the Arctic.'
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
        description: 'Stay in unique and unusual homes carved into cliffs and nestled in natural caves.'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Find peace and solitude in the vast deserts of the world, with unique and luxurious homes.'
    },
    {
        label: 'Farm',
        icon: GiBarn,
        description: 'Get back to nature with farm stays and rural escapes, surrounded by fields and countryside.'
    },
    {
        label: 'Jungle',
        icon: GiJungle,
        description: 'Explore lush forests and exotic wildlife in some of the world\'s most beautiful jungles.',
    },
    {
        label: 'Romantic',
        icon: IoHeartSharp,
        description: 'Experience the ultimate romantic getaway in some of the world\'s most beautiful destinations.',
    },
    {
        label: 'Garden',
        icon: GiFlowerPot,
        description: 'Relax in beautiful gardens and green spaces.',
    },
    {
        label: 'Historic',
        icon: FaLandmark,
        description: 'Stay in some of the world\'s most famous historic sites and monuments.',
    },
    {
        label: 'Treehouse',
        icon: GiTreehouse,
        description: 'Experience a unique and cozy getaway in a treehouse surrounded by nature.'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'Indulge in opulent and extravagant homes and villas, with all the amenities of a five-star hotel.'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    // const [showRightScroll, setShowRightScroll] = useState(false);
    // const containerRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const container = containerRef.current;

    //     if (container) {
    //         setShowRightScroll(container.scrollWidth > container.clientWidth)
    //     }
    // }, []);

    // const handleRightScroll = () => {
    //     const container = containerRef.current;

    //     if (container) {
    //         container.scrollBy({
    //             left: container.clientWidth,
    //             behavior: "smooth",
    //         });
    //     }
    // };
    

    const isMainPage = pathname === '/';

    if (!isMainPage) return null;

    return (
        <Container>
            <div 
                // ref={containerRef}
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                    scrollbar-hide
                "
            >
                {/* {showRightScroll && (
                    <div className="w-[220px] h-1/2 flex flex-row items-center justify-end gap-4 absolute right-[80px] bg-gradient-to-r from-transparent from-10% via-white via-30% to-white to-90%">
                        <button
                            className="bg-white border rounded-full shadow-md p-2 text-neutral-800"
                            onClick={handleRightScroll}
                        >
                            <AiOutlineRight />
                        </button>
                        <div className="text-neutral-800 px-3 py-4 border rounded-xl bg-white">
                            <div className="flex flex-row items-center gap-4">
                            <IoMdSwitch /> Filters
                            </div>
                        </div>
                    </div>
                )} */}
                {categories.map((item, index) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                        firstCategory={index === 0}
                        lastCategory={index === categories.length - 1}
                    />
                ))}
            </div>
        </Container>
    );
}
 
export default Categories;