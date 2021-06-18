import React from 'react'
import { connect } from 'react-redux'
import {fetchTicket, fetchTicketBySearchId, ticketFilter, sheckedtickets} from '../../store/actions/ticket'
import Ticket from './ticket/ticket'
import Loader from '../UI/loader/loader'
const Tickets = props =>{

// вызов первого запроса на searcid
    React.useEffect(() => {
        props.fetchTicket()
    }, [])

// второй запрос должен повторяться пока не вернеться stop: true 
    React.useEffect(() => {
        props.fetchTicketBySearchId(props.searchId,props.stopfetch)
    }, [props.searchId,props.ticket])

//вызов для первоначальной сортировки после загруки всех данных
    React.useEffect(() => {
        props.ticketsFilter(props.ticket,props.typesort);
        props.sheckedtickets(props.ticket);
    }, [props.stopfetch])
    
    return(
        <div className="wrapper-tickets">       
            {!props.loading? props.sortedtickets.map((item,index)=>{
                return(
                    <Ticket key={index} item={item}/>
                )
            }):<Loader/>}
        </div>
    )
}

function mapStateToProps(state){
    return{
        ticket: state.ticket.tickets,    
        loading: state.ticket.loading,
        searchId: state.ticket.searchId,
        stopfetch: state.ticket.stopfetch,
        sortedtickets: state.ticket.sortedtickets,
        typesort: state.ticket.typesort
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchTicket: ()=>dispatch(fetchTicket()),
        sheckedtickets: (ticket)=>dispatch(sheckedtickets(ticket)),
        fetchTicketBySearchId: searchId =>dispatch(fetchTicketBySearchId(searchId)),
        ticketsFilter: ticket =>dispatch(ticketFilter(ticket))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tickets)