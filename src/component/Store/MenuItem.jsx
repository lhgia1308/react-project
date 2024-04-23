import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ingredients = [
    {category: "Nuts & seeds", ingredients: ["Cashews"]},
    {category: "Protein", ingredients: ["Protein", "Protein", "Bacon strips"]}
]
export const MenuCard = () => {
    const handleCheckboxChange = (item) => {

    }
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img 
                        className="w-[7rem] h-[7rem] object-cover"
                        src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">Burger</p>
                            <p>$499</p>
                            <p className="text-gray-400">nice food</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form action="">
                    <div className='flex gap-5 flex-wrap'>
                        {ingredients.map((item) => (
                            <div>
                                <p>{item.category}</p>
                                <FormGroup>
                                    {item.ingredients.map((ing) => (
                                        <FormControlLabel control={<Checkbox onChange={() => handleCheckboxChange(ing)} />} label={ing}></FormControlLabel>
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className="pt-55">
                        <Button variant="contained" disabled={false} type="submit">{true ? "Add to cart" : "Out of stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}