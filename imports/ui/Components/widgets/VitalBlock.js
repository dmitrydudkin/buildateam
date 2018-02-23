import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Chip from 'material-ui/Chip';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import Create from 'material-ui-icons/Create';

const styles = theme => ({
  card: {
    marginTop: 10,
    marginBottom: 10
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  }
});

class VitalBlock extends React.Component {
  render() {
    const { classes } = this.props;

    const title = "Build a Team"
    const tag = <Chip label="New project" />
    const subheader = (
      <div>
        {tag}
        Due to: 01 JAN 2017
      </div>
    )

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <Create />
              </IconButton>
            }
            title={title}
            subheader={subheader}
          />
          <CardContent>
            <Typography component="p">
              Content....
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

VitalBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VitalBlock);
