'use client'

import axios from "axios";

import { Range } from "react-date-range";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Reservation } from "@prisma/client";

import { SafeListing, SafeUser } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

import useLoginModal from "@/app/hooks/useLoginModal";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import ListingReservation from "@/app/components/listings/ListingReservation";
import { IoDiamondOutline } from "react-icons/io5";

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
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [daysCount, setDaysCount] = useState(1);
    const [tax, setTax] = useState(0);

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
        .catch(err => {
            toast.error(err.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [
        totalPrice,
        dateRange,
        listing?.id,
        router,
        currentUser,
        loginModal
    ]);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            setDaysCount(dayCount);

            if (dayCount && listing.price) setTotalPrice(dayCount * listing.price);
            else setTotalPrice(listing.price);
        }
    }, [dateRange, listing.price]);

    const category = useMemo(() => {
        return categories.find(category => category.label === listing.category);
    }, [listing.category]);

    const getFirstName = (name: string | any): string | any => {
        if (!name) return null;

        const names = name.split(" ");
        return names[0];
    }

    const firstName = getFirstName(listing.user.name);

    const extraFees = [
        {
            name: "Cleaning Fee",
            amount: 60
        },
        {
            name: "Airbnb Service Fee",
            amount: 102
        }
    ];

    const recalculateTotal = (oldTotal: number) => {
        let total = oldTotal;

        extraFees.forEach(fee => {
            total += fee.amount;
        });

        setTax(tax * 0.13);

        return total + tax;
    }

    const newTotal = recalculateTotal(totalPrice);

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
                            <div
                                className="
                                    order-first
                                    mb-10
                                    md:order-last
                                    md:col-span-3
                                    md:ml-8
                                "
                            >
                                <ListingReservation
                                    price={listing.price}
                                    totalPrice={totalPrice}
                                    onChangeDate={val => setDateRange(val)}
                                    dateRange={dateRange}
                                    onSubmit={onCreateReservation}
                                    disabled={isLoading}
                                    disabledDates={disabledDates}
                                    daysCount={daysCount}
                                    extraFees={extraFees}
                                    tax={tax}
                                />
                                <div className="mt-4 border border-neutral-300 rounded-xl p-6 flex flex-row items-center justify-between">
                                    <div className="font-light">
                                        <strong className="font-semibold">This is a rare find.</strong> {firstName}'s place on Airbnb is usually fully booked.
                                    </div>
                                    <IoDiamondOutline className="text-rose-500 ml-4" size={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default ListingClient;