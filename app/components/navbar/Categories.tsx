'use client'

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn, GiJungle, GiPaintBrush, GiFlowerPot } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { FaLandmark, FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond, IoHeartSharp } from 'react-icons/io5';

import CategoryBox from '../CategoryBox';
import { useSearchParams, usePathname } from "next/navigation";


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
        label: 'Island',
        icon: GiIsland,
        description: 'Discover idyllic islands with crystal-clear waters, palm trees, and white sand beaches.'
    },
    {
        label: 'Lakefront',
        icon: GiBoatFishing,
        description: 'Enjoy lakefront homes with beautiful views and water activities like fishing and boating.'
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
        label: 'Lux',
        icon: IoDiamond,
        description: 'Indulge in opulent and extravagant homes and villas, with all the amenities of a five-star hotel.'
    },
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) return null;

    return (
        <Container>
            <div 
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map(item => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}
 
export default Categories;