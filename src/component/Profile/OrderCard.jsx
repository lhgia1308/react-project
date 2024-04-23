import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img
            className='h-16 w-16' 
            src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
            />
            <div>
                <p>Biruan</p>
                <p>$344</p>
            </div>
        </div>
        <div>
            <Button disabled className='cursor-not-allowed'>completed</Button>
        </div>
    </Card>
  )
}
