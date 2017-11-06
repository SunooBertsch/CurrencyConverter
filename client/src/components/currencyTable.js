import React, { Component } from "react";
import { connect } from "react-redux";

class CurrencyTable extends Component {
  componentWillMount() {
    console.log("props", this.props.values);
  }
  render() {
    const values = this.props.values;
    console.log("values", values);
    if (values === undefined) {
      return <ul>hello</ul>;
    } else {
      return <ul>Hello</ul>;
    }
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CurrencyTable);
