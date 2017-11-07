import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import io from "socket.io-client";

import CurrencyTable from "./CurrencyTable";

let socket;

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    socket = io.connect("http://localhost:3123");
    //this.props.dataFeed(socket);
    //this.props.fetchValues();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={CurrencyTable} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return { ...state };
}

export default connect(mapStateToProps, actions)(App);
