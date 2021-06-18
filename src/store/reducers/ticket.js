import {
  TICKET_SET_STATE,
  FETCH_TICKET_ERROR,
  FETCH_TICKET_SUCCESS,
  FETCH_TICKET_START,
  SEARCHID_SET_STATE,
  SORTEDTICKETS_SET_STATE,
  STOPFETCH_SET_STATE,
  CHECKFILTERS_SET_STATE,
  CHECKEDTICKET_SET_STATE
  } from '../actions/actionsTypes';
  
  const initialState = {
    tickets: [],
    sortedtickets: [],
    checkedticket: [],
    loading: false,
    error: null,
    searchId: null,
    stopfetch: false,
    checkedfilters: [],
    typesort: "lowprice"
  }
  
  export default function ticketReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_TICKET_START:
        return {
          ...state, loading: true
        }
      case FETCH_TICKET_SUCCESS:
        return {
          ...state, loading: false
        }
      case FETCH_TICKET_ERROR:
        return {
          ...state, loading: false, error: action.error
        }
      case TICKET_SET_STATE:
        return {
          ...state, tickets: [...state.tickets,...action.ticket]
        }
      case SEARCHID_SET_STATE:
        return {
          ...state, searchId: action.searchId
        }
      case SORTEDTICKETS_SET_STATE:
        return{
          ...state, sortedtickets: action.sortedtickets
        }
      case STOPFETCH_SET_STATE:
        return{
          ...state, stopfetch: true
        }
      case CHECKFILTERS_SET_STATE:
        return{
          ...state, checkedfilters: action.checkedfilters
        }
      case CHECKEDTICKET_SET_STATE:
        return{
          ...state, checkedticket: action.checkedticket
        }
      default:
        return state
    }
  }