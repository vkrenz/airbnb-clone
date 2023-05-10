'use client'

import axios from "axios";
import { toast } from "react-hot-toast";

import { useEffect } from "react";
import { SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationClientProps {
    reservations?: SafeReservation;
    currentUser?: SafeUser;
}

const ReservationsClient : React.FC<ReservationClientProps> = ({
    reservations,
    currentUser
}) => {

    useEffect(() => {
        document.title=`${currentUser?.name?.split(' ')[0]}'s Reservations`
    }, [currentUser])

    return (
        <div>
            ReservationsClient
        </div>
    );
}
 
export default ReservationsClient;