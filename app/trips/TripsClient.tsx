'use client'

import { SafeReservation, SafeUser } from "../types"

interface TripsClientProps {
    reservations?: SafeReservation | null;
    currentUser: SafeUser | null;
}

const TripsClient : React.FC<TripsClientProps> = ({
    reservations,
    currentUser
}) => {
    return (
        <div>
            Trips Client
        </div>
    );
}
 
export default TripsClient;