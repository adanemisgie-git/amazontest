import React, { ReactElement } from 'react'
import Footer from './footer/Footer'
import BottomHeader from './header/BottomHeader'
import Header from './header/Header'
interface props{
    children:ReactElement
}

const RootLayout = ({children}:props) => {
  return (
    <>
        <Header/>
        <BottomHeader/>
        {children}
        <Footer/>
    </>
  )
}

export default RootLayout