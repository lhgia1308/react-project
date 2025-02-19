import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMultiCat, getCategories } from "../../State/Category/Action";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Snackbar, TextField } from '@mui/material';
import { CustomModal } from '../../component/Modal/CustomModal';
import Alert from '@mui/material/Alert';
import { CategoryForm } from './CategoryForm';

export const Category = () => {
	const dispatch = useDispatch();
	const jwt = localStorage.getItem('jwt')
	const { auth, categoryStore } = useSelector(store => store);
	const columns = useMemo(() => [
		{
			name: 'Id',
			selector: row => row.id,
			sortable: true,
		},
		{
			name: 'Name',
			selector: row => row.name,
			sortable: true,
		},
		{
			name: 'Description',
			selector: row => row.description,
		},
		{
			name: 'Parent',
			selector: row => row.parent?.name,
			sortable: true,
		},
		{
			cell: (value) => <Button variant='contained' onClick={() => handleEdit(value)}>Edit</Button>,
			ignoreRowClick: true,
			allowOverflow: true,
			button: true
		}
	], []);
	const [openConfirmation, setOpenConfirmation] = useState(false);
	const [selectedObj, setSelectedObj] = useState();
	const [openNotification, setOpenNotification] = useState(false);
	const [error, setError] = useState('');
	const [openCategoryForm, setOpenCategoryForm] = useState(false);
	const [typeCatForm, setCatForm] = useState('');
	const [editCategory, setEditCategory] = useState();
	const [categories, setCategories] = useState();

	const handleSelectRowsChange = useCallback((item) => {
		setSelectedObj(item)
	}, [])
	const handleEdit = (item) => {
		setCatForm('UPDATE')
		setOpenCategoryForm(true)
		setEditCategory(item)
	}
	const handleClickDelete = () => {
		if(selectedObj.selectedCount === 0) {
			setError('Please choose at least a category')
			setOpenNotification(true)
			return;
		}
		// console.log("handleClickDelete selectedRows", selectedObj)
		setOpenConfirmation(true)
	}
	const handleAcceptDelete = () => {
		var ids = selectedObj.selectedRows.map((item) => item.id)
		dispatch(deleteMultiCat({jwt, ids}))
		setOpenConfirmation(false)
	}
	const handleCloseNotification = (event, reason) => {
		setOpenNotification(false);
	};
	const handleClickAdd= (type) => {
		setCatForm('ADD')
		setOpenCategoryForm(true)
		setEditCategory()
	}
	const handleSearchChange = (e) => {
		var keyword = e.target.value
		let newCategories = [];
		if(keyword === '') {
			newCategories = [...categoryStore.categories];
		}
		else {
			newCategories = [
				...categoryStore.categories.filter((item) => (
					item.name.toLowerCase().includes(keyword) 
					|| item.description.toLowerCase().includes(keyword)
				))
			];
		}
		setCategories([...newCategories])
	}
	useEffect(() => {
			dispatch(getCategories({jwt: auth.jwt || jwt}))
		}, [auth.jwt, dispatch, jwt]
	)
	
	return (
		<div>
			<div className='mb-2 flex flex-row justify-between gap-3'>
				<div className='flex gap-3'>
					<TextField
					name='search'
					label='Search'
					sx={{width: '40vw'}}
					onChange={handleSearchChange}
					/>
				</div>
				<div className='flex gap-3 items-center'>
					<Button onClick={handleClickAdd} variant='contained'>Add</Button>
					<Button onClick={handleClickDelete} variant='contained'>Delete</Button>
				</div>
			</div>

			<DataTable
			columns={columns}
			data={categories ?? (categoryStore.categories ?? [])}
			progressPending={categoryStore.isLoading}
			pagination
			defaultSortFieldId={1}
			selectableRows 
			onSelectedRowsChange={handleSelectRowsChange}
			/>

			<CustomModal 
			title="DELETE" 
			open={openConfirmation} 
			setOpenConfirmation={setOpenConfirmation}
			handleAccept={handleAcceptDelete}
			>
				<p>Do you want to delete all them?</p>
			</CustomModal>

			<CategoryForm categories={categoryStore.categories} editCategory={editCategory} type={typeCatForm} open={openCategoryForm} setOpen={setOpenCategoryForm}/>
		
			<Snackbar
			open={openNotification}
			autoHideDuration={4000}
			onClose={handleCloseNotification}
			>
				<Alert
				onClose={handleCloseNotification}
				severity="error"
				variant="filled"
				sx={{ width: '100%' }}
				>
					{error}
				</Alert>
			</Snackbar>
		</div>
	);
};