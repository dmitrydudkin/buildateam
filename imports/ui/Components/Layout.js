import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import AppBar from '../Components/AppBar';
import LeftDrawer from '../Components/drawers/LeftDrawer';
import RightDrawer from '../Components/drawers/RightDrawer';
import Overview from '../Components/pages/Overview';
import Tasks from '../Components/pages/Tasks';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },

  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 110px)',
    marginTop: 110,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 110,
    },
  },
});

class Layout extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar />
            <LeftDrawer />
            <main className={classes.content}>
              <Switch>
                <Route exact path="/" component={Overview} />
                <Route exact path="/tasks" component={Tasks} />
              </Switch>
            </main>
            <RightDrawer />
          </div>
        </div>
      </Router>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
