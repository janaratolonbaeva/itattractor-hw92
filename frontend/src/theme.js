const {createMuiTheme} = require("@material-ui/core");

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    }
  }
});

export default theme;