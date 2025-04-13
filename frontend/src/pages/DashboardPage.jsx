import { useState } from 'react'
import React from 'react'
import Navbar from '../components/UI/Navbar'
import BookStore from '../components/BookStore/BookStore'

const DashboardPage = () => {
  return (
    <div>
     <BookStore />
    </div>
  )
}

export default DashboardPage
