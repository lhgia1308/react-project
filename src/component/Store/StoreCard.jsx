import React from "react";
import { Card, Chip, IconButton, FavoriteBorderIcon } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

export const StoreCard = () => {
    return (
        <Card className="m-5 w-[18rem]">
            <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
                <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <Chip
                size="small"
                className="absolute top-2 left-2"
                color={true ? "success" : "error"}
                label={true ? "open" : "closed"}
                >
                </Chip>
                <div className="p-4 textPart lg:flex w-full justify-between">
                    <div className="space-y-1">
                        <p className="font-semibold text-lg">
                            Indian Fast Food
                        </p>
                        <p className="text-gray-50">
                            Craving it all? Dive into our goal fla ...
                        </p>
                    </div>
                    <div>
                        <IconButton>
                            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </div>
                </div>
            </div>
        </Card>
    )
}