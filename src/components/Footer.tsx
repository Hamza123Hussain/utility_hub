import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] p-4 fixed bottom-0 w-full text-white text-center">
      <p>&copy; {new Date().getFullYear()} UtilityHub. All rights reserved.</p>
    </footer>
  )
}

export default Footer
