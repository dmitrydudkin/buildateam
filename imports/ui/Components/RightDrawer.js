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
  state = { open: true };

  render() {

    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.rightDrawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.rigthDrawerHeader} />
        <Divider />
        <List>Elnora</List>
      </Drawer>
    );
  }
}

RightDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightDrawer);
