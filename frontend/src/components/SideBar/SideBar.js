import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyle = makeStyles({
  root: {
    padding: '20px 10px',
    minWidth: '200px',
    marginRight: '20px',
    position: 'relative',
    height: '100%'
  },
  title: {
    position: 'absolute',
    top: '-20px',
    left: '10px',
    background: '#fff',
    padding: '5px 10px'
  }
})

const SideBar = () => {
  const classes = useStyle();
  const activeUsers = useSelector(state => state.messages.userActives);

  console.log(activeUsers);
  
  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography variant="h6" className={classes.title}>Online Users</Typography>
      <Grid container>
        {activeUsers && Object.values(activeUsers).map(item => (
          <Grid item key={item._id}>
            <Typography>{item.displayName}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SideBar;