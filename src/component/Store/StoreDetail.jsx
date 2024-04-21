import { Grid } from '@mui/material';
import React from 'react';

export const StoreDetail = () => {
    return (
        <div className='px-5 lg:px-2'>
            <section>
                <h3 className="px-5 lg:px-20">Home/Indian/Indian Fast Food</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={16}>
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
                    <p className="text-gray-500 flex items-center gap-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex asperiores distinctio molestias accusantium sequi magni, quidem totam delectus repellat placeat sit natus quibusdam quae ab dolore pariatur ipsa iusto.</p>
                </div>
            </section>
        </div>
    )
}