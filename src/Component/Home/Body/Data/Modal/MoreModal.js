import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
};

const MoreModal = ({ openDetail, handleDetailClose, services }) => {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openDetail}
            onClose={handleDetailClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openDetail}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        About This Service
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        This is good for you
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default MoreModal;