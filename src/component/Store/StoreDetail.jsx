import { Divider, FormControl, FormControlLabel, Grid, RadioGroup, Typography, Radio } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuItem';

const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
]
const foodTypes = [
    {label: "All", value: "all"},
    {label: "Vegetarian only", value: "vegetarian"},
    {label: "Non-Vegetarian", value: "non_vegetarian"},
    {label: "Seasonal", value: "sea"}
]
const menus = [1,1,1,1,1]
export const StoreDetail = () => {
    const [foodType, setFoodType] = useState("all");
    const [foodCategory, setFoodCategory] = useState("pizza");
    const handleFilter = (e) => {
        console.log(e.target.value)
        setFoodType(e.target.value)
    }
    const handleFilterCategory = (e) => {
        console.log(e.target.value)
        setFoodCategory(e.target.value)
    }
    return (
        <div className='px-5 lg:px-2'>
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/Indian/Indian Fast Food</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                           <img 
                           className="w-full h-[40vh] object-cover"
                           src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                           alt=""
                           />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                           <img 
                           className="w-full h-[40vh] object-cover"
                           src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                           alt=""
                           />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                           <img 
                           className="w-full h-[40vh] object-cover"
                           src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                           alt=""
                           />
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className="text-gray-500 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quae sunt adipisci provident a sequi vero autem officia voluptatem pariatur, nam facilis nesciunt reiciendis minima accusamus aliquid expedita, rem labore!
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOnIcon />
                            <span>
                            Hamlet 8, Long Tri village, Long My district, Hau Giang city.
                            </span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <CalendarTodayIcon />
                            <span>
                            Mon-Sun: 9:00 AM - 9:00 PM
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Type
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                        key={item.value}
                                        value={item.value} 
                                        control={<Radio />} 
                                        label={item.label} 
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <Divider />
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Categories
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilterCategory} name="food_category" value={foodCategory}>
                                    {categories.map((item) => (
                                        <FormControlLabel
                                        key={item}
                                        value={item} 
                                        control={<Radio />} 
                                        label={item} 
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menus.map((item) => <MenuCard />)}
                </div>
            </section>
        </div>
    )
}