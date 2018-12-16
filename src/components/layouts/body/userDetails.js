import React from 'react'
import './index.css'
let UserDetails = props => {
  return (
    <div className='card'>
      {props.userDetails !== undefined ? (
        <div>
          <img
            src={
              props.userDetails.img === undefined
                ? 'http://www.fillmurray.com/200/200'
                : props.userDetails.img
            }
            alt='Avatar'
          />
          <div className='userName'>{props.userDetails.name}</div>
          <div className='empId'>Empid-{props.userDetails.empId}</div>
          <div className='description'>{props.userDetails.description}</div>
        </div>
      ) : (
        <div>noData</div>
      )}
    </div>
  )
}

export default UserDetails
