import React from 'react'
import UserDetails from './userDetails'
import '../layouts.css'
import { connect } from 'react-redux'
import * as BodyActions from './action'
import { bindActionCreators } from 'redux'

class BodyContainer extends React.Component {
  render () {
    return <UserDetails {...this.props} />
  }
}
const mapStateToProps = state => {
  return {
    userDetails: state.body.userDetails
  }
}

const mapDispatchToProps = dispatch => ({
  bodyAction: bindActionCreators(BodyActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer)
