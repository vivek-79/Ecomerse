import { IconType } from "react-icons";
import { SiFireship } from "react-icons/si";
import { RiArrowDropDownLine } from 'react-icons/ri'

type NavList = {
    text:string;
    iconBefore?:IconType;
    iconAfter?:IconType
}

export const navList:NavList[] = [
    {
        text:'Deals',
        iconBefore:SiFireship
    },
    {
        text:'Home',
        iconAfter: RiArrowDropDownLine
    },
    {
        text:'About',
    },
    {
        text:'Shop',
        iconAfter: RiArrowDropDownLine
    },
    {
        text:'Vendors',
        iconAfter: RiArrowDropDownLine
    },
    {
        text:'Mega menu',
        iconAfter: RiArrowDropDownLine
    },
    {
        text:'Contact',
    }
]