import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Badge from 'material-ui/Badge';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';

import Message from 'material-ui-icons/Message';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import SendIcon from 'material-ui-icons/Send';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  rightDrawerPaper: {
    position: 'relative',
    height: '100%',
    width: 100,
    marginTop: 112
  },

  rigthDrawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  }
});

class RightDrawer extends React.Component {
  render() {
    const { classes } = this.props;
    const avatars = [];

    for (let i = 0; i < 4; i++)
      avatars.push(
        <ListItem key={i}>
          <Avatar src="http://lorempixel.com/100/100/people" />
        </ListItem>
      )

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.rightDrawerPaper,
        }}
        anchor="right"
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <Message />
            </ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem>
            <Badge badgeContent={1} color="secondary">
              <Avatar src="http://lorempixel.com/100/100/people" />
            </Badge>
          </ListItem>
          { avatars }
        </List>
      </Drawer>
    );
  }
}

RightDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightDrawer);
