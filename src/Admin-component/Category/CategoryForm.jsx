import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
    const [formData, setFormData] = useState({});

    const initial = () => {
       if(type === 'UPDATE') {
        const newFormData = {
            name: editCategory?.name,
            description: editCategory?.description,
            parent: editCategory?.parent?.id
        }
        setFormData({...newFormData})
       }
       else {
        const newFormData = {
            name: '',
            description: '',
            parent: 0
        }
        setFormData({...newFormData})
       }
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(type === 'UPDATE') {
            dispatch(updateCategory({jwt, id: editCategory.id, reqData: formData}))
            handleClose();
        }
        else {
            dispatch(addCategory({jwt, reqData: formData}))
        }
    }
    const handleFormChange = (e) => {
        if(e.target.name === 'Parent') {
            setFormData({...formData, [e.target.name]:e.target.value.id})
        }
        else {
            setFormData({...formData, [e.target.name]:e.target.value})
        } 
    }
    useEffect(() => {
        initial()
    }, [editCategory])

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
                    label="Name (*)"
                    defaultValue={editCategory?.name}
                    fullWidth
                    margin='normal'
                    />
                    
                    <TextField
                    name='description'
                    label="Description (*)"
                    defaultValue={editCategory?.description}
                    fullWidth
                    margin='normal'
                    />

                    <FormControl fullWidth>
                        <InputLabel>Parent</InputLabel>
                        <Select
                        name='parent'
                        label="Parent"
                        defaultValue={editCategory?.parent?.id}
                        onChange={handleFormChange}
                        >
                            {
                                categories?.map((item) => <MenuItem value={item.id}>{item.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    <Typography sx={{color: 'red', fontWeight: 'bold', marginTop: '1rem'}}>
                        (*): Compulsory
                    </Typography>

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
