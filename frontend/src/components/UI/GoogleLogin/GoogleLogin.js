import React from 'react';
import {googleClientId} from "../../../config";
import {Button} from "@material-ui/core";
import GoogleIcon from "../GoogleIcon/GoogleIcon";
import GoogleLoginButton from "react-google-login";
import {useDispatch} from "react-redux";
import {googleLogin} from "../../../store/actions/userActions";

const GoogleLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = response => {
    dispatch(googleLogin(response));
  };

  return (
    <GoogleLoginButton
      clientId={googleClientId}
      buttonText="Login"
      render={props => (
        <Button
          fullWidth
          color="primary"
          variant="outlined"
          onClick={props.onClick}
          startIcon={<GoogleIcon/>}
        >
          Login with Google
        </Button>
      )}
      onSuccess={handleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLogin;