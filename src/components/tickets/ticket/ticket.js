import React from 'react'
import Segment from './segments/segment'
import './style.css'
export default props => {
    return(
            <div className="ticket">
                <div className="ticket__header">
                    <div className="ticket__price">
                        {/* не лучший способ раставить пробелы каждые 3 симлова с конца но какой есть)*/}
                        {props.item.price.toString().split("").reverse().join().replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').split("").reverse().join("")} Р
                    </div>
                    <div className="ticket__logo">
                        <img src= {`//pics.avs.io/99/36/${props.item.carrier}.png`} alt="" />
                    </div>
                </div>
                {/* вывод данных о полёте туда и обратно по строкам segment всегда массив с 2мя элементами*/}
                {props.item.segments.map((segments,index)=>{
                    return(<Segment key={index} segments={segments}/>)
                })}
            </div>
    )
}