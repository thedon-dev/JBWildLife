import React from 'react'

const Footer = ({ title }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>&copy; {title}. All rights reserved.</p>
    </footer>
  )
}

export default Footer