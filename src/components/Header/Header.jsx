import React from 'react'
import logo from '../../assets/logo.png'
import { HeaderCon, NavCon, Menu } from './Styled'

function Header() {
  return (
    <HeaderCon>
        <NavCon>
            <div>
                <img width="20%" src={logo} alt="" />    
            </div>
            <Menu>
                <li><a href='#' style={{ border: '1px solid #fff', borderRadius: '2px', background: 'transparent', color: '#fff', padding: '1rem 1rem' }}>ไทย</a></li>
                <li><a href="#" style={{ background: '#e50914', borderRadius: '3px', color: '#fff', padding: '1rem 1rem' }}>LUV U</a></li>
            </Menu>
        </NavCon>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px', textAlign: 'center' }}>
            <div>
                
                <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'normal', marginTop: '1rem' }}></h3>
                <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'normal', marginTop: '1.5rem' }}></p>
                
            </div>
        </div>
    </HeaderCon>
  )
}

export default Header