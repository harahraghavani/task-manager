import React from 'react'
import Button from '@mui/material/Button';

const CustomButton = ({ btnText = "", submitEvent }) => {
    return (
        <Button onClick={() => submitEvent?.()} variant="contained">{btnText}</Button>
    )
}

export default CustomButton