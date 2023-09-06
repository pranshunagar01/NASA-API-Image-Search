import React from 'react'
import styles from './header.module.css'

function Header() {
  return (
    <div style={{height:"78px", borderBottom:"solid 1px", fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#121316", color: "rgba(255,255,255,0.8)", fontWeight:"700"}}>
        API Image Search
    </div>
  )
}

export default Header