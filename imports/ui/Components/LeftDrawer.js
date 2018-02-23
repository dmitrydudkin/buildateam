import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import Collapse from 'material-ui/transitions/Collapse';
import ViewQuilt from 'material-ui-icons/ViewQuilt';
import FiberManualRecord from 'material-ui-icons/FiberManualRecord';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import SendIcon from 'material-ui-icons/Send';

import { withStyles } from 'material-ui/styles';

const drawerWidth = 240;

const styles = theme => {
  // FIXIT: remove after debug
  // console.log(theme.palette);
  return {
    drawerPaper: {
      position: 'relative',
      height: '100%',
      width: drawerWidth,
    },
    drawerHeader: {
      backgroundColor: theme.palette.primary.main,
      height: 110
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    }
  }
};

class LeftDrawer extends React.Component {
  state = { open: true };

  render() {

    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.drawerHeader} />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ViewQuilt />
            </ListItemIcon>
            <ListItemText inset primary="Projects Dashboard" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon color="error">
              <FiberManualRecord />
            </ListItemIcon>
            <ListItemText inset primary="Buildateam" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecord />
            </ListItemIcon>
            <ListItemText inset primary="Kickstagram" />
          </ListItem>
        </List>
        <List>2</List>
        <List>3</List>
        <Divider />
        <List>4</List>
        <List>5</List>
        <List>6</List>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
