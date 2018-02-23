import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

import Divider from 'material-ui/Divider';
import SendIcon from 'material-ui-icons/Send';

import { withStyles } from 'material-ui/styles';

const drawerWidth = 240;

const styles = theme => {
  console.log(theme.palette);
  return {
    drawerPaper: {
      position: 'relative',
      height: '100%',
      width: drawerWidth,
    },
    drawerHeader: {
      backgroundColor: theme.palette.primary.main,
      height: 110
    }
  }
};

class LeftDrawer extends React.Component {
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
        <List subheader={
          <ListSubheader component="div">Projects Dashboard</ListSubheader>
        }>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
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
