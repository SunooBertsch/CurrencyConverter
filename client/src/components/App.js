import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import CurrencyTable from "./CurrencyTable";

class App extends Component {
  componentWillMount() {
    this.props.fetchValues();
  }

  render() {
    return (
      <div>
        Hello!
        <CurrencyTable />
      </div>
    );
  }
}

export default connect(null, actions)(App);
