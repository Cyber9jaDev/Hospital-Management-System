import { CLOSE_MODAL, LOGIN_BEGINS, LOGIN_ERROR, LOGIN_SUCCESS, OPEN_FILTER_MODAL, OPEN_MEDICINE_DETAILS_MODAL, OPEN_MODAL, OPEN_PRESCRIPTION_DETAILS_MODAL, REGISTRATION_BEGINS, REGISTRATION_ERROR, REGISTRATION_SUCCESS, SET_CURRENT_USER } from "./Actions"

// export default function reducer (state, { type, payload }){
export default function reducer (state, { type }){
  if(type === REGISTRATION_BEGINS){
    return{...state,isLoading: true }
  }
  if(type === REGISTRATION_SUCCESS){
    return {...state,  isLoading: false }
  }
  if(type === REGISTRATION_ERROR){
    return{...state,  isLoading: false }
  }
  if(type === LOGIN_BEGINS){
    return{...state,  isLoading: true }
  }
  if(type === LOGIN_SUCCESS){
    return {...state,  isLoading: false }
  }
  if(type === LOGIN_ERROR){
    return{...state, isLoading: false }
  }
  if(type === SET_CURRENT_USER){
    return {...state, currentUser: {  } }
  }
  if(type === OPEN_MODAL){
    return{...state, modalIsOpen: true }
  }
  if(type === CLOSE_MODAL){
    return{
      ...state, 
      modalIsOpen: false,
      prescriptionDetailsPopoverModalIsOpen: false,
      medicineDetailsPopoverModalIsOpen: false,
      filterModalIsOpen: false,
    }
  }

  if(type === OPEN_PRESCRIPTION_DETAILS_MODAL){
    return{
      ...state, 
      modalIsOpen: true, 
      prescriptionDetailsPopoverModalIsOpen: true 
    }
  }

  if(type === OPEN_MEDICINE_DETAILS_MODAL){
    return{
      ...state, 
      modalIsOpen: true, 
      medicineDetailsPopoverModalIsOpen: true 
    }
  }
  if(type === OPEN_FILTER_MODAL){
    return{
      ...state, 
      modalIsOpen: true, 
      filterModalIsOpen: true 
    }
  }
}