import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function navbar() {
    return (
        <div className='nav'>
           <img id="logo" src='https://opensea.io/static/images/logos/opensea.svg' alt=''></img>
            <div id='web-name'><h2 className='open'>Open Sea</h2></div>
            <input className='search-bar' type="text" name="search" placeholder="  Search NFT"/>
            <div className='nav-choices'>
                <h4 className='nav-explore'>Explore</h4>
                <h4 className='nav-explore'>Stats</h4>
                <h4 className='nav-explore'>Resources</h4>
                <h4 className='nav-explore'>Night Mode</h4>
            </div>
        <div className='nav-icons'>
            <AccountCircleOutlinedIcon className="person-icon"/>
            <AccountBalanceWalletIcon className='person-icon wallet'/>
        </div>
           
           <div class="ham">
            <MenuIcon className="hamburger" style={{fontSize: 'xx-large'}}/>
            </div>
        </div>
    )
}
