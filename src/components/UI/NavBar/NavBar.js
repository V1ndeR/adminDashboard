import Avatar from '@mui/material/Avatar'

import searchIcon from '../../../img/search.png'
import notificationIcon from '../../../img/new.png'
import avatarHeader from '../../../img/m_header.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div style={{
      display: 'flex',
      margin: '20px 30px 0 30px',
      justifyContent: 'space-between',
      alignContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <h2 className="title">
            Users
      </h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ paddingRight: 24, cursor: 'pointer' }} src={searchIcon} alt=""/>
        <img style={{ paddingRight: 24, cursor: 'pointer' }} src={notificationIcon} alt=""/>
        <div style={{ border: '1px solid #DFE0EB', height: 32 }}/>
        <p style={{ paddingRight: 24, paddingLeft: 24 }} className="name-title">Jones Ferdinand</p>
        <Avatar style={{ width: 44, height: 44, cursor: 'pointer' }} alt="Jones Ferdinand" src={avatarHeader} />
      </div>
    </div>
  )
}

export default NavBar
