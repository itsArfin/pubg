import React, { useState } from 'react';
import CollectionCard from './CollectionCard';
import './CollectionCard.css';
import Display from './Display';

const CollectionCradContainer = () => {

    const [item, setitem] = useState({ id: null, name: null, image: null, playerid: null, email: null })

    function cardClicked(id, name, image, playerid, email) {

        //Setting the items passed from collection card
        setitem({
            id: id,
            name: name,
            image: image,
            playerid: playerid,
            email: email
        });
        // console.log('You clicked image:::', id, name, image, playerid, email);
    }
    
    return (
        <>
            <div>
                <Display title={item.name} playerId={item.playerid} img={item.image} email={item.email} />
            </div>
            <div className='CollectionCradContainer'>
                <CollectionCard cardWasClicked={cardClicked} />
            </div>
        </>
    )
}

export default CollectionCradContainer;
