import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData] = React.useState([
    { key: 0, label: '初級' },
    { key: 1, label: '中級' },
    { key: 2, label: '中上級' },
    { key: 3, label: '上級' },
    { key: 4, label: 'オープン' },
    { key: 5, label: 'ジュニア' },
    { key: 6, label: 'イベント' },
  ]);

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}
