import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/basketSlice';

const MAX_RATIN = 5;
const MIN_RATING = 3;
function Product({id,title,price,description,category,image}) {
    const [rating,setRating] =useState(0
    );
   
    useEffect(() => {
        let randomrating = Math.floor(Math.random()*(MAX_RATIN - MIN_RATING))+MIN_RATING

        setRating(randomrating);
    }, []);
    const [hasPrime] =useState(
        Math.floor(Math.random()<1)
    )
    const dispatch = useDispatch()

        const addItemsToCart = () => {
            const Product ={
                id,
                title,
                price,description,
                category,
                image
            };
            dispatch(addToCart(Product))
        }
  return (
    <div  className='relative flex flex-col m-5 p-10 bg-white shadow-md'>
        <p className='absolute top-2 right-2 text-sm italic text-gray'>{category}</p>
        <img className='self-center' src={image}alt="" width={130}/>
        <h4 className='text-sm my-2'>{title}</h4>
        <div className='flex items-center'>
            {[...Array(rating)].map((_,i)=>(
                <StarIcon className='h-5 text-yellow-400'/>
            ))} 
        </div>
        <p className="line-clamp-2 text-xs my-2">{description}</p>
        <div className="mb-5" >
        <Currency quantity={price} currency='INR'/>
        </div>
        {hasPrime && (
            <div>
                <p className='-mt-2'>Free Delivery</p>
            </div>
            
        )}
        <button onClick={addItemsToCart} className='mt-auto button'>Add to Cart</button>
    </div>
  )
}

export default Product