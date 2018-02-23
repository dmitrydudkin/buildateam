import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = {};

class Overview extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <p>Overview</p>
      </div>
    );
  }
}

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);
