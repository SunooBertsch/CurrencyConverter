import React, { Component } from "react";
import { connect } from "react-redux";

class CurrencyTable extends Component {
  render() {
    const values = this.props.currencyValues;
    console.log("values", values);
    const renderData = Object.entries(values);
    if (values === undefined) {
      return <ul>hello</ul>;
    } else {
      return (
        <ul>
          {renderData.map(val => {
            return <li>{val}</li>;
          })}
        </ul>
      );
    }
  }
}

function mapStateToProps({ currencyValues }) {
  return { currencyValues };
}

export default connect(mapStateToProps)(CurrencyTable);
