import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icon: <FaIcons.FaUserAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/Orders',
    icon: <FaIcons.FaClipboardList/>,
    cName: 'nav-text'
  },
  {
    title: 'Wishlist',
    path: '/Wishlist',
    icon: <FaIcons.FaHeart/>,
    cName: 'nav-text'
  },
  
  {
    title: 'Support',
    path: '/support',
    icon: <FaIcons.FaPhoneAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <FaIcons.FaInfoCircle />,
    cName: 'nav-text'
  }
  
];
