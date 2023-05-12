export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

import Container from "./components/Container";
import ListingCard from "./components/listings/ListingCard";
import EmptyState from "./components/EmptyState";

import getListings, { IListingsParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import getUserImageById from "./actions/getUserImageById";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  let listingCards = [];

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  for (const listing of listings) {
    const userImage = await getUserImageById({ userId: listing.userId });

    listingCards.push(
      <ListingCard
        currentUser={currentUser}
        key={listing.id}
        data={listing}
        userImage={userImage || ''}
        showAvatar
      />
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
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
          {/* {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })} */}
          {listingCards}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;
