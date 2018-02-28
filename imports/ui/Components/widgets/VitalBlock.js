import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Chip from 'material-ui/Chip';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';

import Select from 'material-ui/Select';


import Create from 'material-ui-icons/Create';
import CheckCircle from 'material-ui-icons/CheckCircle';

const styles = theme => ({
  card: {
    marginTop: 10,
    marginBottom: 10,
    padding: 30
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  textField: {
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit,
    display: 'block',
    width: 200
  },
  textareaControl: {
    margin: theme.spacing.unit
  },
});

class VitalBlock extends React.Component {
  state = {
    editing: false,
    siteURL: 'https://v2.buildateam.io',
    skils: 3,
    client: 'Some client info',
    description: 'lorem ipsum'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  edit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    const { classes } = this.props;

    const disabled = !this.state.editing;
    const title = "Build a Team"
    const tag = <Chip label="New project" />
    const dueDate = <TextField
      disabled={disabled}
      id="due-date"
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
    const subheader = (
      <div>
        {tag}
        Due to: {dueDate}
      </div>
    )

    return (
      <form noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton onClick={this.edit}>
                { this.state.editing ? <CheckCircle color="primary" />  : <Create /> }
              </IconButton>
            }
            title={title}
            subheader={subheader}
          />
          <CardContent>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                disabled={disabled}
                id="name"
                label="Website URL"
                className={classes.textField}
                value={this.state.siteURL}
                onChange={this.handleChange('siteURL')}
                margin="normal"
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Skills requested</InputLabel>
              <Select
                disabled={disabled}
                value={this.state.skils}
                onChange={this.handleChange('skils')}
                inputProps={{
                  name: 'skils',
                  id: 'skils',
                }}
              >
                <MenuItem value={0}>
                  <em>Any</em>
                </MenuItem>
                <MenuItem value={1}>Design</MenuItem>
                <MenuItem value={2}>Development</MenuItem>
                <MenuItem value={3}>Design and development</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <TextField
                disabled={disabled}
                id='client'
                label="Client information"
                multiline
                value={this.state.client}
                onChange={this.handleChange('client')}
                className={classes.textarea}
                margin="normal"
              />
            </FormControl>

            <FormControl className={classes.textareaControl}>
              <TextField
                disabled={disabled}
                id='description'
                label="Project description"
                multiline
                rows="2"
                value={this.state.description}
                onChange={this.handleChange('description')}
                className={classes.textareaField}
                margin="normal"
                fullWidth
              />
            </FormControl>
          </CardContent>
        </Card>
      </form>
    );
  }
}

VitalBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VitalBlock);
