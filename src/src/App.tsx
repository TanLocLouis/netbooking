import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainWebsite from './MainWebsite'
import SignUp from './SignUp'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWebsite/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
