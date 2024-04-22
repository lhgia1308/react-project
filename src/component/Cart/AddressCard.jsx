import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

export const AddressCard = ({item, showButton, handleSelectAddress}) => {
  return (
    <Card className="flex gap-5 w-64 p-5">
        <HomeIcon />
        <div className="space-x-3 text-gray-500">
            <h1 className="font-semibold text-lg text-white">Home</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error asperiores vitae quam ducimus! Excepturi corporis corrupti cupiditate labore cum voluptas alias eum fugiat aliquam mollitia laboriosam tenetur rem, iusto dignissimos.
            </p>
            {showButton && <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>}
        </div>
    </Card>
  )
}
