import { navList } from '@/app/data/navList'
import { Span } from 'next/dist/trace'
import React from 'react'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

type Props = {}

const Navigation = (props: Props) => {
return (
    <nav className='my-4 border-y-1 border-light-gray py-2 flex-roww justify-between'>

        {/* Browse */}
        <button className='bg-[#3BB77E] text-white py-2 pl-3 rounded-sm text-[16px] flex-roww pr-2'>
            <span><HiOutlineViewGrid className='mr-1'/></span>
                Browse All Categories
            <span><RiArrowDropDownLine className='text-xl'/></span>
        </button>
        
        {/* Navigation */}
        <ul className='flex-roww text-[14px] flex-1 justify-around'>
            { navList.map((item)=>(
                <li key={item.text}>
                    <button className='flex-roww gap-1'>
                        {item.iconBefore && <span >{<item.iconBefore className='text-light-green'/>}</span>}
                        {item.text}
                        { item.iconAfter && <span>{<item.iconAfter/>}</span>}
                    </button>
                </li>
            )) }
        </ul>

        {/* Support */}
        <button className='flex-roww'>
            <TfiHeadphoneAlt className='text-3xl mt-2'/>
            <span className='flex flex-col'>
                <span className='text-[24px] text-[#3BB77E]'>1900 - 888</span>
                <span className='text-[12px] -mt-3 text-light-text'>24/7 Support Center</span>
            </span>
        </button>
    </nav>
)
}

export default Navigation