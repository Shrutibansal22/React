import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const handleRed=()=>{
   props.handleColorChange('#FF9C73','#FF4545');
  };
  const handleGreen=()=>{
    props.handleColorChange('#7ED4AD','#387F39');
  };
  const handleYellow=()=>{
    props.handleColorChange('#F6E96B','#FFAF00');
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          <div className="flex-container" style={{display:'flex',backgroundColor:'white'}}>
              <div style={{backgroundColor:'red',border: '1px solid red',borderRadius:'50%',margin:'2px',height:'10px',width:'10px' }} onClick={handleRed}></div>
              <div style={{backgroundColor:'green',border: '1px solid green',borderRadius:'50%',margin:'2px',height:'10px',width:'10px'}} onClick={handleGreen}></div>
              <div style={{backgroundColor:'yellow',border: '1px solid Yellow',borderRadius:'50%',margin:'2px',height:'10px',width:'10px'}} onClick={handleYellow}></div>
          </div>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
        </div>
      </div>
    </div>
  </nav>


  )
}
// PropTypes
Navbar.Prototypes={
    title:PropTypes.string,
    aboutText:PropTypes.string
}