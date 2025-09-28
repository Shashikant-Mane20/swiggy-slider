// import React from 'react'
// import { useState } from 'react';
// import { RxCaretDown } from "react-icons/rx";
// import { IoIosSearch } from "react-icons/io";
// import { CiDiscount1 } from "react-icons/ci";
// import { IoHelpBuoyOutline } from "react-icons/io5";
// import { MdPermIdentity } from "react-icons/md";
// import { IoCartOutline } from "react-icons/io5";

// export default function Header() {
//     const [toggle, setToggle] = useState(false);

//     const showSideMenu = () => {
//         setToggle(true);
//     }

//     const hideSideMenu = () => {
//         setToggle(false);
//     }

//     const links = [
//         {
//             icon: <IoIosSearch />,
//             name: 'Search'
//         },
//         {
//             icon: <CiDiscount1 />,
//             name: 'Offers'
//         },
//         {
//             icon: <IoHelpBuoyOutline />,
//             name: 'Help'
//         },
//         {
//             icon: <MdPermIdentity />,
//             name: 'Sign In'
//         },
//         {
//             icon: <IoCartOutline />,
//             name: 'Cart'
//         },

//     ]

//     return (
//         <>
//             <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
//                 opacity: toggle ? 1 : 0,
//                 visibility: toggle ? 'visible' : 'hidden',
//             }}>
//                 <div onClick={(e) => {
//                     e.stopPropagation();
//                 }}
//                     className='w-[500px] bg-white h-full absolute duration-[400ms]'
//                     style={{ left: toggle ? '0%' : '-100%' }}
//                 ></div>
//             </div>
//             <header className='p-[15px] shadow-xl text-[#686b78]'>
//                 <div className='max-w-[1200px] mx-auto border border-red-500 flex'>
//                     <div className='w-[100px]'>
//                         <img src="images/logo.png" className='w-full' alt="" />
//                     </div>

//                     <div className='mt-[14px]'>
//                         <span className='font-bold border-b-[3px] border-black text-black'>Other </span>
//                         Mumbai, Maharashtra, India < RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[0.9rem text-[#fc8019] cursor-pointer' />
//                     </div>

//                     <nav className='flex list-none gap-5 ml-auto text-[18px] font-semibold'>
//                         {
//                             links.map(
//                                 (link, index) => {
//                                     return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
//                                         {link.icon}
//                                         {link.name}
//                                     </li>
//                                 }
//                             )
//                         }



//                     </nav>
//                 </div>
//             </header>
//         </>
//     )
// }

import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: 'Search'
        },
        {
            icon: <CiDiscount1 />,
            name: 'Offers'
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: 'Help'
        },
        {
            icon: <MdPermIdentity />,
            name: 'Sign In'
        },
        {
            icon: <IoCartOutline />,
            name: 'Cart'
        },
    ];

    return (
        <>
            <div className={`black-overlay w-full h-full fixed duration-500 z-10 ${toggle ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={hideSideMenu}>
                <div onClick={(e) => e.stopPropagation()} className={`w-[300px] bg-white h-full absolute duration-[400ms] ${toggle ? 'left-0' : '-left-full'}`}>
                   
                </div>
            </div>

            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
                    <div className='w-[80px] sm:w-[100px]'>
                        <img src="images/logo.png" className='w-full' alt="Logo" />
                    </div>

                    <div className='hidden sm:flex items-center gap-2'>
                        <span className='font-bold border-b-[3px] border-black text-black'>Other</span>
                        <span>Mumbai, Maharashtra, India</span>
                        <RxCaretDown onClick={showSideMenu} fontSize={25} className='cursor-pointer text-[#fc8019]' />
                    </div>

                    <nav className='hidden sm:flex list-none gap-5 ml-auto text-[18px] font-semibold'>
                        {
                            links.map((link, index) => (
                                <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                                    {link.icon}
                                    {link.name}
                                </li>
                            ))
                        }
                    </nav>

                    {/* Hamburger Menu for mobile view */}
                    <div className='sm:hidden flex items-center'>
                        <button onClick={showSideMenu} className='text-[24px]'>
                            <RxCaretDown />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
