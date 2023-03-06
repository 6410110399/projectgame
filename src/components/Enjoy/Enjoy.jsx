import React from 'react'
import tvImg from '../../assets/tv.png'

import { EnjoyCon } from './Styled'

function Enjoy() {
  return (
    <EnjoyCon>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div>
                <h3 style={{ fontSize: "3rem", color: "#fff" }}>Link Downloads</h3>
                <p style={{ fontSize: "1.5rem", color: "#fff", marginTop: "1rem"}}>
                    <br />
                    <a href="https://drive.google.com/file/d/1dKmiCbk7-iivvwphmec3EhdqUsiQF0dG/view?usp=sharing ">Link Download Blackjackgame</a><br />
                    
                </p>
            </div>
        </div>
        <div style={{ position: 'relative', width: "100%" }}>
            <img style={{ position: 'relative', zIndex: '1', width: "100%" }} src={tvImg} alt="" />

        </div>
    </EnjoyCon>
  )
}

export default Enjoy