import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from "../../State/Category/Action";
import { useEffect } from 'react';

const columns = [
	{
		name: 'Id',
		selector: row => row.id,
	},
	{
		name: 'Name',
		selector: row => row.name,
	},
	{
		name: 'Description',
		selector: row => row.description,
	},
];

export const Category = () => {
	const dispatch = useDispatch();
	const jwt = localStorage.getItem('jwt')
	const { auth, category } = useSelector(store => store);

	useEffect(() => {
			dispatch(getCategories({jwt: auth.jwt || jwt}))
		}, [auth.jwt, dispatch, jwt])
	return (
		<DataTable
		columns={columns}
		data={category.categories ? category.categories : []}
		progressPending={category.isLoading}
		/>
	);
};