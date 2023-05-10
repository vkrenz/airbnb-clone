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
    reservations: SafeReservation[];
    currentUser?: SafeUser;
}

const ReservationsClient : React.FC<ReservationClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success("Reservation cancelled successfully! ❌");
            router.refresh();
        })
        .catch(err => {
            toast.error(err.message);
        })
        .finally(() => {
            setDeletingId('');
        })
    }, [router]);

    useEffect(() => {
        document.title=`${currentUser?.name?.split(' ')[0]}'s Reservations`;
    }, [currentUser]);

    return (

        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings on your properties"
            />
            <div
                className="
                    mt-10
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    3xl:grid-cols-5
                    4xl:grid-cols-6
                    gap-8
                "
            >
                {reservations.map((res, index) => (
                    <ListingCard
                        key={res.id}
                        data={res.listing}
                        reservation={res}
                        actionId={res.id}
                        onAction={onCancel}
                        disabled={deletingId === res.id}
                        actionLabel="Cancel guest reservation"
                        currentUser={currentUser}
                        newest={index === 0}
                    />
                ))}
            </div>
        </Container>
    );
}
 
export default ReservationsClient;