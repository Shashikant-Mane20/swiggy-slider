import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const UNSPLASH_ACCESS_KEY = 'b0wzVD6hUaVvchUncDl_6M9rk6slt2tjTI65yELtrWs'; // Your Access Key

export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
        // const response = await fetch("http://localhost:5000/categories");

        const response = await fetch(
            `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&count=12`
        );
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () => {
        console.log("categories.length");
        if (categories.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 3);
    }


    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>What's on your mind?</div>
                    <div className='flex'>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
                            onClick={prevSlide}>
                            <FaArrowLeft />
                        </div>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2n'
                            onClick={nextSlide}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>

                <div className='flex overflow-hidden'>
                    {
                        categories.map(
                            (cat, index) => {
                                return (
                                    <div style={{
                                        transform: `translateX(-${slide * 100}%)`
                                    }} key={index} className='w-[150px] shrink-0 duration-500'>
                                        {/* <img src={"http://localhost:5000/images/"+ cat.image} alt="" /> */}

                                        <img 
                                        src={cat.urls.small} // Use Unsplash image URL
                                        alt={cat.alt_description || 'No Name'} 
                                        className='w-24 h-24 rounded-md object-cover' // Tailwind classes for image
                                    />
                                    <p className='mt-2 text-sm'>
                                        {cat.alt_description || 'No Name'} {/* Display image description */}
                                    </p>

                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <hr className='my-6 border-[1px]' />
            </div>

        </>
    )
}

