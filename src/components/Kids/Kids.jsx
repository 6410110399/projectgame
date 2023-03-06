import React from 'react'
import styled from 'styled-components'


import kidsImg from '../../assets/OIP.jpg'

import { KidsCon } from './Styled'

function Kids() {
  return (
    <KidsCon>
        <div style={{ width: '100%' }}>
            <img width="50%" src={kidsImg} alt="" />
        </div>
        <div  style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <div>
                <h3 style={{ fontSize: '3rem' }}>กติกาการเล่น Blackjack </h3>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                        <p style={{color: "red"}}>กติกาเกม</p>ไพ่แบล็คแจ็ค ผู้เล่นต้องจั่วไพ่ให้ได้แต้มเท่ากับ 21 หรือใกล้เคียงถึงจะเป็นผู้ชนะ ถ้าเกิน 21 หรือแต้มน้อยกว่าเจ้ามือก็จะเป็นผู้แพ้ !!
                </p>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                <p style={{color: "red"}}>วิธีการเล่น</p>เจ้ามือแจกไพ่ให้ตัวเองและผู้เล่นคนละ 2ใบจากนั้นสามารถกด Hit เพื่อจั่วเพิ่มเมื่อไม่พอใจแต้มที่เรามี ถ้ามั่นใจว่าไพ่ในมือว่าได้ 21 
                หรือใกล้เคียงที่สุดแล้วกด Stand เพื่อหยุดจั่วและยืนยัน จากนั้นเจ้ามือจะเปิดไพ่ถ้าเราได้แต้มมากกว่าและไม่เกิน 21แต้ม เราก็จะเป็นผู้ชนะเกมนี้ เราสามารถกด Deal 
                เพื่อเล่นใหม่หรือเล่นต่อได้ ถ้าชนะแต้มจะ +1 แต่ถ้าแพ้แต้มจะ -1 

                </p>
            </div>
        </div>
    </KidsCon>
  )
}

export default Kids