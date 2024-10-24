// import React, { useEffect, useState } from 'react'
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import Card from "./Card";

// export default function TopRest() {
//     const [data, setData] = useState([]);

//     const fetchTopRestaurants = async () => {
//         const response = fetch('http://localhost:5000/top-restaurant-chains');
//         const apiData = await response.json();
//         setData(apiData);
//     }

//     useEffect(
//         () => {
//             fetchTopRestaurants();
//         }, []
//     )


//     return (
//         <div>
//             <div className='max-w-[1200px] mx-auto'>
//                 <div className='flex my-3 items-center justify-between'>
//                     <div className='text-[25px] font-bold'>Top restaurant chains in Mumbai</div>
//                     <div className='flex'>
//                         <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
//                         >
//                             <FaArrowLeft />
//                         </div>
//                         <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2n'
//                         >
//                             <FaArrowRight />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex gap-5 overflow-hidden'>
//                     {
//                         data.map(
//                             (d,i) => {
//                                 return <Card {...d} key={i}/>
//                             }
//                         )
//                     }
                  
                    
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card"; // Ensure your Card component is set up to display images and titles.

export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);
    const itemsPerSlide = 3; // Number of items to show at once

    const fetchImages = async () => {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/?client_id=b0wzVD6hUaVvchUncDl_6M9rk6slt2tjTI65yELtrWs`);
            const apiData = await response.json();
            setData(apiData);
        } catch (error) {
            console.error("Error fetching images from Unsplash:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const nextSlide = () => {
        if (slide < Math.ceil(data.length / itemsPerSlide) - 1) {
            setSlide(slide + 1);
        }
    };

    const prevSlide = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        }
    };

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Featured Images from Unsplash</div>
                <div className='flex'>
                    <div 
                        className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
                        onClick={prevSlide}
                    >
                        <FaArrowLeft />
                    </div>
                    <div 
                        className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
                        onClick={nextSlide}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                <div 
                    className='flex transition-transform duration-300'
                    style={{
                        transform: `translateX(-${slide * (100 / itemsPerSlide)}%)`, // Calculate slide percentage
                        width: `${data.length * 200}px`, // Adjust width for all items
                    }}
                >
                    {
                        data.map((d, i) => (
                            <div key={i} className='flex-shrink-0 w-[200px]'>
                                <Card imageUrl={d.urls.small} title={d.alt_description || "Untitled"} /> {/* Modify Card props as needed */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
