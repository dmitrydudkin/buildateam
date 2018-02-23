import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import VitalBlock from '../widgets/VitalBlock';
import ProjectLinks from '../widgets/ProjectLinks';
import ProductionBlock from '../widgets/ProductionBlock';
import TimesBlock from '../widgets/TimesBlock';
import MembersBlock from '../widgets/MembersBlock';
import IssueTrackingBlock from '../widgets/IssueTrackingBlock';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Overview extends React.Component {
  render() {
    const { classes } = this.props;

    const items = [];

    for (let i = 0; i < 12; i++)
      items.push(<Grid key={i}  item xs={1}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>)

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <VitalBlock />
            <ProjectLinks />
            <ProductionBlock />
          </Grid>
          <Grid item xs={4}>
            <TimesBlock />
            <MembersBlock />
            <IssueTrackingBlock />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);
