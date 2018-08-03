import React, { Fragment, Component } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form';

class Create extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.props.onCreate(exercise);
    this.handleToggle();
  }

  render () {
    const { open } = this.state,
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
            <Form
              categories={categories}
              onSubmit={this.handleFormSubmit}
              onToggle={this.handleToggle}
              />
          </DialogContent>
        </Dialog>

    </Fragment>
    )
  }

}

export default Create;
