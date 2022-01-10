import React from 'react'

function NewsLetter() {
    return (
<div className='backgroundnewsletter customAlign marg100'>
<span className='newsCircle'>
</span>
        <div className='row '>
            <div className='col-6 col-md'>
                <div className='ourclientitle'><center>Subscribe NewsLetter</center></div>
                <div className='ourclientdesc'>
                <center>I will update good news and promotion service not spam</center></div>
            </div>
            <div className='col-6 col-md ourclientdesc'>

            <span className='bluebg'/>
            <div className="input-group z100 margleftinput">
        <input type="text" className="custominp" placeholder="Enter your Email Address here.." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-primary custbtn" type="button">Contact Now</button>
      </div>
      
      <span className='newsPolka'></span>
            </div>
            
        </div>
            </div>
    )
}

export default NewsLetter
