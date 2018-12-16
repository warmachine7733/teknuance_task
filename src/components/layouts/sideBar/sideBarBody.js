import React from 'react'
import '../layouts.css'
import './sideBar.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Checkbox from '@material-ui/core/Checkbox'

class SideBarBody extends React.Component {
  constructor () {
    super()
    this.state = {
      masterCheckbox: false
    }
  }
  masterCheckboxHandle (isChecked) {
    this.props.action.checkedAll(isChecked)
    this.setState({
      masterCheckbox: !this.state.masterCheckbox
    })
  }
  handleReset () {
    this.props.action.resetAll(this.props.checkedArr, this.props.people,this.props.isChecked)
    if (this.state.masterCheckbox === true) {
      this.setState({
        masterCheckbox: false
      })
    }
  }
  render () {
    return (
      <div>
        <div className='sideBarHeader'>
          <List className='people'>
            <ListItem>
              <Checkbox
                checked={this.state.masterCheckbox}
                onChange={(event, isChecked) =>
                  this.masterCheckboxHandle(isChecked)
                }
              />

              <ListItemAvatar>
                <Avatar alt='Bill murray' />
              </ListItemAvatar>
              <ListItemText primary='people' />
              <i
                className='material-icons deleteBox'
                onClick={() => this.handleReset()}
              >
                delete
              </i>
            </ListItem>
          </List>
        </div>
        <div className='sideBarBody'>
          {this.props.people.map((person, index) => {
            return (
              <List className='user' key={index}>
                <ListItem>
                  <Checkbox
                    checked={this.props.checkedArr.includes(index)}
                    value={person.name}
                    onChange={(event, isChecked) =>
                      this.props.action.checkedData(
                        this.props.people.indexOf(person),
                        isChecked
                      )
                    }
                  />

                  <ListItemAvatar>
                    <Avatar
                      alt='Remy Sharp'
                      src={
                        person.img === undefined
                          ? 'http://www.fillmurray.com/200/200'
                          : person.img
                      }
                      onClick={() => this.props.bodyAction.viewDetails(person)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={person.name}
                    onClick={() => this.props.bodyAction.viewDetails(person)}
                  />
                </ListItem>
              </List>
            )
          })}
        </div>
      </div>
    )
  }
}

export default SideBarBody
