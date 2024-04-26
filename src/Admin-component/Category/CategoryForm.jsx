import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCategory, updateCategory } from '../../State/Category/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const CategoryForm = (props) => {
    const { open, setOpen, type, editCategory, categories } = props
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt')
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        parent: 0
    });

    const handleClose = () => {
        setOpen(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('editCategory', editCategory)
        if(editCategory) {
            console.log('formData', formData)
            dispatch(updateCategory({jwt, id: editCategory.id, reqData: formData}))
        }
        else {
            dispatch(addCategory({jwt, reqData: formData}))
        }
        setOpen(false)
    }
    const handleFormChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    return (
        <Modal
        // onClose={handleClose}
        open={open}
        >
            <Box sx={style}>
                <Typography variant='h5' className='text-center' >
                    {type === 'ADD' ? 'Create a new Category' : 'Update'}
                </Typography>
                <form
                onSubmit={handleSubmit}
                onChange={handleFormChange}
                onReset={()=>{}}
                >
                    <TextField
                    name='name'
                    label="Name"
                    defaultValue={editCategory?.name}
                    fullWidth
                    margin='normal'
                    />
                    
                    <TextField
                    name='description'
                    label="Description"
                    defaultValue={editCategory?.description}
                    fullWidth
                    margin='normal'
                    />

                    <FormControl fullWidth>
                        <InputLabel>Parent</InputLabel>
                        <Select
                            name='parent'
                            label="Parent"
                            defaultValue={editCategory?.parent}
                            onChange={handleFormChange}
                        >
                            {
                                categories?.map((item) => {
                                    if(item.id !== editCategory?.id) {
                                        return <MenuItem value={item.id}>{item.name}</MenuItem>
                                    }
                                    return <></>
                                })
                            }
                        </Select>
                    </FormControl>

                    <div className='mt-4 flex flex-row gap-10 justify-end'>
                        <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                        <Button type='submit' variant='contained'>
                            {type === 'ADD' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}
