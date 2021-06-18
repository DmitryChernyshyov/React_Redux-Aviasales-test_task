import { connect } from 'react-redux'
import {ticketFilter} from '../../store/actions/ticket'
import './style.css'
const Filters = props =>{
    return(
        <div className="filter_wrapper">
            <div className="filter__lowprice" onClick={()=>props.ticketFilter(props.checkedticket,"lowprice")}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className="filter__faster" onClick={()=>props.ticketFilter(props.checkedticket,"faster")}>САМЫЙ БЫСТРЫЙ</div>
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