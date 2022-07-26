import './App.css'
import { Routes, Route } from 'react-router'

import { BrowserRouter as Router, Navigate } from 'react-router-dom'

import UserInfo from './Pages/UserInfo'
import UsersPage from './Pages/UsersPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/user/:id" element={<UserInfo/>}/>
          <Route
            path="*"
            element={<Navigate to="/users"/>}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
