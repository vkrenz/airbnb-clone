'use client'

import axios from "axios";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";

import { SafeReservation, SafeUser } from "../types"
import ListingCard from "../components/listings/ListingCard";

interface TripsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}

const TripsClient : React.FC<TripsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => { toast.success('Reservation cancelled successfully! ❌'); router.refresh() })
        .catch(err => toast.error(err?.message))
        .finally(() => setDeletingId(''));
    }, [router]);

    useEffect(() => {
        document.title=`${currentUser?.name?.split(' ')[0]}'s Trips`
    }, [currentUser])

    return (
        <Container>
            <Heading
                title="Trips"
                subtitle="Where you've been and where you're going"
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
                        actionLabel="Cancel reservation"
                        currentUser={currentUser}
                        newest={index === 0}
                    />
                ))}
            </div>
        </Container>
    );
}
 
export default TripsClient;