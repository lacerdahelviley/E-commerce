import Burger from 'components/menuBurger'
import React from 'react'
import SalesRegistration from './salesRegister'

export default function SalesRegister({ open, setOpen }) {
  return (
    <>
        <Burger open={open} setOpen={setOpen} />
        <SalesRegistration />
    </>
  )
}
