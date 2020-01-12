import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Prefecture from './Prefecture';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

const Prefectures = () => {
  const classes = useStyles();
  const initialState = {
    prefectures: [
      { area: '北海道', open: false },
      { area: '東北', open: false },
      { area: '関東', open: false },
      { area: '中部', open: false },
      {
        area: '関西',
        open: false,
        prefecture: [{ name: '大阪' }, { name: '兵庫県' }],
      },
      { area: '中国', open: false },
      { area: '四国', open: false },
      { area: '九州', open: false },
    ],
  };
  const [state, setState] = React.useState(initialState);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          都道府県で検索
        </ListSubheader>
      }
      className={classes.root}
    >
      {state.prefectures.map(pref => {
        return <Prefecture key={pref.area} pref={pref} classes={classes} />;
      })}
    </List>
  );
};

export default Prefectures;
