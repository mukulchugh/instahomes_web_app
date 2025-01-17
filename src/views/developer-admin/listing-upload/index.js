import React, { useState, useEffect, useMemo } from "react";
import {
  GridPreviewButton,
  SwitchComponent,
  GridStyle,
  ModifiedListingCard,
} from "./styles";
import { Icon } from "@iconify/react";
import RowDropdown from "../../../components/developer-admin/rowDropdown";
import Base from "../../../components/developer-admin/base";
import Datatable from "../../../components/developer-admin/datatable";
import { OrangeButton } from "../../../components/developer-admin/base/styles";
import { FormErrorMessage } from "../../../components/elements";
import Loading from "../../../components/loading";
import {
  getListings,
  updateListing,
} from "../../../services/developer-admin/listings";
import { getProfile } from "../../../services/developer-admin/auth";
import { withTheme } from "styled-components";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

const VisibilityCell = ({ value, row, setMessage }) => {
  const [checked, setChecked] = useState(!!value);
  const id = row.values.id;

  return (
    <SwitchComponent
      checked={checked}
      onChange={() => {
        const newChecked = !checked;
        updateListing(
          id,
          { is_published: newChecked },
          () => setChecked(newChecked),
          () => {
            setMessage("Something went wrong. Please try again.");
          }
        );
      }}
    />
  );
};

const HeaderElements = withTheme(({ theme, showGrid, setShowGrid }) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <GridPreviewButton
        className="right-side"
        onClick={() => setShowGrid(!showGrid)}
      >
        <Icon
          icon={showGrid ? "fa:eye-slash" : "fa:eye"}
          color={theme.colors.darkHeader}
          width="1.1em"
          height="1.1em"
        />
        <span>{showGrid ? "Close" : "Open"} Grid Preview</span>
      </GridPreviewButton>
      <OrangeButton onClick={() => history.push("/partner/listings/new")}>
        + Add New Listing
      </OrangeButton>
    </React.Fragment>
  );
});

const ListingGrid = ({ data }) => {
  const { developer } = getProfile();

  return (
    <GridStyle>
      {data.map((listing) => (
        <ModifiedListingCard
          id={listing.id}
          key={listing.seo_title + listing.id}
          developer={developer.name}
          image={listing.photo_main}
          name={listing.development_name + " " + listing.unit_name}
          size={listing.lot_size}
          price={listing.lowest_price}
          address={listing.location}
          bedrooms={listing.bedrooms}
          bathrooms_min={listing.bathrooms_min}
          bathrooms_max={listing.bathrooms_max}
          isVerified={true}
        />
      ))}
    </GridStyle>
  );
};

const ListingUpload = React.memo((props) => {
  const [loading, setLoading] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    getListings(
      (data) => {
        setListings(data);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, []);

  const data = useMemo(() => listings, [listings]);

  const columns = useMemo(
    () => [
      {
        Header: "Property Name",
        accessor: "unit_name",
      },
      {
        Header: "Development",
        accessor: "development_name",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Visible?",
        accessor: "is_published",
        Cell: (props) => <VisibilityCell setMessage={setMessage} {...props} />,
        setMessage,
        disableSortBy: true,
      },
      {
        Header: "",
        accessor: "id",
        Cell: (props) => <RowDropdown {...props} isListing />,
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Listings | Instahomes</title>
        <meta name="description" content="Edit listings | Instahomes"></meta>
      </Helmet>
      <Base
        headerName="Listings"
        HeaderElements={
          <HeaderElements showGrid={showGrid} setShowGrid={setShowGrid} />
        }
        Body={
          loading ? (
            <Loading color="#3F526A" />
          ) : showGrid ? (
            <ListingGrid data={data} />
          ) : (
            <React.Fragment>
              {message && (
                <FormErrorMessage as="span">{message}</FormErrorMessage>
              )}
              <Datatable data={data} columns={columns} />
            </React.Fragment>
          )
        }
      />
    </React.Fragment>
  );
});

export default ListingUpload;
