import React from "react";
import styled from "styled-components";
import ListingCard from "../../components/listing-card";
import { ListingInfo } from "../../components/listing-card/styles";
import { LightInput, OutlineButton } from "../../components/elements";

export const ListingsFilters = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  gap: 10px;

  .listing-count {
    font-size: 0.8em;
    color: #738398;

    .count-emphasis {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.darkHeader};
    }
  }

  .listing-sort {
    margin-left: auto;
  }
`;

export const GridStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5em 1em;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const ModifiedListingCard = styled(ListingCard)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    ${ListingInfo} {
      height: auto;
    }
  }
`;

const ListingGrid = ({ listings, setOrderBy, noSort }) => {
  return (
    <React.Fragment>
      <ListingsFilters>
        <span className="listing-count">
          Showing <span className="count-emphasis">{listings.length}</span> out
          of <span className="count-emphasis">{listings.length}</span> listings
        </span>
        {!noSort && (
          <LightInput
            scale={0.8}
            as="select"
            className="listing-sort"
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="-created_at">Sort by Newest</option>
            <option value="-lowest_price">Sort by Price (highest first)</option>
            <option value="lowest_price">Sort by Price (lowest first)</option>
            <option value="-lot_size">Sort by Size (highest first)</option>
            <option value="lot_size">Sort by Size (lowest first)</option>
          </LightInput>
        )}
        {/* <OutlineButton
            className="remove-on-mobile btn-rubik"
            scale={0.8}
            style={{ alignSelf: "stretch", fontWeight: 400 }}
          >
            View with map <span id="beta">BETA</span>
          </OutlineButton> */}
      </ListingsFilters>
      <GridStyle>
        {listings.map((listing) => (
          <ModifiedListingCard
            id={listing.id}
            key={listing.seo_title}
            developer={listing.development.developer.name}
            image={listing.photo_main}
            name={listing.development.name + " " + listing.unit_name}
            size={listing.floor_size_min}
            price={listing.lowest_price}
            address={listing.development.location}
            bedrooms={listing.bedrooms}
            bathrooms={listing.bathrooms_min}
            isVerified={true}
            isOnWishlist={listing.is_liked}
          />
        ))}
      </GridStyle>
    </React.Fragment>
  );
};

export default ListingGrid;