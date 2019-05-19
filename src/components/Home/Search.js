import React, { Component, Fragment } from "react";
import { Input, Dropdown } from "semantic-ui-react";
import _ from "lodash";
import { getStreams } from "../../service";

const limits = [];

class Search extends Component {
  state = {
    query: "",
    limit: window.localStorage.getItem('limit')
    ? parseInt(window.localStorage.getItem('limit'),10) : 20
  };

  search = _.debounce(() => {
    const { query, limit } = this.state;
    const { setStreams } = this.props;

    if (query && limit) {
      getStreams(query, limit).then(response => {
        setStreams(response.data.streams);
      })
    }
  }, 500);

  componentWillMount = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 10 === 0)
        limits.push({
          key: i,
          text: `${i}`,
          value: i
        });
    }
  };

  setQuery = event => {
    this.setState({ query: event.target.value }, this.search());
  };

  setLimit = (event, { value }) => {
    this.setState({ limit: parseInt(value, 10) }, window.localStorage.setItem('limit', parseInt(value, 10)), this.search());
  };

  render() {
    const { query, limit} = this.state;

    return (
      <Fragment>
        <Input
          label={
            <Dropdown
              defaultValue={limit}
              options={limits}
              onChange={this.setLimit}
            />
          }
          labelPosition="right"
          placeholder="Search Stream"
          value={query}
          fluid
          onChange={this.setQuery}
        />
      </Fragment>
    );
  }
}

export default Search;
