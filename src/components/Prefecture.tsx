import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PlaceIcon from '@material-ui/icons/Place';

const Prefecture = ({ pref, classes }) => {
  const handleClick = () => {
    // setState(() => {
    // });
    // setState(!state.prefectures.open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PlaceIcon />
        </ListItemIcon>
        <ListItemText primary={pref.area} />
        {pref.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={pref.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="大阪府" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default Prefecture;
