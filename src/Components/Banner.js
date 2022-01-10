import React from 'react'
import bane from './image 8.png';
import './Banner.css';
function Banner() {
    return (<div>
        
        <div class="row align-items-start">
    <div class="col-6 col-md banet">
    
      <div className='row banehead'>
      A Digital Product Agency
      </div>
      <div className='row banetex'>
      Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
      </div>
      <button type="button" class="btn btn-primary custombtn">Contact Now</button>
      <div className='polka-dot'/>
    </div>
    <div class="col-6 col-md colimg2">
    <span class="colobj"></span>
    <span className='bentdiv'></span>
      <img className='bane' src={bane}/>
    </div>
    
  </div>
  
  </div>
    )
}

export default Banner
