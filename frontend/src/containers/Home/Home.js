import React from 'react';
import {Container, Grid} from "@material-ui/core";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import SendForm from "../../components/SendForm/SendForm";
import SideBar from "../../components/SideBar/SideBar";
import {useSelector} from "react-redux";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid container justify="space-between" alignItems="stretch">
        <Grid item>
          <SideBar/>
        </Grid>
        <Grid item container xs direction="column">
          <ChatRoom/>
          <SendForm/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;