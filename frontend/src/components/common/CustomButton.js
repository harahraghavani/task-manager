import React from 'react'
import Button from '@mui/material/Button';

const CustomButton = ({ btnText = "", submitEvent, type = "submit" }) => {
    return (
        <Button type={type} onClick={() => submitEvent?.()} variant="contained">{btnText}</Button>
    )
}

export default CustomButton