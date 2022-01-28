import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    

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
           console.log(data)
       })

        e.preventDefault()
        alert('Admin added successfully!')
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