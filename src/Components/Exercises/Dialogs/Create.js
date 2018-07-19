import React, { Fragment, Component } from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      category: ''
    }
  }
  
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  
  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: event.target.value
      }
    });
  };
  
  handleSubmit = () => {
    const {exercise} = this.state
    this.props.onCreate({...exercise})
    
    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        category: ''
      }
    })
  }
  
  render () {
    const { open, exercise: { title, description, category} } = this.state,
          { categories } = this.props     
          
    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
            < AddIcon />            
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          
        >
          <DialogTitle id="form-dialog-title">Add a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form>
              <TextField
              label="Title"
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
              />
              <br/>
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
              <br/>
              <TextField
                multiline
                rowsMax="4"
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised" onClick={this.handleToggle}>
              Cancel
            </Button>
            <Button color="primary" variant="raised" onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      
    </Fragment>
    )
  }
  
}

export default Create;
