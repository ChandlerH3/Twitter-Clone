import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Bookmarks } from "./Bookmarks";
import { TweetDetails } from "./TweetDetails";
import { HomeFeed } from "./HomeFeed";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Error } from "./Error";

import Globalstyles from "./Globalstyles";

const App = () => {
  return (
    <Router>
      <Globalstyles />
      <Wrapper>
        <Sidebar />
        <SwitchContainer>
          <Switch>
            <Route exact path="/"><HomeFeed /></Route>
            <Route path="/notifications" ><Notifications /></Route>
            <Route path="/bookmarks"><Bookmarks /></Route>
            <Route path="/tweet/:tweetId"><TweetDetails /></Route>
            <Route path="/profile/:profileId"><Profile /></Route>
            <Route path="/error"><Error /></Route>
          </Switch>
        </SwitchContainer>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
background-color:white;`

const SwitchContainer = styled.div`
display: flex;
background-color: white;
color: black;
flex:1 1 70%;`

export default App;
