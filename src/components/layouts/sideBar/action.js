import { viewDetails } from '../body/action'

export const storeStaticData = data => {
  return {
    type: 'STORE_STATIC_DATA',
    data
  }
}
export const addUser = data => {
  return {
    type: 'ADD_USER',
    data
  }
}

export const checkedData = (checkedIndex, isChecked) => {
  return {
    type: 'CHECKED_DATA',
    checkedIndex,
    isChecked
  }
}
export const checkedAll = (isChecked) => {
  return {
    type: 'CHECKED_ALL',
    isChecked
  }
}

export const deleteData = data => {
  return {
    type: 'DELETE_DATA',
    data
  }
}
export const resetAll = (checkedArr, people,isChecked) => {
  return async dispatch => {
    if(isChecked){
    dispatch(deleteData(checkedArr))
    dispatch(
      viewDetails(people.filter((e, i) => checkedArr.indexOf(i) === -1)[0])
    )
  }
}
}
