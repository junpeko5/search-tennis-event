import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const HeroHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          テニスイベント検索
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/sign-in">
                <Button variant="contained" color="primary">
                  ログイン
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">
                <Button variant="outlined" color="primary">
                  新規登録
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HeroHeader;
