import React, { Component } from "react";
import { connect } from "react-redux";
import { loadResources, stringResource } from "./lib/stringResource";
import FrontPage from "./FrontPage";

class AppWrapper extends Component {
  componentWillMount() {
    loadResources({ HELLO: "Hello World!!!" });
  }

  render() {
    const labels = {
      hello: stringResource("HELLO")
    };
    return <FrontPage labels={labels} />;
  }
}

export default connect()(AppWrapper);
