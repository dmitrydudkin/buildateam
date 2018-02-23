import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = {};

class Tasks extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <p>Tasks</p>
      </div>
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tasks);
