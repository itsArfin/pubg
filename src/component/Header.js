import React from 'react'
import './Header.css'
import pubg from '../pubg.jpeg';
import searchIcon from '../search.png';
import themeSwitchIcon from '../switch.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={pubg} className='pubgLogo' alt='' />
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                <input
                    className='searchInput'
                    placeholder='Collection, user or items...'
                />
            </div>

            <div className='headerItems'>
                <p>NEWS</p>
                <p>WEBTOON</p>
                <p>GUIDE</p>
                <p>REDEEM</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchIcon'>
                    <img src={themeSwitchIcon}/>
              </div>
            </div>

            <div className='playButton'>PLAY NOW</div>

        </div>
    )
}

export default Header;
