import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

const ListingPage = async () => {
    return (
        <ClientOnly>
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings yet."
            />
        </ClientOnly>
    )
}

export default ListingPage;
