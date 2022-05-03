import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import DevelopmentPage from "./development-page";
import Tour from "./tour";
import ProtectedRoute from "../../misc/protectedRoutes";
import {
  hasDeveloperProfile,
  storeDeveloperProfile,
  getDevelopers,
} from "../../services/developer-website/developers";
import EmptyPage from "../../components/empty-page";
import DeveloperLanding from "./developer-landing";

const DeveloperWebsite = () => {
  let match = useRouteMatch();
  let developerName = match.path.substring(1);
  const loginPath = `${match.path}/login`;
  // const isLoggedIn = isAuthenticated();

  useEffect(() => {
    if (!hasDeveloperProfile(developerName)) {
      getDevelopers(
        (profile) => storeDeveloperProfile(profile[0]),
        () => {},
        `name=${developerName}`
      );
    }
  }, [developerName]);

  return (
    <Switch>
      <Route exact path={`${match.path}/development/:id`}>
        <DevelopmentPage />
      </Route>
      <Route exact path={`${match.path}/developer-landing`}>
        <DeveloperLanding />
      </Route>
      <Route exact path={`${match.path}/tour/:id`}>
        <Tour />
      </Route>
      <Route>
        <EmptyPage isEmpty={true} />
      </Route>
    </Switch>
  );
};

export default DeveloperWebsite;
