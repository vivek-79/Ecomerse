import Image from 'next/image'
import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { PiShoppingCartLight } from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxPerson } from 'react-icons/rx'
import { SlLocationPin } from 'react-icons/sl'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full h-[58px]  mt-7 mx-auto flex-roww justify-between'>
      <Image src="/images/logo.png" width={180} height={55} alt='logo'/>

      {/* Search Conainer */}
      <div className='w-full max-w-[700px] h-[54px] border-[2px] px-4 border-[#BCE3C9] flex flex-roww justify-center rounded-md focus-within:border-[#3BB77E]'>
        
        {/* Search Bar */}
        <button className='flex items-center'>All Categories <span><RiArrowDropDownLine /></span></button>
          
        <span className='text-black/40'>|</span>

        <input type="text" name="search" id="search" placeholder='Search items...' className='px-2 flex-1 h-full outline-none text-[16px]'/>
        
        {/* Search Icon */}
        <button className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'>
          <CiSearch />
        </button>

        </div>


      {/* Location */}
      <button className='text-light-green border-1 border-light-gray rounded-md text-[14px] flex-roww gap-1 px-1 py-1 shadow-xl cursor-pointer
      hover:scale-110 transition-all duration-300'>
        <span><SlLocationPin /></span>
        Your Location
        <span><RiArrowDropDownLine /></span>
      </button>

      {/* WishList */}
      <button className='flex flex-row items-end gap-1 cursor-pointer relative hover-border'>
        <CiHeart size={30}/>
        <span className='text-[14px] text-light-text'>Wishlist</span>
      </button>
      {/* Cart */}
      <button className='flex flex-row items-end gap-1 cursor-pointer relative hover-border'>
        <PiShoppingCartLight size={30}/>
        <span className='text-[14px] text-light-text cursor-pointer'>Cart</span>
      </button>
      {/* Account */}
      <button className='flex flex-row items-end gap-1 cursor-pointer relative hover-border'>
        <RxPerson size={30}/>
        <span className='text-[14px] text-light-text'>Account</span>
      </button>
    </header>
  )
}

export default Header