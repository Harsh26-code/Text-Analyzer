import React from 'react'

export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.t}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      </ul>
    {/* Pehle ham curly braces laga dia taaki ham JS likh sake phir ham backticks laga dia taaki wo ek string ban jaaye ab jab ham backtick 
    use karte ha then ham dollar laga kar koi v variable use kar sakte ha.Ab variable ke andar ternary operator ha jo ki yeh keh ra 
    ha ki agar props ka mode light h toh usse dark kar do aur agar dark ha toh light kar do. */}
      <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input type="checkbox" className="custom-control-input" onClick={props.toggleMode } id="customSwitches"/>
      <label className="custom-control-label" htmlFor="customSwitches">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
    </div>
  </div>
</nav>

  )
}
