import React, { Component } from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core';

export class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;

    return exercise ? exercise : {
      title: '',
      description: '',
      category: ''
    }
  };

  handleChange = name => event => {
    this.setState({
        [name]: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.onSubmit({ id: this.state.title.toLowerCase().replace(/ /g, '-'),
    ...this.state
    })
  };

  render() {
    const { title, description, category } = this.state,
          { categories, onToggle } = this.props
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <br />
        <FormControl>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            value={category}
            onChange={this.handleChange('category')}
            inputProps={{
              name: 'category',
              id: 'category',
            }}
          >
            {categories.map(category =>
              <MenuItem key={category} value={category}>{category}</MenuItem>
            )}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rowsMax="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <br/>
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}>
          {this.props.exercise ? 'Edit' : 'Create'}
        </Button>
        <Button color="primary" variant="raised" onClick={onToggle}>
          Cancel
        </Button>
      </form>
    )
  }
}

export default Form
