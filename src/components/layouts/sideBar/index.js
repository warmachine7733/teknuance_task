import React from 'react'

import SideBarBody from './sideBarBody'
import '../layouts.css'
import { connect } from 'react-redux'
import * as SidebarActions from './action'
import * as BodyActions from '../body/action'
import { bindActionCreators } from 'redux'
import { people } from '../../../data'

class SidebarContainer extends React.Component {
  render () {
    return (
      <div className='sideNav'>
        <SideBarBody {...this.props} />
      </div>
    )
  }
  componentDidMount () {
    this.props.action.storeStaticData(people)
    this.props.bodyAction.viewDetails(people[0])
  }
}
const mapStateToProps = state => {
  return {
    people: state.sideBar.people,
    checkedArr:state.sideBar.checkedArr,
    checkBoxState:state.sideBar.checkBoxState,
    isChecked:state.sideBar.isChecked
  }
}

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(SidebarActions, dispatch),
  bodyAction: bindActionCreators(BodyActions, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer)
