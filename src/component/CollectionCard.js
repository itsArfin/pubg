import React from 'react';
import './CollectionCard.css';
import price from '../price.png';
import jsonData from './data.json';

const CollectionCard = (props) => {

    return (
        jsonData && jsonData.map((item =>
            <div className='CollectionCard' onClick={(e)=>props.cardWasClicked(item.id, item.name, item.image, item.playerid, item.email)}>
                <img src={item.image} alt=''/>
                <div className='details'>
                    <div className='name'>
                        {item.name}
                        <div className='id'>{item.playerid}</div>
                    </div>
                    <div className='priceContainer'>
                        <img src={price} className='priceImage' alt=''/>
                        <div className='price'>{item.price}</div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default CollectionCard;
