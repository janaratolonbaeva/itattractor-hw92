import React from 'react';
import {Icon, makeStyles} from "@material-ui/core";
import googleImage from "../../../assets/images/google-icon.svg";

const useStyle = makeStyles({
  image: {
    width: '100%',
    height: '100%',
    verticalAlign: 'top'
  }
});

const GoogleIcon = props => {
  const classes = useStyle();

  return (
    <Icon {...props}>
      <img src={googleImage} alt="google logo" className={classes.image}/>
    </Icon>
  );
};

export default GoogleIcon;