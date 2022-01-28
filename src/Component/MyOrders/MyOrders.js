import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

    const {user} = useAuth();
    const [orders,SetOrders] = useState([]);

    useEffect(() => {
        const url = `https://frozen-forest-00333.herokuapp.com/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => SetOrders(data));
    },[])

    return (
        <div>
            <h4>Orders : {orders.length}</h4>
            <TableContainer component={Paper}>
      <Table  aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Order ID</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;