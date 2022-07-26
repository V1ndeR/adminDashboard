import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow } from '@mui/material'
import Avatar from '@mui/material/Avatar'

import NavBar from './NavBar'
import './Users.css'

export function stringToColor(string) {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }
}

const Users = () => {

  const { isSuccess, data: users, isLoading, isError, error } = useQuery(['users'], async () => {

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    return data

  }, {
    staleTime: 300000
  })

  return (
    <>

      <div style={{ display: 'inline-table', backgroundColor: 'white', width: '100vw' }}>
        <NavBar/>
        {
          isLoading && <div>Loading...</div>
        }
        <div className="table-wrapper">
          <div className="title-users">All users</div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ paddingLeft: 30 }}>Users details</TableCell>
                  <TableCell align="left">Company name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Distance</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isSuccess && users.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ paddingLeft: 4 }} component="th" scope="row" align="left">
                      <Link to={`/user/${row.id}`} style={{ display: 'flex' }}>
                        <Avatar  style={{ marginRight: 10 }} {...stringAvatar(`${row.name}`)} />
                        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                          {row.name}
                          <p style={{
                            padding: 0,
                            margin: 0,
                            fontFamily: 'Mulish',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0.1px',
                            color: '#C5C7CD'
                          }}>{row.address.city}</p>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell align="left">
                      <div>
                        {row.company.name}
                        <p style={{
                          padding: 0,
                          margin: 0,
                          fontFamily: 'Mulish',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '16px',
                          letterSpacing: '0.1px',
                          color: '#C5C7CD'
                        }}>{row.company.bs}</p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      {row.email}
                      <p style={{
                        padding: 0,
                        margin: 0,
                        fontFamily: 'Mulish',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0.1px',
                        color: '#C5C7CD'
                      }}>{row.website}</p>
                    </TableCell>
                    <TableCell align="left">
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#29CC97',
                        borderRadius: 100,
                        width: 76,
                        height: 24
                      }}>
                        Distance
                      </div>
                    </TableCell>
                    <TableCell align="right">...</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/*<ul className="title-name">*/}
          {/*  <li className="details">User details</li>*/}
          {/*  <li>Company name</li>*/}
          {/*  <li>Email</li>*/}
          {/*  <li className="details">Distance</li>*/}
          {/*</ul>*/}
          {/*{*/}
          {/*  isSuccess && users.map(el =>*/}
          {/*    <ul className="user-info" key={el.id}>*/}
          {/*      <li>*/}
          {/*        <Avatar  style={{ marginRight: 10 }} {...stringAvatar(`${el.name}`)} />*/}
          {/*        <div style={{ height: 36 }}>*/}
          {/*          {el.name}*/}
          {/*          <p style={{ padding: 0, margin: 0 }}>{el.address.city}</p>*/}
          {/*        </div>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <div style={{ height: 36 }}>*/}
          {/*          {el.company.name}*/}
          {/*          <p style={{ padding: 0, margin: 0 }}>{el.company.bs}</p>*/}
          {/*        </div>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <div style={{ height: 36 }}>*/}
          {/*          {el.email}*/}
          {/*          <p style={{ padding: 0, margin: 0 }}>{el.website}</p>*/}
          {/*        </div>*/}
          {/*      </li>*/}
          {/*      <li style={{ background: '#F12B2C', borderRadius: 100, width: 54, height: 24 }}>distance</li>*/}
          {/*      <li>...</li>*/}
          {/*    </ul>*/}
          {/*  )*/}
          {/*}*/}
        </div>
        {
          isError && <h1 style={{ color: 'red' }}>Error: {error.message}</h1>
        }
      </div>
    </>
  )
}

export default Users
