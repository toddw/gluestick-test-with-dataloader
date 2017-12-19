/* @flow */

import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "compiled/gluestick";

import MasterLayout from "./components/MasterLayout";
import HomeApp from "./containers/HomeApp";
import NoMatchApp from "./containers/NoMatchApp";
import Link from "react-router/lib/Link";

export default function routes (/*store: Object, httpClient: Object*/) {
  return (
    <Route name="app" component={MasterLayout} path="/">
      <IndexRoute name="home" component={HomeApp} />
      <Route path="/page2" component={() => <div><h1>Page 2</h1><Link to="/">Go back to home page</Link></div>} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Route>
  );
}
