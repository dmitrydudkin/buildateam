import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Chip from 'material-ui/Chip';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import Share from 'material-ui-icons/Share';
import Create from 'material-ui-icons/Create';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


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
  },
  avatar: {
    float: 'left',
    marginRight: 10
  },
  cell: {
    borderBottom: 0
  }
});

class MembersBlock extends React.Component {
  render() {
    const { classes } = this.props;
    const members = ['Damian Jacobs', 'Lora Parker', 'Carla Mishele',
     'Grag Swan', 'Enlora Douglas'].map(name => {
       return (
        <TableRow key={name}>
          <TableCell className={classes.cell}>
            <Avatar className={classes.avatar}>
              {name[0]}
            </Avatar>
            <Typography variant="body2" >
              {name}
            </Typography>
          </TableCell>
          <TableCell className={classes.cell}>$10</TableCell>
        </TableRow>
       )
     })

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <CardHeader
              action={
                (<div><IconButton>
                  <Share />
                </IconButton>
                <IconButton>
                  <Create />
                </IconButton></div>
                )
              }
            />
            <Typography variant="title">
              Members
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cell}></TableCell>
                  <TableCell className={classes.cell}>Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members}
              </TableBody>
            </Table>
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
