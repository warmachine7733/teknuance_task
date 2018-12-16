import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import blue from '@material-ui/core/colors/blue'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
}

class newUserDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      empId: '',
      description: ''
    }
    this.handleName = this.handleName.bind(this)
    this.handleId = this.handleId.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue)
 
  }
  handleAdd = () => {
    this.props.onClose(this.props.selectedValue)
    if (this.state.name !== '') {
      this.props.action.addUser(this.state)
      this.setState({
        name: ''
      })
    }
  }
  handleListItemClick = value => {
    this.props.onClose(value)
  }
  handleName (e) {
    this.setState({
      name: e.target.value
    })
  }
  handleId (e) {
    this.setState({
      empId: e.target.value
    })
  }
  handleDescription (e) {
    this.setState({
      description: e.target.value
    })
  }

  render () {
    const { classes, onClose, selectedValue, ...other } = this.props

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby='simple-dialog-title'
        {...other}
      >
        <DialogTitle id='form-dialog-title'>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label='name'
            type='name'
            fullWidth
            onChange={this.handleName}
          />
          <br />
          <TextField label='id' type='id' fullWidth onChange={this.handleId} />
          <TextField
            label='description'
            type='description'
            style={{ height: '100px', padding: '40px 0px 0px' }}
            fullWidth
            onChange={this.handleDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleAdd} color='primary'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

newUserDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
}

const newUserDialogWrapped = withStyles(styles)(newUserDialog)

export default newUserDialogWrapped
