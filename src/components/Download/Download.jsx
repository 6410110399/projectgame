import React from 'react'

import comImg from '../../assets/1211.jpg'
import { DownloadCon } from './Styled'

function Download() {
  return (
    <DownloadCon>
        <div style={{ width: '100%' }}>
            <img width="100%" src={comImg} alt="" />
        </div>
        <div style={{ width: "100%", position: 'relative', }}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-60px' }}>

                    <p>
                         <br />
                        
                    </p>
                </div>
               
            
        </div>
        <div style={{ width: "100%", display: 'flex', alignItems: 'center' }}>
            <div>
                <h3 style={{ fontSize: '3rem' }}>สเปคขั้นต่ำ</h3>
                <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
                </p>
                <p>memory 16 GB.</p>
                    <p>
                    Graphics Card: NVIDIA GeForce GTX 980</p>
                    <p>
                    CPU: Intel Core i5-6600</p>
                    <p>
                    File Size: 85 GB</p>
                    <p>
                    OS: Windows 10</p>
                
                    
            
            </div>
        </div>
    </DownloadCon>
  )
}

export default Download