import React from 'react'
import './OurClient.css'
import logoG from '../Images/logoG.png'
import logoU from '../Images/logoU.png'
import logoA from '../Images/logoa.png'
import logoAM from '../Images/logoAM.png'
function OurClient() {
    return (
        <div className='row marg100'>
            <div className='col-md commercialtxt'>
                <div className='row ourclientitle'>
                    Our Client
                </div>
                <div className='row ourclientdesc'>
                Several selected clients, who already believe in our service.
                </div>
            </div>
            <div className='col-md ' style={{marginLeft:'60px'}}>
                <img className='logo' src={logoG}/>
            </div>
            <div className='col-md'>
            <img className='logo' src={logoA}/>
            </div>
            <div className='col-md'>
            <img className='logo' style={{width: '140px',height: '45px'}} src={logoU}/>
            </div>
            <div className='col-md'>
            <img className='logo' src={logoAM}/>
            </div>
        </div>
    )
}

export default OurClient
