'use client'

import axios from "axios";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Reservation } from "@prisma/client";

import { SafeListing, SafeUser } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

import useLoginModal from "@/app/hooks/useLoginModal";
import { eachDayOfInterval } from "date-fns";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

interface ListingClientProps {
    reservations?: Reservation[];
    listing: SafeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}

const ListingClient : React.FC<ListingClientProps> = ({
    listing,
    reservations = [],
    currentUser
}) => {
    const loginModal = useLoginModal();
    const router = useRouter();

    const disabledDates = useMemo(() => {
        let dates: Date[] = [];

        reservations.forEach(res => {
            const range = eachDayOfInterval({
               start: new Date(res.startDate),
               end: new Date(res.endDate)
            });

            dates = [...dates, ...range];

            return dates;
        })
    }, [reservations]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState(initialDateRange);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) return loginModal.onOpen();

        setIsLoading(true);

        axios.post('/api/reservations', {
            totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing?.id
        })
        .then(() => {
            toast.success('Listing reserved! 🛫');
            setDateRange(initialDateRange);

            /** @todo: Redirect to '/trips' */

            router.refresh();
        })
        .catch()
    }, [])

    const category = useMemo(() => {
        return categories.find(category => category.label === listing.category);
    }, [listing.category]);

    return (
        <div>
            <Container>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex flex-col gap-6">
                        <ListingHead
                            title={listing.title}
                            imageSrc={listing.imageSrc}
                            locationValue={listing.locationValue}
                            id={listing.id}
                            currentUser={currentUser}
                        />
                        <div 
                            className="
                                grid
                                grid-col-1
                                md:grid-cols-7
                                md:gap-10
                                mt-6
                            "
                        >
                            <ListingInfo
                                user={listing.user}
                                category={category}
                                description={listing.description}
                                roomCount={listing.roomCount}
                                guestCount={listing.guestCount}
                                bathroomCount={listing.bathroomCount}
                                locationValue={listing.locationValue}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default ListingClient;