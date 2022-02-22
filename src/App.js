import React from 'react'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { SubMenu } from './components/SubMenu';

export const App = () => {
  return (
    <>
      <NavBar/>
      <SubMenu/>
      <Hero/>
      <SideBar/>
    </>
  )
}
