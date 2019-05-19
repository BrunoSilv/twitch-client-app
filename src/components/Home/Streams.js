import {Link} from 'react-router-dom';
import React, { Component } from "react";
import { Grid, Card, Image, Icon } from "semantic-ui-react";

class Streams extends Component {
  loadStreams = () => {
    const { streams } = this.props;

    return streams.map(stream => (
      <Grid.Column key={stream.channel._id}>
      <Link to={`/streams/${stream.channel._id}`}>
        <Card centered>
          <Image src={stream.preview.large} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{stream.channel.display_name}</Card.Header>
            <Card.Meta>
                {stream.game}
            </Card.Meta>
            <Card.Description>
              {stream.channel.status}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name="user" />
              {stream.viewers}
          </Card.Content>
        </Card>
        </Link>
      </Grid.Column>
    ));
  };

  render() {
    return <Grid columns={3}>{this.loadStreams()}</Grid>;
  }
}

export default Streams;
