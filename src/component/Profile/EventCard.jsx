import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width: 345, alignItems: "center"}}>
            <CardMedia
            sx={{height: 345}}
            image='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            >
                <CardContent>
                    <Typography variant='h5'>
                        Indian Fast Food
                    </Typography>
                    <Typography variant='body2'>
                        50% off on your first order
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"mumbai"}</p>
                        <p className='text-sm text-blue-500'>February 14, 2024</p>
                        <p className='text-sm text-red-500'>February 14, 2024</p>
                    </div>
                </CardContent>
                {true && <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>}
            </CardMedia>
        </Card>
    </div>
  )
}
