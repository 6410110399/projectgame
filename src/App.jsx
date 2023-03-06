import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'

import Kids from './components/Kids/Kids'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      
      <Kids />
      <div style={{ padding: "3rem", background: "#000", color: "#fff", textAlign: "center", borderBottom: "8px solid #222" }}>
        <h3 style={{ fontSize: "3rem", marginBottom: "2rem" }}>คำถามที่พบบ่อย</h3>
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <p style={{ margin: "2rem 0", fontSize: "1.2rem" }}></p>
        
        
      </div>
      <Footer />
    </div>
  )
}

export default App
