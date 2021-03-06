import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Appbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <CameraIcon className={classes.icon} />
        </Link>
        <Link to="/">
          <Typography variant="h6" color="inherit" noWrap>
            テニスイベント検索
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
