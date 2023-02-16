import React from "react"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Fields = ({ name, email, index }) => {
    return (
        <div className='data_val'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Stack>

                <Button color="error">

                    <DeleteOutlineIcon />
                </Button>
            </Stack>
        </div>
    )
}

export default Fields
