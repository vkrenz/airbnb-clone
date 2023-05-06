'use client'

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

import CategoryBox from '../CategoryBox';
import { useSearchParams, usePathname } from "next/navigation";


export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'Vivamus suscipit tortor eget felis.'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Dolor sit amet, consectetur adipiscing elit.'
    },
    {
        label: 'Mountain',
        icon: TbMountain,
        description: 'Aliquam erat volutpat. Nam libero justo.'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'Duis aute irure dolor in reprehenderit.'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'Nunc tincidunt lacus quis nisl finibus.'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'Praesent non feugiat justo, vitae.'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'Nullam cursus sit amet ex vel.'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'Curabitur dictum nisl non felis efficitur.'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Vivamus sagittis, tortor quis pretium.'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'Proin euismod massa ac urna.'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'Ut enim ad minim veniam, quis.'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Phasellus vel consectetur dolor.'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'Aenean vel elit nec libero.'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'Sed ut perspiciatis unde omnis iste.'
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