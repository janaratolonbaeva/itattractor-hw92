import React, {useEffect, useRef, useState} from 'react';
import {Grid, IconButton, makeStyles} from "@material-ui/core";
import FormElement from "../UI/Form/FormElement";
import SendIcon from '@material-ui/icons/Send';
import {useDispatch, useSelector} from "react-redux";

const useStyle = makeStyles({
  btn: {
    marginLeft: '10px',
    backgroundColor: '#3f51b5',
    borderRadius: '50%'
  },
  sendIcon: {
    fill: '#fff'
  }
});

const SendForm = () => {
  const dispatch = useDispatch();
  const ws = useRef(null);
  const [message, setMessage] = useState('');
  const user = useSelector(state => state.users.user);
  const classes = useStyle();

  const inputChangeHandler = e => {
    const value = e.target.value;

    setMessage(value);
  };

  useEffect(() => {
    const url = 'ws://localhost:8080/chat';
    ws.current = new WebSocket(user ? `${url}?token=${user.token}` : url);

    ws.current.onmessage = event => {
      const decoded = JSON.parse(event.data);

      dispatch(decoded);
    }
  }, []);
  
  const submitMessage = e => {
    e.preventDefault();

    ws.current.send(JSON.stringify({type: 'CREATE_MESSAGE', message: message}));
  }
  
  return (
    <Grid container component="form" onSubmit={submitMessage} alignItems="center">
      <FormElement
        type="text"
        name="message"
        label="Enter Message"
        onChange={inputChangeHandler}
        value={message}
      />
      <Grid item className={classes.btn}>
        <IconButton
          type="submit"
          variant="outlined"
        >
          <SendIcon className={classes.sendIcon}/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SendForm;