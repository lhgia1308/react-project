import { Divider, Card, Button, Modal, Box, Grid, TextField } from "@mui/material"
import React from "react"
import { CartItem } from "./CartItem"
import { AddressCard } from "./AddressCard"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup"

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

const initialValues = {
    streetAddress: '',
    state: '',
    pincode: '',
    city: ''
}
const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.number().required("Pincode is required"),
    city: Yup.string().required("City is required")
})
const items = [1, 1]
export const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const handleOpenAddressModal = () => {
        setOpen(true);
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (values) => {
        console.log('values', values)
    }
    return (
        <div>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {items.map((item) => <CartItem />)}
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item total</p>
                                <p>$333</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Free</p>
                                <p>$333</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST Store Charges</p>
                                <p>$333</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total pay</p>
                            <p>$567</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Choose Delivery Address
                        </h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1,1,1].map((item) => (
                                <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} />
                            ))}
                             <Card className="flex gap-5 w-64 p-5">
                                <AddLocationIcon />
                                <div className="space-x-3 text-gray-500">
                                    <h1 className="font-semibold text-lg text-white">Home</h1>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error asperiores vitae quam ducimus! Excepturi corporis corrupti cupiditate labore cum voluptas alias eum fugiat aliquam mollitia laboriosam tenetur rem, iusto dignissimos.
                                    </p>
                                    <Button variant="outlined" fullWidth onClick={() => handleOpenAddressModal()}>Add</Button>
                                </div>
                            </Card>     
                        </div>
                    </div>
                </section>
            </main>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                   <Form>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                as={TextField}
                                name="streetAddress"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage('streetAddress')}
                                // helperText={
                                //     <ErrorMessage>
                                //         {(msg) => <span className="text-red-600">{msg}</span>}
                                //     </ErrorMessage>
                                // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                as={TextField}
                                name="state"
                                label="State"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage('streetAddress')}
                                // helperText={
                                //     <ErrorMessage>
                                //         {(msg) => <span className="text-red-600">{msg}</span>}
                                //     </ErrorMessage>
                                // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                as={TextField}
                                name="pincode"
                                label="Pincode"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage('streetAddress')}
                                // helperText={
                                //     <ErrorMessage>
                                //         {(msg) => <span className="text-red-600">{msg}</span>}
                                //     </ErrorMessage>
                                // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                as={TextField}
                                name="city"
                                label="City"
                                fullWidth
                                variant="outlined"
                                // error={!ErrorMessage('streetAddress')}
                                // helperText={
                                //     <ErrorMessage>
                                //         {(msg) => <span className="text-red-600">{msg}</span>}
                                //     </ErrorMessage>
                                // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit" color="primary">
                                    Delivery hear
                                </Button>
                            </Grid>
                        </Grid>
                   </Form>
                </Formik>
            </Box>
            </Modal>
        </div>
    )
}