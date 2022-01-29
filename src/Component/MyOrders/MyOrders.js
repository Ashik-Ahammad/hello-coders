import React, { useState } from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

    const [orders,SetOrders] = useState([]);

    useEffect(() => {
        const url = 'https://frozen-forest-00333.herokuapp.com/orders'
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
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Transaction ID</TableCell>
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
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">[ {row.TrxID} ]</TableCell>
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