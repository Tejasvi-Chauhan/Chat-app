import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Join from './components/join/Join'
import Chat from './components/chat/Chat'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Join/>} />
          <Route path="/about" element={<Chat/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
