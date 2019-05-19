import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header, Icon, Divider } from "semantic-ui-react";
import {Link} from 'react-router-dom';

import Home from "./components/Home";
import Player from "./components/Player";

const Content = styled.div`
  margin: 30px 0;
`;

const theme = {
  twitch: "#5e459f"
};

const GlobalStyle = createGlobalStyle`
html,body {
  background-color: ${theme.twitch};
  padding: 0 60px !important; 
}
`;
/**
 * App routing
 */
const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Content>
        <Link to="/">
          <Header as="h2" icon inverted textAlign="center">
            <Icon name="twitch" />
            twitch-react-client
          </Header>
          </Link>
        </Content>
        <Divider />
        <Route exact path="/" component={Home} />
        <Route exact path="/streams/:channelId" component={Player} />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default App;
