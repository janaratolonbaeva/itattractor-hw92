import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppToolbar from "../AppToolbar/AppToolbar";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    marginTop: '50px'
  }
})

const Layout = ({children}) => {
  const classes = useStyles();
  
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main className={classes.main}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;