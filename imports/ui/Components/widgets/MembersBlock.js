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

class MembersBlock extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Members....
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

MembersBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembersBlock);
