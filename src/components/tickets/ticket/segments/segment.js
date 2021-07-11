
export default props =>{
    return(
        <div className="ticket__data__wrapper">
            <div className="ticket__data">
                <div className="ticket__data__item">
                    <p className="ticket__data__item__grey">{props.segments.origin} - {props.segments.destination}</p>
                    <p>
                        {/* Форматирование даты и вычесление времени прибывания*/}
                        {
                            new Date(props.segments.date).getHours() + 
                            ":" +
                            new Date(props.segments.date).getMinutes() + 
                            "-" +
                            new Date(
                                new Date(props.segments.date).setHours(
                                    new Date(props.segments.date).getHours() + Math.ceil(props.segments.duration / 60)
                                    )
                            ).getHours() + 
                            ":" +
                            new Date(
                                new Date(props.segments.date).setMinutes(new Date(props.segments.date).getMinutes() + props.segments.duration)
                            ).getMinutes()
                        }
                    </p>
                </div>
            </div>
            <div className="ticket__data">
                <div className="ticket__data__item">
                    <p className="ticket__data__item__grey">В ПУТИ</p>
                    <p>
                        {Math.ceil(props.segments.duration/60)}ч. 
                        {Math.floor(props.segments.duration/60)}м.
                    </p>
                </div>
            </div>
            <div className="ticket__data">
                <div className="ticket__data__item">
                    <p className="ticket__data__item__grey">
                        {props.segments.stops.length > 1? 
                        <span>{props.segments.stops.length} ПЕРЕСАДКИ</span>
                        : props.segments.stops.length !== 0? 
                        <span>1 ПЕРЕСАДКА</span>:
                        <span>БЕЗ ПЕРЕСАДОК</span>}
                    </p>
                    <p>{props.segments.stops.join()}</p>
                </div>
            </div>
        </div>
    )
}