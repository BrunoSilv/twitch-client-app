import React, { Component, Fragment } from "react";
import { Divider } from "semantic-ui-react";
import Search from "./Search";
import Streams from "./Streams";

class Home extends Component {
  state = {
    streams: []
  };

  setStreams = streams => {
    this.setState({ streams });
  };
  render() {
    const {streams} = this.state;
    return (
      <Fragment>
        <Search setStreams={this.setStreams} />
        <Divider />
        <Streams streams={streams} />
      </Fragment>
    );
  }
}

export default Home;
