'use client';

interface ListingReservationProps {
    price: number;
    totalPrice: number;
    onChange: (value: number) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates?: boolean;
}

const ListingReservation : React.FC<ListingReservationProps> = ({
    price,
    totalPrice,
    onChange,
    onSubmit,
    disabled,
    disabledDates
}) => {
    return (
        <div>
            Listing Reservation
        </div>
    );
}
 
export default ListingReservation;