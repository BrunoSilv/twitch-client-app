import React, { Component, Fragment } from "react";
import { getStream } from "../../service";
import { Embed, Segment, Icon, Header } from "semantic-ui-react";

class Player extends Component {
  state = {
    displayName: "",
    title: "",
    description: "",
    viewers: 0
  };

  componentWillMount = () => {
    this.getStreams();
    setInterval(() => this.getStreams(), 10000);
  };

  getStreams = () => {
    const { match } = this.props;

    getStream(match.params.channelId).then(response => {
      this.setState({
        displayName: response.data.stream.channel.display_name,
        title: response.data.stream.channel.status,
        description: response.data.stream.channel.description,
        viewers: response.data.stream.viewers
      });
    });
  };

  render() {
    const { displayName, title, description, viewers } = this.state;
    return (
      <Fragment>
        <Embed
          active
          url={`https://player.twitch.tv/?channel=${displayName}`}
          iframe={{
            allowFullScreen: true
          }}
        />
        <Header as="h2" attached="top">
          {title}
        </Header>
        <Segment attached>{description}</Segment>
        <Segment attached>
          <Icon name="user" />
          {`${viewers} Viewers`}
        </Segment>
      </Fragment>
    );
  }
}

export default Player;
