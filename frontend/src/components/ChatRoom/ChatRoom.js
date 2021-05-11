import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Message from "./Message/Message";
import {useSelector} from "react-redux";

const useStyles = makeStyles({
  root: {
    minHeight: '600px',
    padding: '20px 10px 10px',
    position: 'relative',
    marginBottom: '20px'
  },
  title: {
    position: 'absolute',
    top: '-20px',
    left: '10px',
    background: '#fff',
    padding: '5px 10px'
  }
})

const ChatRoom = () => {
  const classes = useStyles();
  const messages = useSelector(state => state.messages.messages);
  
  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography variant="h6" className={classes.title}>Chat room</Typography>
      <Grid container direction="column" className={classes.messageContainer}>
        {messages && messages.map(item => (
          <Message
            key={item._id}
            name={item.user.displayName}
            text={item.message}
          />
        ))}
      </Grid>
    </Paper>
  );
};

export default ChatRoom;