import React from "react";
import Card from 'react-bootstrap/Card';
import '../Style/cards.css';

function CardItemFirst(props) {

    return (
        <>
            <div className="all-cards">
                <div className="card-items">
                    <img src={props.imgsrc} alt="card-pic" className={`${props.cardother} card-img`} />
                </div>
                <div className="card-info">
                    <h3 className="card-category"> {props.title}</h3>
                    <div className="card-width">
                        <span className="card-cutdolor">{props.cutdolor}</span>
                        <span className="card-bolddolor">{props.bolddolor}</span>

                        <span className="card-dolor">{props.dolor}</span>
                    </div>
                    <a href={props.lonk} target="_blank"></a>
                </div>
            </div>

        </>
    )
}

export default CardItemFirst;