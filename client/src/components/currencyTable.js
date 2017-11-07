import React, { Component } from "react";
import { connect } from "react-redux";
import { subscribeToTimer } from "../api";

class CurrencyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "no timestamp yet"
    };
    subscribeToTimer((err, timestamp) => {
      this.setState({
        timestamp
      });
    });
  }
  render() {
    return this.state.timestamp;
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CurrencyTable);
