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

import { stringAvatar } from '../../helper/avatarName'
import NavBar from '../UI/NavBar/NavBar'
import { Loader } from '../UI/Loader/Loader'
import './Users.css'

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

export default Users
