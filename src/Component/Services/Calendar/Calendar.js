import React from 'react';
import { TextField } from '@mui/material';

const toInputValue = (date) => {
    if (!date) {
        return '';
    }
    const value = new Date(date);
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Calendar = ({ date, setDate }) => {

    return (
        <TextField
            label="Appointment date"
            type="date"
            value={toInputValue(date)}
            onChange={(event) => {
                const value = event.target.value;
                if (value) {
                    setDate(new Date(`${value}T00:00:00`));
                }
            }}
            InputLabelProps={{ shrink: true }}
            fullWidth
        />
    );
};

export default Calendar;
