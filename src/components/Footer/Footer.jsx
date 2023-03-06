import React from 'react'

import { FooterCon, FooterList } from './Styled'

function Footer() {
  return (
    <FooterCon>
        <p>Profile Creator</p>
        <FooterList>
            <ul>
                <li><a href="#">Noppadon Chantarangkul</a></li>
                <li><a href="#">6410110242</a></li>
                <li><a href="#">22/04/2545</a></li>
                <li><a href="#">IG : _nopppppppppppppp_</a></li>
            </ul>
            <ul>
                <li><a href="#">Poom Promsena</a></li>
                <li><a href="#">6410110399</a></li>
                <li><a href="#">27/09/2545</a></li>
                <li><a href="#">IG : _psn.pp_</a></li>
            </ul>
            <ul>
                <li><a href="#">Jatnipat Sangkanee</a></li>
                <li><a href="#">6410110081</a></li>
                <li><a href="#">15/12/2545</a></li>
                <li><a href="#">IG : Jatnipat Sangkanee</a></li>
            </ul>
         
        </FooterList>
        <a href="#" style={{ padding: "1rem 2rem", border: "1px solid #737373", borderRadius: "5px", display: "inline-block", marginBottom: "1rem", color: "#737373", textDecoration: "none" }}>back to Top</a>
     
    </FooterCon>
  )
}

export default Footer