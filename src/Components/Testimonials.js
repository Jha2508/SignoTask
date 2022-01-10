import React from 'react'

function Testimonials() {
    return (
        <div className='row marg100'>
            <div className='col-6 col-md'>
            <iframe
            id='capsule'
  src="https://www.youtube.com/embed/ZKXareXDebM?autoplay=1&mute=1"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen/>
  <span className='testimCircle'></span>
            </div>
            <div className='col-6 col-md'>
                <div className='ourclientitle margright'>
                Great Digital Product Agency since 2016
                </div>
                <div className='ourclientdesc'>
                Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements. 
                </div>
            </div>
        </div>
    )
}

export default Testimonials
