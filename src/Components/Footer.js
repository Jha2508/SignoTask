import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'
function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row commercialtxt">
          <div className="col-3 col-md customfont1">
          <div>A+ Studio</div>
            <div className="text-muted size2">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</div>
            <div><FaFacebook style={{color:'#3B5998'}} className='handle'/><AiFillTwitterCircle style={{color:'#55ACEE'}} className='handle'/><AiFillLinkedin style={{color:'#007AB9'}} className='handle'/></div>
          </div>
          <div className="col-3 col-md " style={{paddingLeft:'40px'}}>
            <h5 className='headfoot'>What We Do</h5>
            <ul className="list-unstyled text-small headfootoptions">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Web Design</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">App Design</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Social Media Manage</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">MArket Analysis Project</a></li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5 className='headfoot'>Company</h5>
            <ul className="list-unstyled text-small ">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">About Us</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Career</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Become Investor</a></li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5 className='headfoot'>Support</h5>
            <ul className="list-unstyled text-small ">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">FAQ</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Policy</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Business</a></li>
            </ul>
          
          
          
          </div>
          <div className="col-3 col-md">
            <h5 className='headfoot'>Support</h5>
            <ul className="list-unstyled text-small ">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">WhatsApp</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Support 24</a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer
