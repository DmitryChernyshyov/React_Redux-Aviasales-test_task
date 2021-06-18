import API from '../../api'
import {
  FETCH_TICKET_START,
  FETCH_TICKET_SUCCESS,
  FETCH_TICKET_ERROR, 
  TICKET_SET_STATE, 
  SEARCHID_SET_STATE,
  SORTEDTICKETS_SET_STATE,
  STOPFETCH_SET_STATE,
  CHECKFILTERS_SET_STATE,
  CHECKEDTICKET_SET_STATE

} from './actionsTypes'

// получание searchId от сервера для дальнейшего запроса 
export function fetchTicket() {
  return async dispatch => {
    dispatch(fetchTicketStart())
    API.get(`/search`)
    .then((Response)=>{
    const searchId=(Response.data.searchId)
    dispatch(searchIdSetState(searchId))
    }).catch((e)=>dispatch(fetchTicketError(e)))
    dispatch(fetchTicketSuccess())
  }
}
export function sidebarcheckhaldle(){

}
/// отправляем запросы пока не придёт stop true и обновляем state (привязана к state в useEffect)
export function fetchTicketBySearchId(searchId,stopfetch) {
  return async dispatch => {
    dispatch(fetchTicketStart())
    if(!stopfetch){
      const getpartsofticket = async()=>{
        let response = await API.get(`/tickets?searchId=${searchId}`).catch((error)=>{
                  error.response?
                  error.response.status!==404?getpartsofticket():dispatch(fetchTicketError(error))
                  :dispatch(fetchTicketError(error));
        })
        if(response){
        let ticketpart =  response.data;
        dispatch(TicketSetState([...ticketpart.tickets]));
        if (ticketpart.stop){
          dispatch(stopFetch());
        }
        }      
      }
    getpartsofticket(); 
    }
  }
}
export function ticketFilter(tickets,typeofsort){
  return dispatch => {
    typeofsort !== "faster"?
    dispatch(sortedTicktetsSetState(tickets.sort((a,b)=>a['price']-b['price']).slice(0,5)))
    :dispatch(sortedTicktetsSetState(tickets.sort((a,b)=>(a['segments']['0']['duration']+a['segments']['1']['duration'])-(b['segments']['0']['duration']+b['segments']['1']['duration'])).slice(0,5)))
  }
}
// функция фильтрации по кол пересадок 
// есть массив с количеством пересадок выбранных пользователем и если количество совпадает с пересадками в билете то выводим 
// соответсвенно если чекбокс chechek false то удаляем из массива фильтр
// не идельно но работает будет время можно arrayofcheked  избежать и уменьшить кол принимаемых значений
export function checkfilters(checked,id,ticket,checkedfilters,typesort) {
  let arrayofcheked = []
  if(checked){
    arrayofcheked = [...checkedfilters,...id]
  }else{
    id.length === 4? arrayofcheked = []
    :arrayofcheked = [...checkedfilters.map((item)=>{
      return item === id[0]? null: item
    })]
 
  }
  let sorted = ticket.filter((item)=>{
    if(arrayofcheked.indexOf(item.segments[0].stops.length) !== -1 && arrayofcheked.indexOf(item.segments[1].stops.length) !== -1 ){
      return(
          item
      )
    }})
  return dispatch => {
    dispatch(checkfiltersSetState(arrayofcheked))
    dispatch(sheckedtickets(sorted))
    dispatch(ticketFilter(sorted,typesort))
  }
}

export function searchIdSetState(searchId){
  return {
    type: SEARCHID_SET_STATE,
    searchId
  }
}
export function fetchTicketSuccess() {
  return {
    type: FETCH_TICKET_SUCCESS,
  }
}

export function fetchTicketStart() {
  return {
    type: FETCH_TICKET_START
  }
}

export function fetchTicketError(e) {
  return {
    type: FETCH_TICKET_ERROR,
    error: e
  }
}

export function TicketSetState(ticket) {
  return {
    type: TICKET_SET_STATE,
    ticket
  }
}

export function sortedTicktetsSetState(sortedtickets) {
  return {
    type: SORTEDTICKETS_SET_STATE,
    sortedtickets
  }
}
export function stopFetch() {
  return {
    type: STOPFETCH_SET_STATE
  }
}

export function checkfiltersSetState(checkedfilters) {
  return {
    type: CHECKFILTERS_SET_STATE,
    checkedfilters
  }
}
export function sheckedtickets(checkedticket) {
  return {
    type: CHECKEDTICKET_SET_STATE,
    checkedticket
  }
}
