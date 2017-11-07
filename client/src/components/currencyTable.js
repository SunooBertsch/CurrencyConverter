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
    const data = this.state.timestamp;
    if (data.rates) {
      const array = Object.entries(data.rates);
      const rendered = array.map(val => {
        console.log(val);
        return <li>{val[0] + ":  " + val[1].toFixed(2)}</li>;
      });
      return <ul>{rendered}</ul>;
    }
    return <ul>Hello</ul>;
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CurrencyTable);
