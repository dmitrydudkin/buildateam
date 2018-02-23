import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';

const drawerWidth = 240;

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
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
};

class AppBarComponent extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classNames(classes.appBar, classes[`appBar-left`])}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Project
            </Typography>
            <Button color="inherit">Search</Button>
          </Toolbar>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Overview"  href="#basic-tabs" />
            <Tab label="Tasks" />
            <Tab label="Progress"/>
            <Tab label="Project integrations"/>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarComponent);
