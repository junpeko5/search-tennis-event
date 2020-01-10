import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';

const Appbar = ({ classes }) => (
  <AppBar position="relative">
    <Toolbar>
      <CameraIcon className={classes.icon} />
      <Typography variant="h6" color="inherit" noWrap>
          Album layout
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Appbar;
