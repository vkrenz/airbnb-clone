'use client';

import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';

interface ListingReservationProps {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates?: boolean;
}

const ListingReservation : React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates
}) => {
    return (
        <div
            className="
                bg-white
                rounded-xl
                border-[1px]
                border-neutral-300
                overflow-hidden
                drop-shadow-xl
            "
        >
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    ${price} CAD
                </div>
                <div className="font-light next-neutral-600">
                    night
                </div>
            </div>
            <hr />
            <Calendar
                value={dateRange}
                disabledDates={disabledDates}
                onChange={val => onChangeDate(val.selection)}

            />
        </div>
    );
}
 
export default ListingReservation;