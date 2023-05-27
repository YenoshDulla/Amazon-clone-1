import React from 'react'
import Image from 'next/image'
import {LocationMarkerIcon, SearchIcon,ShoppingCartIcon,MenuIcon} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react";
function Header() {
  const {data: session} = useSession();
  return (
  <header>
    <div className='flex items-center text-white bg-gray-900 p-1 space-x-4'>
       <div className='mt-2 pl-4'>
       <Image 
       src="http://links.papareact.com/f90"
       width={110}
       height={30}
       className='link p-1'
       />
       </div>
       <div className="link flex items-center space-x-2">
        <div>
        <LocationMarkerIcon className='h-5'/>
        </div>
          <div>
          <p className='text-xs italic text-gray-100'>Hello</p>
          <p className='text-sm font-medium'>Select your address</p>
          </div>
       </div>
       <div className='flex grow items-center h-10 bg-yellow-400  hover:bg-yellow-500 rounded-md'>
        <input type="text" placeholder='SearchAmazon.in' className='h-10 w-full rounded-l-md px-5 border-hidden outline-none text-black '/>
        <SearchIcon className='h-7 px-3  text-black link'/>
       </div>
       <div className='flex space-x-2 link'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" width={40}/>
        <span>EN</span>
       </div>
       <div onClick={!session?signIn:signOut} className='link'>
        <p className='text-xs'>{session ? `Hello ${session.user.name} 
        signOut`:"Sign In"}</p>
        <p className='text-sm font-medium'>Accounts&Lists</p>
       </div>
       <div className='link'>
        <p className='text-xs'>Returns</p>
        <p className='text-sm font-bold'>& Orders</p>
       </div>
       <div className='relative pr-4 flex items-center link'>
        <span className='absolute text-sm font-bold left-6 top-3 text-yellow-400'> 0</span>
        <ShoppingCartIcon className='h-14'/>
        <p className='text-sm font-bold'>Cart</p>
       </div>
    </div>
    <div className='flex items-center px-4 py-2 space-x-3 w-full text-white bg-gray-800'>
        <p className='flex items-center space-x-2 text-md font-medium link'><MenuIcon className='h-5'/>All</p>
        <p className='link text-sm font-medium'>Amazon miniTV </p>
        <p className='link text-sm font-medium'>Sell </p>
        <p className='link text-sm font-medium'>Best Sellers </p>
        <p className='link text-sm font-medium'>Mobiles</p>
        <p className='link text-sm font-medium'>Today's Deals</p>
        <p className='link text-sm font-medium'>Customer Services </p>
        <p className='link text-sm font-medium'>New Release </p>
        <p className='link text-sm font-medium'>Prime </p>
        <p className='link text-sm font-medium'>Home&Kitechen </p>
        <p className='link text-sm font-medium'>Amazon Pay</p>
        <p className='link text-sm font-medium'>Fashion</p>
        <p className='link text-sm font-medium'>Computer</p>
    </div>
    </header>
  )
}

export default Header