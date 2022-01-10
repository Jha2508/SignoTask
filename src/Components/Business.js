import React from 'react'
import { RiWallet3Fill } from "react-icons/ri";
import{GiCubeforce} from "react-icons/gi"
import{FaLaptopCode} from "react-icons/fa"
import {VscGraph} from "react-icons/vsc"
function Business() {
    return (
        <div className='row marg300 margright commercialtxt'>
            <div className='col-4 col-md'>
                <div className='ourclientitle'>
                <span className='ourClientrect'></span>
                How can we help your Business ?
                </div>
                <div className='ourclientdesc'>
                We build readymade websites, mobile applications, and elaborate online business services.
                </div>
                <span className='newsPolka' style={{
                marginLeft:'40px',
                height:'180px',
                width:'500px',
                zIndex:-10,
                position:'absolute',
                marginTop:'100px'
                }}      ></span>
            </div>
            <div className='col-4 col-md alignR'>
            <center>
                <div className='row '>
                <div className="card" style={{width: '14rem'}}>
        <GiCubeforce style={{color:'#2639ED'}} className='iconsize'/>
        <span className='backgroundrect' style={{background:'#F1F7FF'}}/>
        <div className="card-body">
          <h5 className="card-title">Business Idea Planning
</h5>
          <p className="card-text">We present you a proposal and discuss niffty-gritty like</p>
      
        </div>
      </div>
                </div>
                <div className='row'>
                <div className="card" style={{width: '14rem'}}>
                <FaLaptopCode style={{color:'#FF007A'}} className='iconsize'/>
        <span className='backgroundrect' style={{background:'#FFF2F8'}}/>
        <div className="card-body">
          <h5 className="card-title">Development Website and App</h5>
          <p className="card-text">Communication protocols apart from engagement models</p>
          
        </div>
      </div>
                </div>
                </center>
            </div>
            <div className='col-4 col-md alignL'><center>
            <span className='BussinessBack'></span>
            <span className='BussinessRing'></span>
                <div className='row'>
                <div className="card" style={{width: '14rem'}}>
                <RiWallet3Fill style={{color:'#FF9900'}} className='iconsize'/>
        <span className='backgroundrect' style={{background:'#FFF7E3'}}/>
        <div className="card-body">
          <h5 className="card-title">Financial Planning System</h5>
          <p className="card-text">Protocols apart from aengage models, pricing billing</p>
          
        </div>
      </div>
                </div>
                <div className='row'>
                <div className="card" style={{width: '14rem'}}>
                <VscGraph style={{color:'#00DA71'}} className='iconsize'/>
        <span className='backgroundrect' style={{background:' #DEFFEE'}}/>
        <div className="card-body">
          <h5 className="card-title">Market Analysis Project
</h5>
          <p className="card-text">Protocols apart from aengage models, pricing billing
</p>
          
        </div>
      </div>
                </div>
                
                </center>
            </div>
            
        </div>
    )
}

export default Business
