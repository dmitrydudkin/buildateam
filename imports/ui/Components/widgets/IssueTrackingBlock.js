import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Chip from 'material-ui/Chip';
import Card, { CardHeader, CardMedia, CardContent, CardActions }
  from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText, ListItemIcon }
  from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import Create from 'material-ui-icons/Create';
import Radio from 'material-ui-icons/Radio';
import BugReport from 'material-ui-icons/BugReport';

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

class IssueTrackingBlock extends React.Component {
  render() {
    const { classes } = this.props;

    const issues = [
      { name: 'Feature', icon: <Radio />, counter: '1/2/4'},
      { name: 'Bug', icon: <BugReport />, counter: '2/2/5' },
      { name: 'Support', icon: <BugReport />, counter: '2/4/8' },
      { name: 'Question', icon: <BugReport />, counter: '1/3/7' },
      { name: 'DevOps', icon: <BugReport />, counter: '0/0/0' },
      { name: 'Design', icon: <BugReport />, counter: '0/0/0' },
      { name: 'Epic', icon: <BugReport />, counter: '0/0/0' },
    ]

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="title">
              Issue Tracking
            </Typography>
            <List>
              {issues.map(issue => (
                <ListItem key={issue.name} dense button className={classes.listItem}>
                  <ListItemIcon>
                    {issue.icon}
                  </ListItemIcon>
                  <ListItemText primary={issue.name} />
                  <ListItemSecondaryAction>
                    <Chip label={issue.counter}/>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

IssueTrackingBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IssueTrackingBlock);
