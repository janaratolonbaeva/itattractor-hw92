import React from 'react';
import {Grid, Typography} from "@material-ui/core";

const Message = ({name, text}) => {
  return (
    <Grid item>
      <Typography>
        <strong>{name} </strong>
          {text}
      </Typography>
    </Grid>
  );
};

export default Message;