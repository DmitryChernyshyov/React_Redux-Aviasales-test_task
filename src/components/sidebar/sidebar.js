import './style.css'
import { connect } from 'react-redux'
import {checkfilters} from '../../store/actions/ticket'
 const Sidebar = props => {
    return(
        <div className="sidebar">
            <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
            <form action="">
                <label>
                    <input type="checkbox" className="input visually-hidden" onChange={(event)=>{props.checkfilters(event.target.checked,[0,1,2,3],props.ticket,props.checkedfilters)}}/>
                    <span className="checker"></span>
                    Все
                </label>
                <label >
                    <input type="checkbox"  className="input visually-hidden" onChange={(event)=>{props.checkfilters(event.target.checked,[0,0],props.ticket,props.checkedfilters)}}/>
                    <span className="checker"></span>
                    Без пересадок
                </label>
                <label >
                    <input type="checkbox"  className="input visually-hidden" onChange={(event)=>{props.checkfilters(event.target.checked,[1,1],props.ticket,props.checkedfilters)}}/>
                    <span className="checker"></span>
                    1 пересадка
                </label>  
                <label >
                    <input type="checkbox"  className="input visually-hidden"onChange={(event)=>{props.checkfilters(event.target.checked,[2,2],props.ticket,props.checkedfilters)}}/>
                    <span className="checker"></span>
                    2 пересадки
                </label>  
                <label >
                    <input type="checkbox"  className="input visually-hidden"onChange={(event)=>{props.checkfilters(event.target.checked,[3,3],props.ticket,props.checkedfilters )}}/>
                    <span className="checker"></span>
                    3 пересадки
                </label>  
            </form>
         </div>
    )
}

function mapStateToProps(state){
    return{
        ticket: state.ticket.tickets,
        checkedfilters: state.ticket.checkedfilters,
        typesort: state.ticket.typesort
    }
}
function mapDispatchToProps(dispatch){
    return{
        checkfilters: (checked,id,ticket,checkedfilters)=>dispatch(checkfilters(checked,id,ticket,checkedfilters))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)