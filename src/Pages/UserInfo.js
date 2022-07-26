import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


import Avatar from '@mui/material/Avatar'

import userBg from '../img/clark-van-der-beken-OvaPxvvFYNo-unsplash 1.png'

import { stringAvatar } from '../helper/avatarName'

import Dashboard from '../components/UI/Dashboard/Dashboard'
import NavBar from '../components/UI/NavBar/NavBar'
import { Loader } from '../components/UI/Loader/Loader'

const UserInfo = () => {
  const { id } = useParams()

  const { data: user, isSuccess, isError, error, isLoading } = useQuery(['user', id], async () => {

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    return data
  }, {
    staleTime: 300000
  })

  return (
    <>
      <Dashboard/>
      <div style={{ display: 'inline-table', backgroundColor: 'white', width: '100vw' }}>
        <NavBar/>
        <div className="user-info_wrapper">
          {
            isSuccess &&
              <>
                <div style={{ position: 'relative', padding: 30, display: 'block', height: 270 }}>
                  <img src={userBg} width={'100%'} alt=""/>
                  <Avatar style={{
                    width: 145,
                    height: 145,
                    border: '4px solid white',
                    zIndex: 101,
                    margin: '0 auto',
                    top: -85,
                    left: 0
                  }} {...stringAvatar(`${user.name}`)} />
                  <div style={{ position: 'relative', top: '-65px' }}>
                    <h2 style={{
                      fontFamily: 'Mulish',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '36px',
                      lineHeight: '45px',
                      letterSpacing: '0.4px',
                      color: '#252733',
                      margin: 0
                    }}>{user.name}</h2>
                    <h3 style={{
                      fontFamily: 'Mulish',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '30px',
                      letterSpacing: '0.4px',
                      color: '#797A84',
                      margin: 0
                    }}>{user.company.bs}</h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    margin: '0 -30px 0 -30px',
                    padding: '0 0 45px 45px',
                    background: 'white'
                  }}>
                    <h1>Address</h1>
                    <h2>{user.address.street}, {user.address.suite}</h2>
                    <h2>{user.address.city}</h2>
                    <h1>Phone</h1>
                    <h2>{user.phone}</h2>
                    <h1>Website</h1>
                    <h2>{user.website}</h2>
                  </div>
                </div>
              </>
          }
        </div>
        {
          isLoading && <Loader/>
        }
        {
          isError && <div style={{ color: 'red' }}>Error: {error.message}</div>
        }
      </div>
    </>
  )
}

export default UserInfo
