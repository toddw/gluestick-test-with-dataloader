/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { withDataLoader } from "compiled/gluestick";
import { loadTodos } from "../actions/todos";
import Link from "react-router/lib/Link";

export class HomeApp extends Component {
  props: {
    todos: Array<String>
  };

  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {
  }

  render () {
    const { todos } = this.props;
    return (
      <div>
        <h1>Page 1</h1>
        <Link to="/page2">Page 2</Link>
        <p>The data on this page is not loaded on server side rendering but if you navigate to page 2 and then come back it will load</p>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </div>
    );
  }
}

export const DataHomeApp = withDataLoader({
  async onEnter({dispatch}) {
    return dispatch(loadTodos());
  }
})(HomeApp);

export default connect(
  (state) => ({todos: state.todos}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(DataHomeApp);

