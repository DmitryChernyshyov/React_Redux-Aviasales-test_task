import { useState } from 'react';
import { connect } from 'react-redux'
import {ticketFilter} from '../../store/actions/ticket'
import './style.css'
const Filters = props =>{
    const [active,setactive] = useState(true);
    return(
        <div className="filter_wrapper">
            <div className={active? 'active filter__lowprice':"filter__lowprice"} onClick={()=>{props.ticketFilter(props.checkedticket,"lowprice"); setactive(true)}}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className={!active? 'active filter__faster': "filter__faster"} onClick={()=>{props.ticketFilter(props.checkedticket,"faster");  setactive(false)}}>САМЫЙ БЫСТРЫЙ</div>
        </div>
    )
}
function mapStateToProps(state){
    return{
        checkedticket: state.ticket.checkedticket,    
        typesort: state.ticket.typesort
    }
}
function mapDispatchToProps(dispatch){
    return{
        ticketFilter: (tickets,typesort)=>dispatch(ticketFilter(tickets,typesort))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filters)