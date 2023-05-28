import React from 'react'
import Image from 'next/image'
import Currecncy from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../slices/basketSlice'


function CheckoutProduct({
                id,
                title,
                price,description,
                category,
                image
})

{
    const dispatch = useDispatch();

const removeItems = () =>{
        dispatch(removeFromCart({id}))
}

  return (
   

    <div className="grid grid-cols-5 bg-white shadow-mg p-5 ">
        <Image src={image} alt="" height={200} width={200}/>
        <div className='col-span-3 m-5 self-center'>
            <p className='text-lg font-medium'>{title}</p>
             <p className='text-xs line-clamp-2 mt-2 mb-2'>{description}</p>
             <Currecncy quantity={price} currency='INR'/>
             <p className='text-sm text-white-50 italic mt-3'>{category}</p>
        </div>
        <div className='flex flex-col space-y-2 my-auto '>
           <button onClick={removeItems} className='button'>Remove</button>
        </div>
    </div>
  )
}

export default CheckoutProduct