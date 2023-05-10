'use client'

import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
    listings: SafeListing | [];
    currentUser: SafeUser | null;
}

const FavoritesClient : React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
    return (
        <div>
            Favorites
        </div>
    );
}
 
export default FavoritesClient;