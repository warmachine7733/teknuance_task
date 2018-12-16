import React from 'react'
import './layouts.css'
import SimpleDialogWrapped from './newUser'
import * as SidebarActions from './sideBar/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

let style = {
  fontSize: '48px',
  color: 'lightblue'
}
class Header extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = value => {
    this.setState({  open: false })
  }

  render () {
    return (
      <div className='header'>
        <div className='buttonContainer'>
          <i
            className='material-icons addButton'
            style={style}
            onClick={this.handleClickOpen}
          >
            add
          </i>
        </div>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          {...this.props}
        />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(SidebarActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Header)
