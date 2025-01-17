import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // history.listen((location) => {
  //   ReactGA.set({ page: location.pathname }); // Update the user's current page
  //   ReactGA.pageview(location.pathname); // Record a pageview for the given page
  // });

  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
    ReactPixel.pageView();
  }, [location]);

  return children;
};

export default ScrollToTop;
