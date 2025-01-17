import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingGrid from "../../components/listing-grid";
import Loading from "../../components/loading";
import EmptyPage from "../../components/empty-page";

import { WishlistContainer, WishlistHeader } from "./styles";
import { getListings } from "../../services/listings";
import { Helmet } from "react-helmet";

const Wishlist = React.memo((props) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getListings(
      (data) => {
        if (data.length > 0) {
          setListings(data);
          setIsLoading(false);
        } else {
          setIsEmpty(true);
          setIsLoading(false);
        }
      },
      () => {
        setIsLoading(false);
      },
      "in_wishlist=True"
    );
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instahomes | My Wishlist</title>
        <meta name="description" content=""></meta>
      </Helmet>
      <Navbar />
      <WishlistContainer>
        <WishlistHeader>My Wishlist</WishlistHeader>
        <EmptyPage
          isEmpty={isEmpty}
          header={"Nothing is on your wishlist right now."}
          body={"Browse through more of our listings to see what you like!"}
        >
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <ListingGrid listings={listings} noSort />
          )}
        </EmptyPage>
      </WishlistContainer>
    </Layout>
  );
});

export default Wishlist;
