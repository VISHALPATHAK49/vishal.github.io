import React from 'react'
import PropTypes from 'prop-types'
import img from "../Component/pic-4.jpg"

function Header(props) {
    return (
     <div className="main">
        
        <img src={img} alt=""  className="boy"/>
        <div class="right-section">
                <div class="description-text">
                    <h1>Vishal Pathak</h1>
                    <p>
                        Hey All !!! I am glad you landed on my portfolio.
                        I am a <span className='span-p'>Frontend Developer</span> and pursuing 
                        Software Engineering from Delhi Technological University.
                        Have a look at my projetcs.
                    </p>
                </div>
                <span className='span-btn'><a href="/projects"></a></span>           
             </div>
        </div>
       
    )
}

Header.propTypes = {

}

export default Header

