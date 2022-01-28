import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email};
       fetch('https://frozen-forest-00333.herokuapp.com/users/admin',{
           method:'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body:JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => {
           if(data.modifiedCount){
               setEmail('');
               
           }
       })
        alert('Admin added successfully!');
        e.preventDefault()
        
    }

    return (
        <div>
            <h3>Make a new admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    required />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;