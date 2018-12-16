const initialState = {
  people: [],
  checkedIndex: '',
  isChecked: '',
  checkedArr: [],
}
export const sideBar = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_STATIC_DATA':
      return {
        ...state,
        people: action.data
      }
    case 'ADD_USER':
      return {
        ...state,
        people: state.people.concat(action.data)
      }
    case 'CHECKED_DATA':
      return {
        ...state,
        checkedIndex: action.checkedIndex,
        isChecked: action.isChecked,
        checkedArr: action.isChecked
          ? state.checkedArr.concat(action.checkedIndex)
          : state.checkedArr.splice(
            state.checkedArr.indexOf(action.checkedIndex),
            1
          ) && state.checkedArr,
         
      }
    case 'DELETE_DATA':
      return {
        ...state,
        people: state.people.filter((e,i) => action.data.indexOf(i) === -1),
        checkedArr:""
      }
    case 'CHECKED_ALL':
       return{
         ...state,
         isChecked:action.isChecked,
         checkedArr:action.isChecked? [...state.people.map((val,i)=>i)]:[]
       }  
    default:
      return {
        ...state
      }
  }
}
