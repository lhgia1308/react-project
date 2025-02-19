import React from "react";
import "./Home.css"
import { MultiItemCarousel } from "./MultiItemCarousel";
import { StoreCard } from "../Store/StoreCard.jsx"

const store = [1, 1,1, 1,1]
export const Home = () => {
    return (
        <div className="">
            <section className="banner -z-50 relative flex flex-col justify-center items-center">
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
                        Zosh Food
                    </p>
                    <p className="z-10 text-gray-300 text-xl">
                        Taste the convenience: Food, Fast and Delivered.
                    </p>
                </div>
            </section>
            <section className="p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
                    Top Meel
                </p>
                <MultiItemCarousel />
            </section>
            <section className="px-5 lg:px-20">
                <h1 className="text-2xl font-semibold text-gray-400 py-3">
                    Order From Our Handpicked Favorites
                </h1>
                <div className="flex flext-wrap items-center justify-around gap-5">
                    {
                        store.map((item) => <StoreCard />)
                    }
                </div>
            </section>
        </div>
    )
}