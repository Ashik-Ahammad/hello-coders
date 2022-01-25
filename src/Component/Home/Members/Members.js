import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Member from '../Member/Member';

const Members = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('https://frozen-forest-00333.herokuapp.com/members')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 600, m: 5, color: 'blue' }} variant="h5" component="div">
                    OUR TEAM
                </Typography>

                {
                    members.length === 0 ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>

                  :

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
                    {
                        members.map(member => <Member
                            key={member._id}
                            member={member}
                        ></Member>)
                    }
                </Grid>
                }
            </Container>
        </Box>
    );
};

export default Members;