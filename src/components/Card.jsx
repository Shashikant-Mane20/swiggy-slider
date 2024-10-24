import React from 'react'

// export default function Card(props) {
//   return (
//     <div className='w-[273px] shrink-0 grow overflow-hidden'>
//       <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
//         <img className='object-cover w-full h-full' src={"http://localhost:5000/images/"+props.image} alt="" />
//       <div className='image-overlay absolute w-full h-full top-0 flext items-end p-2 text-[25px] font-bold text-white tracking-tighter'>
//         {props.offer}
//       </div>
//       </div>
//     </div>
//   )
// }

const Card = ({ imageUrl, title }) => {
    return (
        <div className='bg-white shadow-md rounded-md overflow-hidden'>
            <img src={imageUrl} alt={title} className='w-full h-[150px] object-cover' />
            <div className='p-2 text-center'>
                <h3 className='text-sm font-semibold'>{title}</h3>
            </div>
        </div>
    );
};

export default Card;
