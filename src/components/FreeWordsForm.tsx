import React from 'react';
import { Container, Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  section: {
    padding: 30,
  },
  root: {
    padding: '2px 4px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const FreeWordsForm = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="イベントを検索"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>
    </section>
  );
};

export default FreeWordsForm;
