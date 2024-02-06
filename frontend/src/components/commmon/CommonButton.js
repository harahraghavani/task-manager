import React from 'react'
import { Button } from '@chakra-ui/react'

const CommonButton = ({ btnText, type = "" }) => {
    return (
        <Button type={type}>{btnText}</Button>
    )
}

export default CommonButton