import React from 'react';
import { RxCross1 } from "react-icons/rx";

const SingleWishList = ({wishItem,handleDeleteWishListItem}) => {
    const {product_id,product_image,product_title,description,price} = wishItem;
    return (
        <>
        <div className='bg-white flex justify-between items-center gap-5 rounded-xl p-5 mb-8'>
            <div className='flex items-center gap-5'>
                <div>
                    <img className='w-52' src={product_image} alt="image" />
                </div>
                <div className='space-y-3'>
                    <h1 className='text-base lg:text-2xl font-bold'>{product_title}</h1>
                    <p className='text-gray-600 text-xs lg:text-base'>{description}</p>
                    <p className='text-base lg:text-lg font-bold'>Price: $ {price}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleDeleteWishListItem(product_id)} className='text-red-600 text-base lg:text-3xl border border-red-600 p-2 rounded-full'><RxCross1 /></button>
            </div>
        </div>
        </>
    );
};

export default SingleWishList;