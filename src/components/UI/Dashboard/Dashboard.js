import { NavLink } from 'react-router-dom'

import Logo from '../../img/logo.png'
import Vector from '../../img/Vector.png'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-logo_wrapper">
          <img className="dashboard-logo" src={Logo} alt="logo"/>
          <div className="dashboard-title">
            Dashboard
          </div>
        </div>
        <NavLink to="/users" className={({ isActive }) =>
          'user-btn' + (isActive ? ' user-btn_active' : '')
        } exact="true">
          <img className="list-icon" src={Vector} alt=""/>
          Users
        </NavLink>
      </div>
    </>
  )
}

export default Dashboard
