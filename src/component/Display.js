import React from 'react';
import image2 from '../2.jpg';
import more from '../more.jpeg';
import twitter from '../twitter.jpeg';
import insta from '../insta.jpeg';
import './Display.css'

const Display = (props) => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='pubgHeading'>
                    <div className='pubgContainer'>
                        <img className='selectedPubg' src={(props.img === null) ? image2 : props.img} alt='' />
                    </div>
                </div>

                <div className='pubgDetails' style={{ color: 'white' }}>
                    <div className='title'>{(props.title === null) ? '༒尺∈ᗩⱣ∋尺༒' : props.title}</div>
                    <span className='itemNumber'>{(props.playerId === null) ? '#86dtdu88' : props.playerId}</span>
                    <span className='ownerMail'>{(props.email === null) ? '@reaperthebestpubgplayer' : props.email}</span>
                </div>

                <div className='ownerLink'>
                    <img src={more} alt='' />
                </div>

                <div className='ownerLink'>
                    <img src={twitter} alt='' />
                </div>

                <div className='ownerLink'>
                    <img src={insta} alt='' />
                </div>

            </div>

        </div>
    )
}
export default Display

