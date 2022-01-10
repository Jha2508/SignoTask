import React from 'react'
import './Navbar.css'
function Navbar() {
    return (<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand customfont1" style={{marginLeft:'40px'}} href="#"><b>A+</b> studio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <span class="navbar-text leftshift">
      <div class="collapse navbar-collapse" id="navbarText">
      
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active customfont2" aria-current="page" href="#">Home</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active customfont2" aria-current="page" href="#">What we Do</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active customfont2" aria-current="page" href="#">Service</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active customfont2" aria-current="page" href="#">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active customfont2" aria-current="page" href="#">Blog</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active customfont2" aria-current="page" href="#">Contact</a>
          </li>
        </ul>
      </div>
      
      </span>
    </div>
  </nav>
    )
}

export default Navbar
