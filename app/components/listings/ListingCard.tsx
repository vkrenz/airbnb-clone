'use client'

import { useRouter } from "next/navigation";

import { SafeUser, SafeListing, SafeReservation } from "@/app/types";
import useCountries from "@/app/hooks/useCountries";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { format } from 'date-fns';
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";
import Avatar from "../Avatar";
import { BsStars } from "react-icons/bs";

interface ListingCardProps {
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
    newest?: boolean;
    userImage?: string | '';
    showAvatar?: boolean;
}

const ListingCard : React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser,
    newest,
    userImage,
    showAvatar
}) => {
    const router = useRouter();
    const { getByValue } = useCountries();

    const location = getByValue(data.locationValue);

    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (disabled) return;

        onAction?.(actionId);
    }, [onAction, actionId, disabled]);

    const price = useMemo(() => {
        if (reservation) return reservation.totalPrice;

        return data.price;
    }, [reservation, data.price]);

    const reservationDate = useMemo(() => {
        if (!reservation) return null;

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation])

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="
               col-span-1
               cursor-pointer
               group
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-2
                    w-full
                "
            >
                <div
                    className="
                        aspect-square
                        w-full
                        relative
                        overflow-hidden
                        rounded-xl
                    "
                >
                    <Image
                        fill
                        alt="Listing"
                        src={data.imageSrc}
                        className="
                            object-cover
                            h-full
                            w-full
                            group-hover:scale-110
                            transition
                        "
                    />
                    <div className="absolute top-4 right-4">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                    {showAvatar && (
                        <div className="absolute bottom-4 left-4 bg-gray-100 px-3 py-4 rounded-tl-[2px] rounded-bl-[2px] border-t-white rounded-tr-lg rounded-br-lg">
                            <div className="absolute top-0 w-[1px] h-full bg-gray-400 left-1"></div>
                            <Avatar
                                large
                                border
                                src={userImage}
                            />
                        </div>
                    )}
                </div>
                <div
                    className="
                        font-semibold
                        text-lg
                        w-full
                        flex
                        flex-row
                        items-center
                        gap-3
                        whitespace-nowrap
                    "
                >   
                    {location?.region}, {location?.label} {newest && (<div className="text-sm font-semibold text-rose-500"><BsStars /></div>)} 
                </div>
                <div
                    className="
                        font-light
                        text-neutral-500
                    "
                >
                    {reservationDate || data.category}
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        gap-1
                    "
                >
                    <div className="font-semibold">
                        ${price} CAD
                    </div>
                    {!reservation && (
                        <div className="font-light">night</div>
                    )}
                </div>
                {/* <hr className="my-2" /> */}
                {onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    );
}
 
export default ListingCard;